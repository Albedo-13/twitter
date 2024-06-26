import debounce from "debounce";
import { deleteDoc, doc, DocumentData, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();

  const getImageUrl = async () => {
    try {
      const url = await getDownloadURL(ref(storage, post?.image));
      return url;
    } catch (error) {
      return undefined;
    }
  };

  const getUserPhotoByUid = async (userId: string) => {
    const queryUserSnapshot = await queryUserEqualByValue("uid", userId);
    if (!queryUserSnapshot.empty) {
      return queryUserSnapshot.docs[0].data().photoURL;
    }
  };

  useEffect(() => {
    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(undefined));
    getUserPhotoByUid(post.authorUid).then((url) => setPhotoUrl(url));
  }, []);

  const handleDeleteClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
    if (post.image) {
      const desertRef = ref(storage, post.image);
      await deleteObject(desertRef);
    }
    await deleteDoc(doc(db, "posts", post.uid));
    if (location.pathname.includes(ROUTES.POST)) {
      navigate(ROUTES.HOME);
    }
  };

  const handleLikeClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
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
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={photoUrl || noAvatar} />
      </AvatarWrapper>
      <BodyWrapper onClick={handleOpenPost}>
        <UserInfoWrapper>
          <UserName>{post.displayName}</UserName>
          <UserTag>{post.email}</UserTag>
        </UserInfoWrapper>
        <TweetText>{post.content}</TweetText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
        <LikeWrapper onClick={handleLikeClick}>
          <LikeIcon
            src={post.likedByUsers.includes(userUid) ? liked : notLiked}
            alt="like post"
            data-isliked={post.likedByUsers.includes(userUid)}
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
