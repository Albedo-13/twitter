import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { Tweet } from "@/components/tweet/tweet";
import { db } from "@/firebase";
import { PostData, PostsDataList } from "@/types";

import { NoPost } from "./styled";

type TweetsListProps = {
  filterFunc?: (post: PostData) => boolean;
};

export function TweetsList({
  filterFunc = () => {
    return true;
  },
}: TweetsListProps) {
  const [posts, setPosts] = useState<PostsDataList>([]);

  const getPosts = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), orderBy("createdAt", "desc"))
    );
    const data = querySnapshot.docs.map((doc) => doc.data() as PostData);
    return data;
  };

  useEffect(() => {
    const q = collection(db, "posts");
    onSnapshot(q, () => {
      getPosts().then((newPosts) => {
        setPosts(newPosts);
      });
    });
  }, []);

  const postsToShow = posts.filter(filterFunc);

  return (
    <>
      {postsToShow.length > 0 ? (
        postsToShow.map((post) => <Tweet key={`${post.uid}`} {...post} />)
      ) : (
        <NoPost>There is no post yet...</NoPost>
      )}
    </>
  );
}
