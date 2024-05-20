import search from "@assets/icons/search.svg";

import { SearchbarWrapper, SearchIcon, SearchText } from "./styled";

// TODO: any type
// TODO: routes to enum
// TODO: перенести firebase на другой аккаунт
// TODO: консоль логи

export function SearchInput({
  placeholder,
  value,
  onChange,
}: any) {

  return (
    <SearchbarWrapper>
      <SearchIcon src={search} />
      <SearchText value={value} onChange={onChange} placeholder={placeholder} />
    </SearchbarWrapper>
  );
}
