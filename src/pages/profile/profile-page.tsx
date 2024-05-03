import { Navigation } from "@/components/navigation/navigation";

import { ContentWrapper, NavigationWrapper, ProfileWrapper, SearchWrapper } from "./styled";

export function ProfilePage() {
  return (
    <ProfileWrapper>
      <NavigationWrapper style={{border: "1px solid red"}}>
        <Navigation />
      </NavigationWrapper>
      <ContentWrapper style={{backgroundColor: "green"}}>Content</ContentWrapper>
      <SearchWrapper style={{backgroundColor: "blue"}}>Search</SearchWrapper>
    </ProfileWrapper>
  );
}
