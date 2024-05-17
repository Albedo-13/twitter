import { collection, DocumentData } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { debouncedSearchUser } from "@/utils/firebase/helpers";

import { SearchInput } from "../search-input/search-input";
import { SearchTweet } from "../search-tweet/search-tweet";
import { SearchedTweets, Wrapper } from "./styled";

export function SearchSidebar() {
  const [list, setList] = useState<DocumentData[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setSearchText(e.target.value);
    const searchResults = await debouncedSearchUser(e.target.value);

    setList(searchResults || []);
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <SearchInput
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search Tweets"
      />
      <SearchedTweets>
        {!isLoading &&
          list.map((item) => (
            <SearchTweet key={item.id} name={item.displayName} />
          ))}
      </SearchedTweets>
    </Wrapper>
  );
}
