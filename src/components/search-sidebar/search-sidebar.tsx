import { SearchInput } from "../search-input/search-input";
import { SearchTweet } from "../search-tweet/search-tweet";
import { SearchedTweets, Wrapper } from "./styled";

export function SearchSidebar() {
  return (
    <Wrapper>
      <SearchInput />
      <SearchedTweets> 
        <SearchTweet />
        <SearchTweet />
        <SearchTweet />
        <SearchTweet />
      </SearchedTweets>
    </Wrapper>
  )
}
