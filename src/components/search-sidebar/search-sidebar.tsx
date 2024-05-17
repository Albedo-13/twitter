import { DocumentData } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";

import { searchUser } from "@/utils/firebase/helpers";

import { SearchInput } from "../search-input/search-input";
import { SearchTweet } from "../search-tweet/search-tweet";
import { SearchedTweets, Wrapper } from "./styled";

export function SearchSidebar() {
  const [list, setList] = useState<DocumentData[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText] = useDebounce(searchText, 500);

  const handleSearchTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    searchUser(searchText).then((searchResults) => {
      setList(searchResults || []);
    });
  }, [debouncedSearchText]);

  return (
    <Wrapper>
      <SearchInput
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search Tweets"
      />
      <SearchedTweets>
        {list.map((item) => (
          <SearchTweet key={item.uid} name={item.displayName} />
        ))}
      </SearchedTweets>
    </Wrapper>
  );
}
