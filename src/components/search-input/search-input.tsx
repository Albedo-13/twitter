import search from "@assets/icons/search.svg";

import { SearchbarWrapper, SearchIcon, SearchText } from "./styled";

export function SearchInput() {
  return (
    <SearchbarWrapper>
      <SearchIcon src={search} />
      <SearchText placeholder="Search Tweets" />
    </SearchbarWrapper>
  );
}
