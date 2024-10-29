import { useEffect, useState } from "react";

import { ROUTES } from "@/constants/routes";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import {
  KickButt,
  MemberNameLink,
  MemberTag,
  Wrapper,
} from "./styled";

type UserDataType = {
  photoURL: string | null;
  displayName: string | null;
  uid: string | null;
};

type MemberProps = {
  id: string;
  adminId: string;
  isAdminView: boolean;
  handleMemberKickClick: (userData: UserDataType) => void;
};

export function Member({
  id,
  adminId,
  isAdminView,
  handleMemberKickClick,
}: MemberProps) {
  const [userData, setUserData] = useState<UserDataType>({
    photoURL: null,
    displayName: null,
    uid: null,
  });

  const getAdditionalUserDataByAuthorUid = async (authorUid: string) => {
    const queryUserSnapshot = await queryUserEqualByValue("uid", authorUid);
    if (!queryUserSnapshot.empty) {
      const { photoURL, displayName, uid } = queryUserSnapshot.docs[0].data();
      return { photoURL, displayName, uid };
    }
  };

  useEffect(() => {
    getAdditionalUserDataByAuthorUid(id).then((data) =>
      setUserData(data as UserDataType)
    );
  }, [id]);

  return (
    <>
      <Wrapper>
        <MemberNameLink to={`${ROUTES.PROFILE}/${id}`}>
          {userData.displayName ? userData.displayName : ""}
        </MemberNameLink>
        <MemberTag>{userData.uid === adminId ? "admin" : "member"}</MemberTag>
        {isAdminView && id !== adminId && (
          <KickButt onClick={() => handleMemberKickClick(userData)}>X</KickButt>
        )}
      </Wrapper>
    </>
  );
}
