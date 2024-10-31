import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { SyntheticEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Modal } from "@/components/modal/modal";
import { ModalPortal } from "@/components/modal/modal-portal";
import { ROUTES } from "@/constants/routes";
import { db, storage } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { useModalControls } from "@/hooks/use-modal-controls";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { PostData } from "@/types";

import DeleteConfirmation from "./deleteConfirmation";
import { MoreWrapper, MoreWrapperItem, SVGIcon } from "./styled";

const More = ({
  uid,
  image,
  authorUid,
}: Pick<PostData, "uid" | "image" | "authorUid">) => {
  const user = useAppSelector(getUserSelector);
  const { showModal, handleModalShow, handleModalClose } = useModalControls();

  const location = useLocation();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const handleDeleteClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
    handleModalClose();
    if (image) {
      const desertRef = ref(storage, image);
      await deleteObject(desertRef);
    }
    await deleteDoc(doc(db, "posts", uid));
    if (location.pathname.includes(ROUTES.POST)) {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <>
      <MoreWrapper className={opened ? "opened" : ""}>
        <MoreWrapperItem>
          <SVGIcon
            viewBox="0 0 24 24"
            onClick={() => {
              setOpened((prev) => !prev);
            }}
          >
            <g>
              <path
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                fill="currentColor"
              ></path>
            </g>
          </SVGIcon>
        </MoreWrapperItem>
        <MoreWrapperItem>
          <SVGIcon
            viewBox="0 0 50 50"
            onClick={() => {
              setOpened((prev) => !prev);
            }}
          >
            <g>
              <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                fill="currentColor"
              ></path>
            </g>
          </SVGIcon>
        </MoreWrapperItem>
        {user.uid === authorUid && (
          <MoreWrapperItem>
            <SVGIcon viewBox="0 0 41.336 41.336" onClick={handleModalShow}>
              <g>
                <path
                  d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2
		s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2
		S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
		s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
		s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21
		c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"
                  fill="currentColor"
                />
              </g>
            </SVGIcon>
          </MoreWrapperItem>
        )}
      </MoreWrapper>
      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <DeleteConfirmation
                handleModalClose={handleModalClose}
                handleDeleteClick={handleDeleteClick}
              />
            </Modal>
          }
        />
      )}
    </>
  );
};

export default More;
