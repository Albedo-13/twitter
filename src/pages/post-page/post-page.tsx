import {
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ToggleTheme } from "@/components/toggle-theme/toggle-theme";
import { Tweet } from "@/components/tweet/tweet";
import { ROUTES } from "@/constants/routes";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { Loader } from "@/loader/loader";
import { getUserSelector } from "@/redux/selectors/user-selectors";

export function PostPage() {
  const [post, setPost] = useState<DocumentData | null>(null);
  const user = useAppSelector(getUserSelector);

  const navigate = useNavigate();
  const location = useLocation();
  const postUid = location.pathname.split("/").at(-1);

  const getPostByUid = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), where("uid", "==", postUid))
    );
    if (!querySnapshot.docs[0]) throw new Error("no post by this id");
    const post = querySnapshot.docs[0].data();
    setPost(post);
  };

  useEffect(() => {
    const q = collection(db, "posts");
    onSnapshot(q, () => {
      getPostByUid().catch(() => navigate(ROUTES.HOME));
    });
  }, []);

  return (
    <>
      <ToggleTheme />
      {post ? <Tweet userUid={user.uid} post={post} /> : <Loader />}
    </>
  );
}
