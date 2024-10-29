import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";

import noAvatar from "@/assets/imgs/no_avatar.png";
import { Avatar } from "@/components/avatar/avatar";
import Time from "@/components/tweet/time";
import { storage } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

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
  photoURL: string | null;
  displayName: string | null;
};

export const Message = ({ authorUid, text, image, createdAt }: MessageData) => {
  const { uid } = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserDataType>({
    photoURL: null,
    displayName: null,
  });

  const getAdditionalUserDataByAuthorUid = async (authorUid: string) => {
    const queryUserSnapshot = await queryUserEqualByValue("uid", authorUid);
    if (!queryUserSnapshot.empty) {
      const { photoURL, displayName } = queryUserSnapshot.docs[0].data();
      return { photoURL, displayName };
    }
  };

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        if (image == undefined) return null;
        const url = await getDownloadURL(ref(storage, image));
        return url;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(null));
    getAdditionalUserDataByAuthorUid(authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, [authorUid, image]);

  return (
    <MessageWrapper className={uid === authorUid ? "messageByUser" : ""}>
      <AvatarWrapperLink to={"/profile/" + authorUid}>
        <Avatar src={userData.photoURL || noAvatar} />
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
