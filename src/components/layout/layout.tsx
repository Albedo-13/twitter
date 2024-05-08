import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/navigation/navigation";
import { SearchSidebar } from "@/components/search-sidebar/search-sidebar";

import {
  ContentWrapper,
  NavigationWrapper,
  ProfileWrapper,
  SearchWrapper,
} from "./styled";

export function Layout() {
  return (
    <>
      <ProfileWrapper>
        <NavigationWrapper>
          <Navigation />
        </NavigationWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
        <SearchWrapper>
          <SearchSidebar />
        </SearchWrapper>
      </ProfileWrapper>
    </>
  );
}
