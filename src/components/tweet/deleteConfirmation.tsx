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
        <ConfirmationButton onClick={handleDeleteClick} className="yes">Yes</ConfirmationButton>
        <ConfirmationButton onClick={handleModalClose} className="no">No</ConfirmationButton>
      </ConfirmationButtonsWrapper>
    </>
  );
};

export default DeleteConfirmation;
