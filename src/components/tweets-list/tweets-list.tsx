import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";

import Tweet from "../tweet/tweet";

export function TweetsList() {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const user = useAppSelector((state) => state.userReducer);
  const location = useLocation();

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts = querySnapshot.docs.map((doc) => doc.data());
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);
  return (
    <>
      {posts
        .filter((post) =>
          location.pathname === "/profile" ? post.authorUid === user.uid : true
        )
        .map((post) => (
          <Tweet
            key={`${post.authorUid + post.createdAt.seconds + post.createdAt.nanoseconds}`}
            post={post}
          />
        ))}
    </>
  );
}
