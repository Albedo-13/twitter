import { DocumentData } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";

import { DEBOUNCE_DELAY_MS } from "@/constants/constants";
import { Loader } from "@/loader/loader";
import { searchPostsByUser, searchUsers } from "@/utils/firebase/helpers";

import { SearchInput } from "../search-input/search-input";
import { SearchTweet } from "../search-tweet/search-tweet";
import { SearchedTweets, Wrapper } from "./styled";

const searchOptions = {
  "/": {
    search: searchUsers,
    placeholder: "Search users",
  },
  "/profile": {
    search: searchPostsByUser,
    placeholder: "Search tweets",
  },
  "*": {
    search: searchUsers,
    placeholder: "Search users",
  },
};

export function SearchSidebar() {
  const [list, setList] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText] = useDebounce(searchText, DEBOUNCE_DELAY_MS);

  const { pathname } = useLocation();
  const { search, placeholder } =
    searchOptions[pathname as keyof typeof searchOptions] ?? searchOptions["*"];

  const handleSearchTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    search(debouncedSearchText).then((searchResults) => {
      setList(searchResults || []);
      setIsLoading(false);
    });
  }, [debouncedSearchText, pathname]);

  return (
    <Wrapper>
      <SearchInput
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder={placeholder}
      />

      <SearchedTweets>
        {isLoading && searchText ? (
          <Loader />
        ) : (
          {
            "/": list.map((item) => (
              <SearchTweet
                key={item.uid}
                name={item.displayName}
                email={item.email}
              />
            )),
            "/profile": list.map((item) => (
              <SearchTweet
                key={item.uid}
                name={item.displayName}
                email={item.email}
                content={item.content}
                link={`post/${item.uid}`}
              />
            )),
            "*": list.map((item) => (
              <SearchTweet
                key={item.uid}
                name={item.displayName}
                email={item.email}
                content={item.content}
                link={`post/${item.uid}`}
              />
            )),
          }[pathname]
        )}
      </SearchedTweets>
    </Wrapper>
  );
}
