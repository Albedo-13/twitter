import { useState } from "react";

import { Avatar } from "@/components/avatar/avatar";
import { UserType } from "@/types";

import {
  AdminText,
  AvatarWrapper,
  Checkmark,
  UserLine,
  UserName,
  UserNameWrapper,
  UserTag,
  Wrapper,
} from "./styled";

type UserProps = UserType & {
  handleCollectChildData: Function;
  isActive: boolean;
  isAdmin: boolean;
  clickable: boolean;
};

export function User({
  clickable,
  handleCollectChildData,
  isActive,
  isAdmin,
  uid,
  displayName,
  email,
  avatar,
}: UserProps) {
  const [selected, setSelected] = useState<boolean>(isActive);

  const handleSelect = () => {
    if (!clickable) return;
    handleCollectChildData(uid, !selected);
    setSelected((prev) => !prev);
  };

  const getClassName = () => {
    const res = [];
    if (selected) res.push("selected");
    if (clickable) res.push("clickable");
    return res.join(" ");
  };

  return (
    <Wrapper onClick={handleSelect} className={getClassName()}>
      <AvatarWrapper>
        <Avatar src={avatar} />
        <Checkmark
          className={selected ? "active" : ""}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            fill="currentColor"
          />
        </Checkmark>
      </AvatarWrapper>
      <div>
        <UserNameWrapper>
          <UserName>{displayName}</UserName>
          {isAdmin && <AdminText> admin</AdminText>}
        </UserNameWrapper>

        <UserTag>{email}</UserTag>
        <UserLine />
      </div>
    </Wrapper>
  );
}
