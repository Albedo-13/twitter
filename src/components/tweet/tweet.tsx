import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar } from "@/components/avatar/avatar";
import { ROUTES } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { PostData } from "@/types";
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

type UserDataType = {
  avatar: string;
  displayName: string | null;
};

export function Tweet({
  authorUid,
  bookmarkedByUsers,
  content,
  createdAt,
  image,
  likedByUsers,
  likes,
  uid,
}: PostData) {
  const user = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserDataType>({
    avatar: "",
    displayName: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (image) {
      getImageUrl(image)
        .then((url) => setImgUrl(url))
        .catch(() => setImgUrl(null));
    }
    getAdditionalUserDataByUid(authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, [authorUid, image]);

  const handleOpenPost = () => {
    navigate(`${ROUTES.POST}/${uid}`);
  };

  const link = `${ROUTES.PROFILE}${user.uid !== authorUid ? `/${authorUid}` : ""}`;

  return (
    <>
      <Wrapper>
        <AvatarWrapperLink to={link}>
          <Avatar src={userData.avatar} />
        </AvatarWrapperLink>
        <BodyWrapper>
          <UserInfoWrapper>
            <UserNameLink to={link}>{userData.displayName}</UserNameLink>
            <Time seconds={createdAt.seconds} />
            {authorUid === user.uid && (
              <More uid={uid} image={image} authorUid={authorUid} />
            )}
          </UserInfoWrapper>
          <TweetText onClick={handleOpenPost}>{content}</TweetText>
          {imgUrl && <Image src={imgUrl} alt="tweet image" />}
          <InteractionContainer>
            <Like uid={uid} likes={likes} likedByUsers={likedByUsers} />
            <Bookmark uid={uid} bookmarkedByUsers={bookmarkedByUsers} />
          </InteractionContainer>
        </BodyWrapper>
      </Wrapper>
    </>
  );
}
