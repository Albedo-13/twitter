import { useState, useEffect } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/firebase";

import noAvatar from "@/assets/imgs/no_avatar.png";
import { ChatsContainer, ChatWrapper, UserName, UserTag,  AvatarWrapper } from "./styled";

type ChatsData = {
  image: string | null;
  members: string[];
  name: string;
  uid: string;
};

type ChatListProps = {
  chats: ChatsData[];
};

export const ChatList = ({ chats }: ChatListProps) => {
  return (
    <ChatsContainer>
      {chats.map((data, i) => (
        <Chat key={i} {...data} />
      ))}
    </ChatsContainer>
  );
};

const Chat = ({ image, members, name }: ChatsData) => {
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

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
  }, []);

  return (
    <ChatWrapper>
      <AvatarWrapper>
        <Avatar src={imgUrl || noAvatar} />
      </AvatarWrapper>
      <div>
        <UserName>{name}</UserName>
        <UserTag>{members.length} members</UserTag>
        {/* <UserText>{content}</UserText> */}
      </div>
    </ChatWrapper>
  );
};
