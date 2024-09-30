import { deleteDoc, doc, DocumentData } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import trashCan from "@/assets/icons/trash-can.svg";
import noAvatar from "@/assets/imgs/no_avatar.png";
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
  TweetText,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from "./styled";

import Time from "./time";
import Like from "./like";

type TweetProps = {
  post: DocumentData;
};

export function Tweet({ post }: TweetProps) {
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
          <Time timestamp={post.createdAt.seconds} />
          {/* <UserTag>{post.email}</UserTag> */}
        </UserInfoWrapper>
        <TweetText>{post.content}</TweetText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
        <Like post={post} user={user} />
      </BodyWrapper>
      {user.uid === post.authorUid && (
        <DeleteIcon
          onClick={handleDeleteClick}
          src={trashCan}
          alt="delete icon"
        />
      )}
    </Wrapper>
  );
}

