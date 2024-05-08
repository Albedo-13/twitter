import { GENDERS } from "@/constants/modal-helpers";
import { Button } from "@/ui/buttons";
import { Input } from "@/ui/inputs";
import { Select } from "@/ui/selects";

import { StyledFormProfile, Text } from "./styled";

export function EditProfile() {
  return (
    <StyledFormProfile>
      <Text>Edit your profile</Text>
      <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Surname" />
      <Input type="password" placeholder="Password" />
      <Select placeholder="Gender" options={GENDERS} width="100%" />
      <Input type="text" placeholder="Status" />
      <Button $variant="primary" $size="large">Edit</Button>
    </StyledFormProfile>
  );
}
