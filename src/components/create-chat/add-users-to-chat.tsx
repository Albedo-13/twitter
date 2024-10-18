import { DocumentData } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";

import no_avatar from "@/assets/imgs/no_avatar.png";
import { DEBOUNCE_DELAY_MS } from "@/constants/constants";
import { useAppSelector } from "@/hooks/redux";
import { Loader } from "@/loader/loader";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { searchUsers } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import { SearchInput } from "../search-input/search-input";
import { SearchedTweets } from "./styled";
import {
  AvatarWrapper,
  Checkmark,
  UserName,
  UserTag,
  UserText,
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
  const [list, setList] = useState<DocumentData[]>([]);
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
          list.map((item) => {
            return (
              <SearchUsers
                key={item.uid}
                isActive={activeChilds.includes(item.uid)}
                uid={item.uid}
                handleCollectChildData={handleCollectChildData}
                name={item.displayName}
                email={item.email}
                photoURL={item.photoURL ? item.photoURL : no_avatar}
              />
            );
          })
        )}
      </SearchedTweets>
    </>
  );
}

type SearchUsersProps = {
  handleCollectChildData: Function;
  isActive: boolean;
  uid: string;
  name: string;
  email: string;
  content?: string;
  photoURL?: string;
};

function SearchUsers({
  handleCollectChildData,
  isActive,
  uid,
  name,
  email,
  content,
  photoURL,
}: SearchUsersProps) {
  const [selected, setSelected] = useState<boolean>(isActive);

  const handleSelect = () => {
    handleCollectChildData(uid, !selected);
    setSelected((prev) => !prev);
  };

  return (
    <Wrapper onClick={handleSelect} className={selected ? "selected" : ""}>
      <AvatarWrapper>
        <Avatar src={photoURL!} />
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
        <UserName>{name}</UserName>
        <UserTag>{email}</UserTag>
        <UserText>{content}</UserText>
      </div>
    </Wrapper>
  );
}
