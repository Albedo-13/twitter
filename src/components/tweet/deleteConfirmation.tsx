import {
  ConfirmationText,
  ConfirmationMainText,
  ConfirmationButtonsWrapper,
  ConfirmationButton,
} from "./styled";

const DeleteConfirmation = ({handleModalClose, handleDeleteClick}: any) => {
  return (
    <>
      <ConfirmationText>You are about to delete this post</ConfirmationText>
      <ConfirmationMainText>Are you sure?</ConfirmationMainText>
      <ConfirmationButtonsWrapper>
        <ConfirmationButton onClick={handleDeleteClick}>Yes</ConfirmationButton>
        <ConfirmationButton onClick={handleModalClose}>No</ConfirmationButton>
      </ConfirmationButtonsWrapper>
    </>
  );
};

export default DeleteConfirmation;
