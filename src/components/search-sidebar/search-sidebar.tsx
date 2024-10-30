import { DocumentData } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";

import { SearchInput } from "@/components/search-input/search-input";
import { SearchTweet } from "@/components/search-tweet/search-tweet";
import { DEBOUNCE_DELAY_MS } from "@/constants/constants";
import { ROUTES } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";
import { Loader } from "@/loader/loader";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { searchUsers } from "@/utils/firebase/helpers";

import { SearchedTweets } from "./styled";

export function SearchSidebar() {
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
      setList(searchResults || []);
      setIsLoading(false);
    });
  }, [debouncedSearchText, pathname]);

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
            const link = `${ROUTES.PROFILE}${user.uid !== item.uid ? `/${item.uid}` : ""}`;
            return (
              <SearchTweet
                key={item.uid}
                name={item.displayName}
                email={item.email}
                link={link}
              />
            );
          })
        )}
      </SearchedTweets>
    </>
  );
}
