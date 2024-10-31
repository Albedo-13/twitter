import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";

import { Avatar } from "@/components/avatar/avatar";
import { SearchInput } from "@/components/search-input/search-input";
import { DEBOUNCE_DELAY_MS } from "@/constants/constants";
import { useAppSelector } from "@/hooks/redux";
import { Loader } from "@/loader/loader";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { UsersList, UserType } from "@/types";
import { searchUsers } from "@/utils/firebase/helpers";

import {
  AvatarWrapper,
  Checkmark,
  SearchedTweets,
  UserLine,
  UserName,
  UserTag,
  Wrapper,
} from "./styled";

type AddUsersToChatProps = {
  handleCollectChildData: Function;
  activeChilds: string[];
};

export function AddUsersToChat({
  handleCollectChildData,
  activeChilds,
}: AddUsersToChatProps) {
  const user = useAppSelector(getUserSelector);
  const [list, setList] = useState<UsersList>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText] = useDebounce(searchText, DEBOUNCE_DELAY_MS);
  const { pathname } = useLocation();

  const handleSearchTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    searchUsers(debouncedSearchText).then((searchResults) => {
      const filteredWithoutSelf = searchResults.filter(
        (elem) => elem.uid !== user.uid
      );
      setList(filteredWithoutSelf || []);
      setIsLoading(false);
    });
  }, [debouncedSearchText, pathname, user.uid]);

  return (
    <>
      <SearchInput
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder={"Search users"}
      />
      <SearchedTweets>
        {isLoading && searchText ? (
          <Loader />
        ) : (
          list.map(({ uid, displayName, avatar, email }) => {
            return (
              <SearchUsers
                key={uid}
                isActive={activeChilds.includes(uid)}
                handleCollectChildData={handleCollectChildData}
                uid={uid}
                displayName={displayName}
                email={email}
                avatar={avatar}
              />
            );
          })
        )}
      </SearchedTweets>
    </>
  );
}

type SearchUsersProps = UserType & {
  handleCollectChildData: Function;
  isActive: boolean;
};

function SearchUsers({
  handleCollectChildData,
  isActive,
  uid,
  displayName,
  email,
  avatar,
}: SearchUsersProps) {
  const [selected, setSelected] = useState<boolean>(isActive);

  const handleSelect = () => {
    handleCollectChildData(uid, !selected);
    setSelected((prev) => !prev);
  };

  return (
    <Wrapper onClick={handleSelect} className={selected ? "selected" : ""}>
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
        <UserName>{displayName}</UserName>
        <UserTag>{email}</UserTag>
        <UserLine />
      </div>
    </Wrapper>
  );
}
