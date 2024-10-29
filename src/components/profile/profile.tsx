import noAvatar from "@/assets/imgs/no_avatar.png";
import noBackground from "@/assets/imgs/no_background.webp";
import { Avatar } from "@/components/avatar/avatar";
import { EditProfile } from "@/components/edit-profile/edit-profile";
import { Header } from "@/components/header/header";
import { Modal } from "@/components/modal/modal";
import { ModalPortal } from "@/components/modal/modal-portal";
import { useModalControls } from "@/hooks/use-modal-controls";
import { Button } from "@/ui/buttons";

import {
  AvatarWrapper,
  EditButtonWrapper,
  ProfileBackgroundImage,
  ProfileBody,
  ProfileBodyName,
  ProfileBodyStatus,
  ProfileBodyTag,
  ProfileWrapper,
} from "./styled";

type ProfileProps = {
  photoURL?: string;
  displayName: string;
  status?: string;
  email?: string;
};

export function Profile({ photoURL, displayName, status, email }: ProfileProps) {
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  return (
    <>
      <ProfileWrapper>
        <Header title={displayName} />
        <ProfileBackgroundImage src={noBackground} />
        <ProfileBody>
          <AvatarWrapper>
            <Avatar src={photoURL || noAvatar} />
          </AvatarWrapper>
          <EditButtonWrapper>
            <Button
              type="button"
              variant="outlined"
              size="small"
              onClick={handleModalShow}
            >
              Edit profile
            </Button>
          </EditButtonWrapper>
          <ProfileBodyName>{displayName}</ProfileBodyName>
          <ProfileBodyTag>{email}</ProfileBodyTag>
          <ProfileBodyStatus>{status}</ProfileBodyStatus>
        </ProfileBody>
      </ProfileWrapper>

      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <EditProfile handleModalClose={handleModalClose} />
            </Modal>
          }
        />
      )}
    </>
  );
}
