import { DocumentData } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import noAvatar from "@/assets/imgs/no_avatar.png";
import { ROUTES } from "@/constants/routes";
import { storage } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import {
  AvatarWrapper,
  BodyWrapper,
  Image,
  TweetText,
  UserInfoWrapper,
  UserName,
  Wrapper,
  InteractionContainer,
} from "./styled";

import Time from "./time";
import Like from "./interaction/like";
import Bookmark from "./interaction/bookmark";
import More from "./more";

type TweetProps = {
  post: DocumentData;
};

type UserDataType = {
  photoURL: string | null;
  displayName: string | null;
};

export function Tweet({ post }: TweetProps) {
  const user = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  // const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  const [userData, setUserData] = useState<UserDataType>({
    photoURL: null,
    displayName: null,
  });
  const navigate = useNavigate();

  const getImageUrl = async () => {
    try {
      const url = await getDownloadURL(ref(storage, post?.image));
      return url;
    } catch (error) {
      return undefined;
    }
  };

  const getAdditionalUserDataByUid = async (userId: string) => {
    const queryUserSnapshot = await queryUserEqualByValue("uid", userId);
    if (!queryUserSnapshot.empty) {
      const { photoURL, displayName } = queryUserSnapshot.docs[0].data();
      return { photoURL, displayName };
    }
  };

  useEffect(() => {
    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(undefined));
    getAdditionalUserDataByUid(post.authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, []);

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
            <Time timestamp={post.createdAt.seconds} />
            {/* <UserTag>{post.email}</UserTag> */}
            <More post={post} user={user} />
          </UserInfoWrapper>
          <TweetText onClick={handleOpenPost}>{post.content}</TweetText>
          {imgUrl && <Image src={imgUrl} alt="tweet image" />}
          <InteractionContainer>
            <Like post={post} user={user} />
            <Bookmark post={post} user={user} />
          </InteractionContainer>
        </BodyWrapper>
      </Wrapper>
    </>
  );
}
