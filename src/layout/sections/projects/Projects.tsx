import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import photo from "../../../assets/img/photo.png";

import { Project1 } from "./project/Project1";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project2 } from "./project/Project2";
import { Container } from "../../../components/Container";
import { thema } from "../../../styles/Thema";

export const Projects = () => {
  return (
    <ProjectsStyles>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper
          justify="space-evenly"
          align="center"
          wrap="wrap"
          gap="28px"
        >
          <Project1
            src={photo}
            title="TITLE PROJECT"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Project2
            src={photo}
            title="I N S I G H T G R A M"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />

          <Project1
            src={photo}
            title="TITLE PROJECT"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <Project2
            src={photo}
            title="I N S I G H T G R A M"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </FlexWrapper>
      </Container>
    </ProjectsStyles>
  );
};

const ProjectsStyles = styled.section`
  padding-bottom: 140px;
  padding-top: 140px;
  @media ${thema.media.tablet} {
    padding: 70px 0;

   
  }
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */
`;
