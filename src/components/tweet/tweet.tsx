import notLiked from "@/assets/icons/not_liked.svg";
import noAvatar from "@/assets/imgs/no_avatar.svg";
import nobackground from "@/assets/imgs/no_background.webp";

import { Avatar } from "../avatar/avatar";
import {
  AvatarWrapper,
  BodyWrapper,
  Image,
  TweetText,
  UserInfoWrapper,
  UserName,
  UserTag,
  Wrapper,
} from "./styled";

export default function Tweet() {
  const image = true;
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={noAvatar} />
      </AvatarWrapper>
      <BodyWrapper>
        <UserInfoWrapper>
          <UserName>Bober</UserName>
          <UserTag>@bober_kurwa</UserTag>
        </UserInfoWrapper>
        <TweetText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, ab
          rem hic dolorum sapiente soluta? Voluptatem, harum incidunt nulla
          repellendus, ea eaque quos a aperiam culpa accusamus voluptate
          quisquam voluptatum.
        </TweetText>
        {image && <Image src={nobackground} alt="tweet image" />}
        <div>
          <img src={notLiked} alt="" />
          <span>100</span>
        </div>
      </BodyWrapper>
    </Wrapper>
  );
}
