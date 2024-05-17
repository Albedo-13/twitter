import debounce from "debounce";
import { collection,DocumentData } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

import { db } from "@/firebase";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { SearchInput } from "../search-input/search-input";
import { SearchTweet } from "../search-tweet/search-tweet";
import { SearchedTweets, Wrapper } from "./styled";

type LocationType = {
  pathname: "/profile" | "/";
};

export function SearchSidebar() {
  const [list, setList] = useState<DocumentData[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const location = useLocation();

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    myFetch();
  };

  const myFetch = debounce(() => {
    // const queryUsersSnapshot = await queryUserEqualByValue(
    //   "displayName",
    //   searchText
    // );
    // console.log(queryUsersSnapshot.docs);
    // setList([]);
    
    
    console.log("fetch");
  }, 1000);

  // console.log(location.pathname);
  return (
    <Wrapper>
      <SearchInput
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search Tweets"
      />
      <SearchedTweets>
        {list.map((item) => (
          <SearchTweet key={item.id} name={item.displayName} />
        ))}
      </SearchedTweets>
    </Wrapper>
  );
}
