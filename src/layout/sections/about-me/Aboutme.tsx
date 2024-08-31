import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { thema } from "../../../styles/Thema";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle>About me</SectionTitle>

        <StyledText>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </StyledText>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section``;

const StyledText = styled.p`
  border-left: 4px solid yellow;
  /* border-color: linear-gradient(#00f5a0 0%, #00d9f5 100%); */
  padding-left: 10px;
  border-radius: 2px;

  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  letter-spacing: 0.04em;
  color: #bdebea;
`;
