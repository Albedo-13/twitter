import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Tweet } from "@/components/tweet/tweet";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";

export function PostPage() {
  const [post, setPost] = useState<DocumentData | null>(null);
  const user = useAppSelector(getUserSelector);

  const location = useLocation();
  const postUid = location.pathname.split("/").at(-1);

  const getPostByUid = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), where("uid", "==", postUid))
    );
    const post = querySnapshot.docs[0].data();
    setPost(post);
  };

  useEffect(() => {
    getPostByUid();
  }, []);

  // TODO: loader
  return post ? <Tweet userUid={user.uid} post={post} /> : <p>loading...</p>;
}
