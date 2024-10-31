import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

import { Avatar } from "@/components/avatar/avatar";
import Time from "@/components/tweet/time";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { getAdditionalUserDataByUid } from "@/utils/firebase/helpers";
import { getImageUrl } from "@/utils/firebase/helpers";

import {
  AvatarWrapperLink,
  BodyWrapper,
  Image,
  MessageText,
  MessageWrapper,
  TimeText,
  UserInfoWrapperLink,
  UserName,
} from "./styled";

type MessageData = {
  authorUid: string;
  createdAt: Timestamp;
  image: string;
  text: string;
  uid: string;
};

type UserDataType = {
  avatar: string;
  displayName: string | null;
};

export const Message = ({ authorUid, text, image, createdAt }: MessageData) => {
  const { uid } = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserDataType>({
    avatar: "",
    displayName: null,
  });

  useEffect(() => {
    getImageUrl(image)
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(null));
    getAdditionalUserDataByUid(authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, [authorUid, image]);

  return (
    <MessageWrapper className={uid === authorUid ? "messageByUser" : ""}>
      <AvatarWrapperLink to={"/profile/" + authorUid}>
        <Avatar src={userData.avatar} />
      </AvatarWrapperLink>
      <BodyWrapper>
        <UserInfoWrapperLink to={"/profile/" + authorUid}>
          <UserName>{userData.displayName}</UserName>
        </UserInfoWrapperLink>
        <MessageText>{text}</MessageText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
        <TimeText>
          <Time seconds={createdAt.seconds} />
        </TimeText>
      </BodyWrapper>
    </MessageWrapper>
  );
};
