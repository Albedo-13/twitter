import { DocumentData } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";

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
};

export function SearchSidebar() {
  const [list, setList] = useState<DocumentData[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText] = useDebounce(searchText, 500);

  const { pathname } = useLocation();
  const { search, placeholder } =
    searchOptions[pathname as keyof typeof searchOptions];

  const handleSearchTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    search(debouncedSearchText).then((searchResults) => {
      setList(searchResults || []);
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
        {
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
              />
            )),
          }[pathname]
        }
      </SearchedTweets>
    </Wrapper>
  );
}
