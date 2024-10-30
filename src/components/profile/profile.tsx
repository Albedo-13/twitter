import addMedia from "@/assets/icons/add-media.svg";
import noAvatar from "@/assets/imgs/no_avatar.png";
import noBackground from "@/assets/imgs/no_background.webp";
import { Avatar } from "@/components/avatar/avatar";
import { EditProfile } from "@/components/edit-profile/edit-profile";
import { Header } from "@/components/header/header";
import { Modal } from "@/components/modal/modal";
import { ModalPortal } from "@/components/modal/modal-portal";
import { UploadModal } from "@/components/upload-modal/upload-modal";
import { useModalControls } from "@/hooks/use-modal-controls";
import { Button } from "@/ui/buttons";

import {
  AvatarWrapper,
  AvatarWrapperWithChange,
  EditButtonWrapper,
  ImageUpload,
  ProfileBackgroundImage,
  ProfileBackgroundImageWrapperWithChange,
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
  editPermission?: boolean;
};

export function Profile({
  photoURL,
  displayName,
  status,
  email,
  editPermission = false,
}: ProfileProps) {
  const {
    showModal: showEditModal,
    handleModalShow: handleEditModalShow,
    handleModalClose: handleEditModalClose,
  } = useModalControls();
  const {
    showModal: showBackgroundModal,
    handleModalShow: handleBackgroundModalShow,
    handleModalClose: handleBackgroundModalClose,
  } = useModalControls();
  const {
    showModal: showAvatarModal,
    handleModalShow: handleAvatarModalShow,
    handleModalClose: handleAvatarModalClose,
  } = useModalControls();

  return (
    <>
      <ProfileWrapper>
        <Header title={displayName} />
        {editPermission ? (
          <ProfileBackgroundImageWrapperWithChange
            onClick={handleBackgroundModalShow}
          >
            <ProfileBackgroundImage src={noBackground} />
            <ImageUpload src={addMedia} alt="upload file" />
          </ProfileBackgroundImageWrapperWithChange>
        ) : (
          <ProfileBackgroundImage src={noBackground} />
        )}

        <ProfileBody>
          {editPermission ? (
            <AvatarWrapperWithChange onClick={handleAvatarModalShow}>
              <Avatar src={photoURL || noAvatar} />
              <ImageUpload src={addMedia} alt="upload file" />
            </AvatarWrapperWithChange>
          ) : (
            <AvatarWrapper>
              <Avatar src={photoURL || noAvatar} />
            </AvatarWrapper>
          )}
          {editPermission && (
            <EditButtonWrapper>
              <Button
                type="button"
                variant="outlined"
                size="small"
                onClick={handleEditModalShow}
              >
                Edit profile
              </Button>
            </EditButtonWrapper>
          )}

          <ProfileBodyName>{displayName}</ProfileBodyName>
          <ProfileBodyTag>{email}</ProfileBodyTag>
          <ProfileBodyStatus>{status}</ProfileBodyStatus>
        </ProfileBody>
      </ProfileWrapper>

      {showEditModal && (
        <ModalPortal
          children={
            <Modal onClose={handleEditModalClose}>
              <EditProfile handleModalClose={handleEditModalClose} />
            </Modal>
          }
        />
      )}
      {showBackgroundModal && (
        <ModalPortal
          children={
            <Modal onClose={handleBackgroundModalClose}>
              <UploadModal
                handleModalClose={handleBackgroundModalClose}
                uploadType="background"
                placeholder="You can change your background image here."
                toastMessage="Background image updated"
              />
              {/* <EditProfile handleModalClose={handleBackgroundModalClose} /> */}
            </Modal>
          }
        />
      )}
      {showAvatarModal && (
        <ModalPortal
          children={
            <Modal onClose={handleAvatarModalClose}>
              <UploadModal
                handleModalClose={handleAvatarModalClose}
                uploadType="avatar"
                placeholder="It will be easier for friends to get to know you if you upload your real photo."
                toastMessage="Avatar updated"
              />
              {/* <EditProfile  */}
            </Modal>
          }
        />
      )}
    </>
  );
}
