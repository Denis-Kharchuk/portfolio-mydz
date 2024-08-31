import React from "react";
import styled from "styled-components";
import { thema } from "../styles/Thema";

export const SectionTitle = styled.h2`
  color: red;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 108%;
  letter-spacing: 0.04em;
  color: ${thema.colors.primeryText};
  margin-bottom: 30px;
`;
