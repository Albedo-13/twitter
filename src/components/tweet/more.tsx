import trashCan from "@/assets/icons/trash-can.svg";
import expand from "@/assets/icons/expand.svg";
import { deleteDoc, doc, DocumentData } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, storage } from "@/firebase";
import { ROUTES } from "@/constants/routes";

import { MoreWrapper, MoreWrapperItem, Icon } from "./styled";

type MoreProps = {
  post: DocumentData;
  user: any;
};

const More = ({ post, user }: MoreProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const handleDeleteClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
    if (post.image) {
      const desertRef = ref(storage, post.image);
      await deleteObject(desertRef);
    }
    await deleteDoc(doc(db, "posts", post.uid));
    if (location.pathname.includes(ROUTES.POST)) {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <MoreWrapper className={opened ? "opened" : ""}>
      <MoreWrapperItem>
        <Icon
          onClick={() => {
            setOpened((prev) => !prev);
          }}
          src={expand}
          alt="more"
        />
      </MoreWrapperItem>
      {user.uid === post.authorUid && (
        <MoreWrapperItem>
          <Icon onClick={handleDeleteClick} src={trashCan} alt="delete" />
        </MoreWrapperItem>
      )}
    </MoreWrapper>
  );
};

export default More;
