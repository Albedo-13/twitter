import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/navigation/navigation";
import { SearchSidebar } from "@/components/search-sidebar/search-sidebar";

import { MobileSearchSidebar } from "../search-sidebar/mobile-search-sidebar";
import {
  ContentWrapper,
  NavigationWrapper,
  ProfileWrapper,
  SearchDesktopWrapper,
  SearchMobileWrapper,
  SearchWrapper,
} from "./styled";

export function Layout() {
  return (
    <ProfileWrapper>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <SearchWrapper>
        <SearchMobileWrapper>
          <MobileSearchSidebar />
        </SearchMobileWrapper>
        <SearchDesktopWrapper>
          <SearchSidebar />
        </SearchDesktopWrapper>
      </SearchWrapper>
    </ProfileWrapper>
  );
}
