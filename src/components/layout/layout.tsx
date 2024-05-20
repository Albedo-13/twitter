import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/navigation/navigation";
import { SearchSidebar } from "@/components/search-sidebar/search-sidebar";

import MobileNavigation from "../navigation/mobile-navigation";
import { MobileSearchSidebar } from "../search-sidebar/mobile-search-sidebar";
import {
  ContentWrapper,
  NavigationDesktopWrapper,
  NavigationMobileWrapper,
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
        <NavigationMobileWrapper>
          <MobileNavigation />
        </NavigationMobileWrapper>
        <NavigationDesktopWrapper>
          <Navigation />
        </NavigationDesktopWrapper>
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
