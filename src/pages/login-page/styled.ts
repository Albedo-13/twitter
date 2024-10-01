import styled from "styled-components";

import { theme } from "@/styles/theme";

export const FormWrapper = styled.form`
  padding-top:  60px;
  max-width:  450px;
  display: flex;
  flex-direction: column;
  gap:  20px;
  margin: 0 auto;

  @media ${theme.device.md} {
    padding: 0  20px;
    margin-top:  20px;
  }
`;

export const H1 = styled.h1`
  @media ${theme.device.md} {
    text-align: center;
  }
`;

export const LogoWrapper = styled.div`
  @media ${theme.device.md} {
    text-align: center;
  }
`;