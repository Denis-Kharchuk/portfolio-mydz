import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { StyledButton } from "../../../components/Button";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-evenly"} wrap="wrap">
          <StyledMainSection>
            <MainTitle>WEB DEVELOPER</MainTitle>
            <h2>Denis Fereg</h2>
            <StyledText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </StyledText>
            <StyledButton>Contact Me</StyledButton>
          </StyledMainSection>

          <Icon
            iconId="mainSVG"
            width="500"
            height="500"
            viewBox="0 0 500 500"
          />
        </FlexWrapper>
        <FlexWrapper align="center" justify="center">
          <a href="">
            <Icon
              iconId="scrollSvg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            />
          </a>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

// не работает iconId="scrollSvg"

export const Photo = styled.img``;

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  padding-top: 200px;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 72px;
    background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 10px 0;
  }

  button {
    padding: 12px 20px 13px 20px;
    width: 134px;
    height: 45px;
    margin-top: 30px;
  }
`;

const StyledMainSection = styled.div`
  max-width: 514px;
  height: 278px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
`;

const MainTitle = styled.h1`
  font-family: "Tinos", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #d7e5ec;
`;
