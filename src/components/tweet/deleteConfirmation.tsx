import { SyntheticEvent } from "react";

import {
  ConfirmationButton,
  ConfirmationButtonsWrapper,
  ConfirmationMainText,
  ConfirmationText,
} from "./styled";

type DeleteConfirmationProps = {
  handleModalClose: VoidFunction;
  handleDeleteClick: (e: SyntheticEvent) => Promise<void>;
};

const DeleteConfirmation = ({
  handleModalClose,
  handleDeleteClick,
}: DeleteConfirmationProps) => {
  return (
    <>
      <ConfirmationText>You are about to delete this post</ConfirmationText>
      <ConfirmationMainText>Are you sure?</ConfirmationMainText>
      <ConfirmationButtonsWrapper>
        <ConfirmationButton onClick={handleDeleteClick} className="yes">
          Yes
        </ConfirmationButton>
        <ConfirmationButton onClick={handleModalClose} className="no">
          No
        </ConfirmationButton>
      </ConfirmationButtonsWrapper>
    </>
  );
};

export default DeleteConfirmation;
