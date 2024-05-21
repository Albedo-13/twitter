import search from "@assets/icons/search.svg";
import { ChangeEvent } from "react";

import { SearchbarWrapper, SearchIcon, SearchText } from "./styled";

type SearchSidebarProps = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({
  placeholder,
  value,
  onChange,
}: SearchSidebarProps) {
  return (
    <SearchbarWrapper>
      <SearchIcon src={search} />
      <SearchText value={value} onChange={onChange} placeholder={placeholder} />
    </SearchbarWrapper>
  );
}
