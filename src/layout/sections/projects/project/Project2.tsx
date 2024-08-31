import React from "react";
import { Photo } from "../../main/Main";
import photo from "../../../../assets/img/photo.png";
import styled from "styled-components";
import { StyledButton } from "../../../../components/Button";
import { thema } from "../../../../styles/Thema";

type ProjectPropsType = {
  title?: string;
  text?: string;
  src?: string;
};

export const Project2 = (props: ProjectPropsType) => {
  return (
    <ProjectStyles>
      <Image src={props.src} />
      <TitleProject>{props.title}</TitleProject>
      <StyledButton>Javascript</StyledButton>
      <StyledButton>React Native</StyledButton>
      <StyledButton>redux</StyledButton>
      <TextProject>{props.text}</TextProject>
    </ProjectStyles>
  );
};

const ProjectStyles = styled.div`
  border-radius: 6px;
  width: 522px;
  height: 636px;
  background: #222525;

  button {
    border-radius: 4px;
    padding: 8px 16px;
    width: auto;
    height: 30px;
    margin-right: 12px;
  }
`;

const SectionButton = styled.div`
  width: 399px;
  height: 30px;
  margin: 10px 0 20px;
`;

const TitleProject = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #d9f2f2;
  margin-top: 30px;
`;

const TextProject = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: ${thema.colors.primeryText};
`;

const Image = styled.img`
  width: 522px;
  height: 388px;
`;
