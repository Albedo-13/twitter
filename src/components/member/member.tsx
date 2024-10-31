import { useEffect, useState } from "react";

import { ROUTES } from "@/constants/routes";
import { getAdditionalUserDataByUid } from "@/utils/firebase/helpers";

import {
  KickButt,
  MemberNameLink,
  MemberTag,
  Wrapper,
} from "./styled";

type UserDataType = {
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
    displayName: null,
    uid: null,
  });

  useEffect(() => {
    getAdditionalUserDataByUid(id).then((data) =>
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
