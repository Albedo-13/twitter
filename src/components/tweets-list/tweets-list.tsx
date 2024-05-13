import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "@/firebase";

import Tweet from "../tweet/tweet";

export function TweetsList() {
  const [posts, setPosts] = useState<DocumentData[]>([]);

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
      {posts.map((post) => (
        <Tweet
          key={`${post.authorUid + post.createdAt.seconds + post.createdAt.nanoseconds}`}
          post={post}
        />
      ))}
    </>
  );
}
