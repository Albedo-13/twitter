import debounce from "debounce";
import { deleteDoc, doc, DocumentData, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import liked from "@/assets/icons/liked.svg";
import notLiked from "@/assets/icons/not_liked.svg";
import trashCan from "@/assets/icons/trash-can.svg";
import noAvatar from "@/assets/imgs/no_avatar.svg";
import { DEBOUNCE_DELAY_MS } from "@/constants/constants";
import { ROUTES } from "@/constants/routes";
import { db, storage } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import {
  AvatarWrapper,
  BodyWrapper,
  DeleteIcon,
  Image,
  LikeCount,
  LikeIcon,
  LikeWrapper,
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

export function Tweet({ userUid, post }: TweetProps) {
  const user = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

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

  const handleDeleteClick = async () => {
    if (post.image) {
      const desertRef = ref(storage, post.image);
      deleteObject(desertRef);
    }
    await deleteDoc(doc(db, "posts", post.uid));
    navigate(ROUTES.HOME);
  };

  const handleLikeClick = async () => {
    const userUid = user.uid;
    if (userUid && post.likedByUsers.includes(userUid)) {
      const newLikes = post.likes - 1;
      const newLikedByUsers = post.likedByUsers.filter(
        (uid: string) => uid !== userUid
      );

      databaseLikeChange(newLikes, newLikedByUsers);
    } else if (userUid && !post.likedByUsers.includes(userUid)) {
      const newLikes = post.likes + 1;
      const newLikedByUsers = [...post.likedByUsers, userUid];
      databaseLikeChange(newLikes, newLikedByUsers);
    }
  };

  const databaseLikeChange = debounce(
    (newLikes: number, newLikedByUsers: DocumentData[string]) => {
      const postRef = doc(db, "posts", post.uid);
      updateDoc(postRef, {
        likes: newLikes,
        likedByUsers: newLikedByUsers,
      });
    },
    DEBOUNCE_DELAY_MS
  );

  const handleOpenPost = () => {
    navigate(`${ROUTES.POST}/${post.uid}`);
  };

  return (
    <Wrapper onClick={handleOpenPost}>
      <AvatarWrapper>
        <Avatar src={photoUrl || noAvatar} />
      </AvatarWrapper>
      <BodyWrapper>
        <UserInfoWrapper>
          <UserName>{post.displayName}</UserName>
          <UserTag>{post.email}</UserTag>
        </UserInfoWrapper>
        <TweetText>{post.content}</TweetText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
        <LikeWrapper>
          <LikeIcon
            src={post.likedByUsers.includes(userUid) ? liked : notLiked}
            alt="like post"
            data-isliked={post.likedByUsers.includes(userUid)}
            onClick={handleLikeClick}
          />
          <LikeCount>{post.likes}</LikeCount>
        </LikeWrapper>
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
