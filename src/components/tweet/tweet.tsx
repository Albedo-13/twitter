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
} from "./styled";

import Time from "./time";
import Like from "./like";
import More from "./more";

type TweetProps = {
  post: DocumentData;
};

export function Tweet({ post }: TweetProps) {
  const user = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

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

  const handleOpenPost = () => {
    navigate(`${ROUTES.POST}/${post.uid}`);
  };

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={photoUrl || noAvatar} />
      </AvatarWrapper>
      <BodyWrapper>
        <UserInfoWrapper>
          <UserName>{post.displayName}</UserName>
          <Time timestamp={post.createdAt.seconds} />
          {/* <UserTag>{post.email}</UserTag> */}
          <More post={post} user={user} />
        </UserInfoWrapper>
        <TweetText onClick={handleOpenPost}>{post.content}</TweetText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
        <Like post={post} user={user} />
      </BodyWrapper>
      
    </Wrapper>
  );
}
