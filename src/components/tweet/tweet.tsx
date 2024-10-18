import { DocumentData } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import noAvatar from "@/assets/imgs/no_avatar.png";
import { ROUTES } from "@/constants/routes";
import { storage } from "@/firebase";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import Bookmark from "./interaction/bookmark";
import Like from "./interaction/like";
import More from "./more";
import {
  AvatarWrapper,
  BodyWrapper,
  Image,
  InteractionContainer,
  TweetText,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from "./styled";
import Time from "./time";

type TweetProps = {
  post: DocumentData;
};

type UserDataType = {
  photoURL: string | null;
  displayName: string | null;
};

export function Tweet({ post }: TweetProps) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserDataType>({
    photoURL: null,
    displayName: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        const url = await getDownloadURL(ref(storage, post?.image));
        return url;
      } catch (error) {
        return null;
      }
    };

    const getAdditionalUserDataByUid = async (userId: string) => {
      const queryUserSnapshot = await queryUserEqualByValue("uid", userId);
      if (!queryUserSnapshot.empty) {
        const { photoURL, displayName } = queryUserSnapshot.docs[0].data();
        return { photoURL, displayName };
      }
    };

    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(null));
    getAdditionalUserDataByUid(post.authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, [post.authorUid, post?.image]);

  const handleOpenPost = () => {
    navigate(`${ROUTES.POST}/${post.uid}`);
  };

  return (
    <>
      <Wrapper>
        <AvatarWrapper>
          <Avatar src={userData.photoURL || noAvatar} />
        </AvatarWrapper>
        <BodyWrapper>
          <UserInfoWrapper>
            <UserName>{userData.displayName}</UserName>
            <Time seconds={post.createdAt.seconds} />
            <More post={post} />
          </UserInfoWrapper>
          <TweetText onClick={handleOpenPost}>{post.content}</TweetText>
          {imgUrl && <Image src={imgUrl} alt="tweet image" />}
          <InteractionContainer>
            <Like post={post} />
            <Bookmark post={post} />
          </InteractionContainer>
        </BodyWrapper>
      </Wrapper>
    </>
  );
}
