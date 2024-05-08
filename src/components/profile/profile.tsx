import noAvatar from "@/assets/imgs/no_avatar.svg";
import noBackground from "@/assets/imgs/no_background.webp";
import { useModalControls } from "@/hooks/use-modal-controls";
import { Button } from "@/ui/buttons";

import { Avatar } from "../avatar/avatar";
import { EditProfile } from "../edit-profile/edit-profile";
import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";
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
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  return (
    <>
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
            <Button
              type="button"
              $variant="outlined"
              $size="small"
              onClick={handleModalShow}
            >
              Edit profile
            </Button>
          </EditButtonWrapper>
          <ProfileBodyName>Bober</ProfileBodyName>
          <ProfileBodyTag>@bober_kurwa</ProfileBodyTag>
          <ProfileBodyStatus>
            React developer in Modsen | Male
          </ProfileBodyStatus>
        </ProfileBody>
      </ProfileWrapper>

      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <EditProfile />
            </Modal>
          }
        />
      )}
    </>
  );
}
