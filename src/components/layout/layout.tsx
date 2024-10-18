import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/navigation/navigation";
import { SearchSidebar } from "@/components/search-sidebar/search-sidebar";

import { MobileSearchSidebar } from "../search-sidebar/mobile-search-sidebar";
import {
  Background,
  ContentWrapper,
  NavigationDesktopWrapper,
  NavigationWrapper,
  ProfileWrapper,
  SearchDesktopWrapper,
  SearchMobileWrapper,
  SearchWrapper,
} from "./styled";

export function Layout() {
  return (
    <>
      <ProfileWrapper>
        <div className="gridInterface">
          <NavigationWrapper>
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
        </div>
      </ProfileWrapper>
      <Background />
    </>
  );
}
