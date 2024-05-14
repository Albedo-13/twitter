import { deleteDoc, doc, DocumentData } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";

import notLiked from "@/assets/icons/not_liked.svg";
import trashCan from "@/assets/icons/trash-can.svg";
import noAvatar from "@/assets/imgs/no_avatar.svg";
import { db, storage } from "@/firebase";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import {
  AvatarWrapper,
  BodyWrapper,
  DeleteIcon,
  Image,
  TweetText,
  UserInfoWrapper,
  UserName,
  UserTag,
  Wrapper,
} from "./styled";

type TweetProps = {
  userUid: string;
  post: DocumentData;
};

export default function Tweet({ userUid, post }: TweetProps) {
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);

  const getImageUrl = async () => {
    try {
      const url = await getDownloadURL(ref(storage, post?.image));
      setImgUrl(url);
    } catch (error) {
      setImgUrl(undefined);
    }
  };

  const getUserPhotoByUid = async (userId: string) => {
    const queryUserSnapshot = await queryUserEqualByValue("uid", userId);
    if (!queryUserSnapshot.empty) {
      return queryUserSnapshot.docs[0].data().photoURL;
    }
  };

  useEffect(() => {
    getImageUrl();
    getUserPhotoByUid(post.authorUid).then((url) => setPhotoUrl(url));
  }, []);

  const handleDeleteClick = () => {
    if (post.image) {
      const desertRef = ref(storage, post.image);
      deleteObject(desertRef);
    }
    deleteDoc(doc(db, "posts", post.uid));
  };

  const handleLikeClick = () => {
    console.log("handleLikeClick");
  };

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={photoUrl ? photoUrl : noAvatar} />
      </AvatarWrapper>
      <BodyWrapper>
        <UserInfoWrapper>
          <UserName>{post.displayName}</UserName>
          <UserTag>{post.email}</UserTag>
        </UserInfoWrapper>
        <TweetText>{post.content}</TweetText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
        <div onClick={handleLikeClick}>
          <img src={notLiked} alt="" />
          <span>{post.likes}</span>
        </div>
      </BodyWrapper>
      {userUid === post.authorUid && (
        <DeleteIcon
          onClick={handleDeleteClick}
          src={trashCan}
          alt="delete icon"
        />
      )}
    </Wrapper>
  );
}
