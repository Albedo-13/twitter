import {
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { Tweet } from "@/components/tweet/tweet";
import { db } from "@/firebase";

import { NoPost } from "./styled";

type TweetsListProps = {
  filterFunc?: (post: DocumentData) => boolean;
};

export function TweetsList({
  filterFunc = () => {
    return true;
  },
}: TweetsListProps) {
  const [posts, setPosts] = useState<DocumentData[]>([]);

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
      getPosts().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  const postsToShow = posts.filter(filterFunc);

  return (
    <>
      {postsToShow.length > 0 ? (
        postsToShow.map((post) => (
          <Tweet
            key={`${post.authorUid + post.createdAt.seconds + post.createdAt.nanoseconds}`}
            post={post}
          />
        ))
      ) : (
        <NoPost>There is no post yet...</NoPost>
      )}
    </>
  );
}
