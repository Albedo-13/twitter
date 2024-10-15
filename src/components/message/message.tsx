import { Timestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";
import noAvatar from "@/assets/imgs/no_avatar.png";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";

import {
  MessageWrapper,
  AvatarWrapper,
  BodyWrapper,
  UserInfoWrapper,
  UserName,
  MessageText,
} from "./styled";

type MessageData = {
  authorUid: string;
  createdAt: Timestamp;
  text: string;
  uid: string;
};

type UserDataType = {
  photoURL: string | null;
  displayName: string | null;
};

export const Message = ({ authorUid, text}: MessageData) => {
  const user = useAppSelector(getUserSelector);

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

  // const getImageUrl = async () => {
  //   try {
  //     if (image === null) return;
  //     const url = await getDownloadURL(ref(storage, image));
  //     return url;
  //   } catch (error) {
  //     return undefined;
  //   }
  // };

  useEffect(() => {
    getAdditionalUserDataByAuthorUid(authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, []);

  return (
    <MessageWrapper className={user.uid === authorUid ? "messageByUser": ""}>
      <AvatarWrapper>
        <Avatar src={userData.photoURL || noAvatar} />
      </AvatarWrapper>
      <BodyWrapper>
        <UserInfoWrapper>
          <UserName>{userData.displayName}</UserName>
        </UserInfoWrapper>
        <MessageText>{text}</MessageText>
      </BodyWrapper>
    </MessageWrapper>
  );
};
