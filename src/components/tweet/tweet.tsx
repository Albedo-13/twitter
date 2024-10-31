import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar } from "@/components/avatar/avatar";
import { ROUTES } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { getAdditionalUserDataByUid } from "@/utils/firebase/helpers";
import { getImageUrl } from "@/utils/firebase/helpers";

import Bookmark from "./interaction/bookmark";
import Like from "./interaction/like";
import More from "./more";
import {
  AvatarWrapperLink,
  BodyWrapper,
  Image,
  InteractionContainer,
  TweetText,
  UserInfoWrapper,
  UserNameLink,
  Wrapper,
} from "./styled";
import Time from "./time";

type TweetProps = {
  post: DocumentData;
};

type UserDataType = {
  avatar: string;
  displayName: string | null;
};

export function Tweet({ post }: TweetProps) {
  const user = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserDataType>({
    avatar: "",
    displayName: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    getImageUrl(post?.image)
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(null));
    getAdditionalUserDataByUid(post.authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, [post.authorUid, post?.image]);

  const handleOpenPost = () => {
    navigate(`${ROUTES.POST}/${post.uid}`);
  };

  const link = `${ROUTES.PROFILE}${user.uid !== post.authorUid ? `/${post.authorUid}` : ""}`;

  return (
    <>
      <Wrapper>
        <AvatarWrapperLink to={link}>
          <Avatar src={userData.avatar} />
        </AvatarWrapperLink>
        <BodyWrapper>
          <UserInfoWrapper>
            <UserNameLink to={link}>{userData.displayName}</UserNameLink>
            <Time seconds={post.createdAt.seconds} />
            {post.authorUid === user.uid && <More post={post} />}
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
