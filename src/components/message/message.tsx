import { Timestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";
import noAvatar from "@/assets/imgs/no_avatar.png";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase";
import {
  MessageWrapper,
  AvatarWrapper,
  BodyWrapper,
  UserInfoWrapper,
  UserName,
  MessageText,
  Image
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

export const Message = ({ authorUid, text, image }: MessageData) => {
  const user = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
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

  const getImageUrl = async () => {
    try {
      if (image === null) return;
      const url = await getDownloadURL(ref(storage, image));
      return url;
    } catch (error) {
      return undefined;
    }
  };

  useEffect(() => {
    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(undefined));
    getAdditionalUserDataByAuthorUid(authorUid).then((data) =>
      setUserData(data as UserDataType)
    );
  }, []);

  return (
    <MessageWrapper className={user.uid === authorUid ? "messageByUser" : ""}>
      <AvatarWrapper>
        <Avatar src={userData.photoURL || noAvatar} />
      </AvatarWrapper>
      <BodyWrapper>
        <UserInfoWrapper>
          <UserName>{userData.displayName}</UserName>
        </UserInfoWrapper>
        <MessageText>
          {text}
        </MessageText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
      </BodyWrapper>
    </MessageWrapper>
  );
};
