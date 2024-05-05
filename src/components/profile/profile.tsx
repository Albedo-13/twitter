import noAvatar from "@/assets/imgs/no_avatar.svg";
import noBackground from "@/assets/imgs/no_background.webp";
import { Button } from "@/ui/buttons/buttons";

import { Avatar } from "../avatar/avatar";
import {
  AvatarWrapper,
  EditButtonWrapper,
  ProfileBackgroundImage,
  ProfileBody,
  ProfileBodyName,
  ProfileBodyStatus,
  ProfileBodyTag,
  ProfileHeader,
  ProfileHeaderName,
  ProfileHeaderTweets,
  ProfileWrapper,
} from "./styled";

export function Profile() {
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <ProfileHeaderName>Bober</ProfileHeaderName>
        <ProfileHeaderTweets>1,070 Tweets</ProfileHeaderTweets>
      </ProfileHeader>
      <ProfileBackgroundImage src={noBackground} />
      <ProfileBody>
        <AvatarWrapper>
          <Avatar src={noAvatar} $width={"150px"} />
        </AvatarWrapper>
        <EditButtonWrapper>
          <Button type="button" $variant="outlined" $size="small">
            Edit profile
          </Button>
        </EditButtonWrapper>
        <ProfileBodyName>Bober</ProfileBodyName>
        <ProfileBodyTag>@bober_kurwa</ProfileBodyTag>
        <ProfileBodyStatus>React developer in Modsen | Male</ProfileBodyStatus>
      </ProfileBody>
    </ProfileWrapper>
  );
}
