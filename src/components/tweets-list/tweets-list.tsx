import {
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ROUTES } from "@/constants/routes";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";

import { Tweet } from "../tweet/tweet";

export function TweetsList() {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const user = useAppSelector(getUserSelector);
  const location = useLocation();

  const getPosts = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), orderBy("createdAt", "desc"))
    );
    const posts = querySnapshot.docs.map((doc) => doc.data());
    return posts;
  };

  useEffect(() => {
    const q = collection(db, "posts");
    onSnapshot(q, () => {
      getPosts().then((posts) => setPosts(posts));
    });
  }, []);

  return (
    <>
      {posts
        .filter((post) =>
          location.pathname === ROUTES.PROFILE
            ? post.authorUid === user.uid
            : true
        )
        .map((post) => (
          <Tweet
            key={`${post.authorUid + post.createdAt.seconds + post.createdAt.nanoseconds}`}
            userUid={user.uid}
            post={post}
          />
        ))}
    </>
  );
}
