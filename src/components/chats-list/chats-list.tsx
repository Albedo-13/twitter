import { useEffect, useState } from "react";

import noAvatar from "@/assets/imgs/no_avatar.png";
import { Avatar } from "@/components/avatar/avatar";
import { ROUTES } from "@/constants/routes";
import { getImageUrl } from "@/utils/firebase/helpers";

import {
  AvatarWrapper,
  ChatInfoWrapper,
  ChatName,
  ChatsContainer,
  ChatTag,
  ChatWrapper,
} from "./styled";

type ChatsData = {
  image: string | null;
  members: string[];
  name: string;
  uid: string;
};

type ChatsListProps = {
  chats: ChatsData[];
};

export const ChatsList = ({ chats }: ChatsListProps) => {
  return (
    <ChatsContainer>
      {chats.map((data, i) => (
        <Chat key={i} {...data} />
      ))}
    </ChatsContainer>
  );
};

const Chat = ({ image, members, name, uid }: ChatsData) => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    getImageUrl(image)
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(null));
  }, [image]);

  return (
    <ChatWrapper to={`${ROUTES.CHAT}/${uid}`}>
      <AvatarWrapper>
        <Avatar src={imgUrl || noAvatar} />
      </AvatarWrapper>
      <ChatInfoWrapper>
        <ChatName>{name}</ChatName>
        <ChatTag>{members.length} members</ChatTag>
      </ChatInfoWrapper>
    </ChatWrapper>
  );
};
