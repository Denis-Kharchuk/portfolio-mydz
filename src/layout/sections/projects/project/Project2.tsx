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
      <SectionButton>
        <StyledButton>Javascript</StyledButton>
        <StyledButton>React Native</StyledButton>
        <StyledButton>redux</StyledButton>
      </SectionButton>
      <TextProject>{props.text}</TextProject>
    </ProjectStyles>
  );
};

const ProjectStyles = styled.div`
  border-radius: 6px;
  max-width: 522px;
  width: 100%;
  height: 636px;
  height: 100%;
  background: #222525;

  button {
    border-radius: 4px;
    padding: 8px 16px;
    width: auto;
    height: 30px;
    margin-right: 12px;
  }
  @media ${thema.media.mobile} {
    border-radius: 6px;
    width: 362px;
    height: 574px;
    height: 100%;

    img {
      width: 363px;
      height: 296px;
    }
  }
`;

const SectionButton = styled.div`
  max-width: 399px;
  width: 100%;
  height: 30px;
  height: 100%;
  padding: 0px 0px 0px 20px;

  button {
    &:last-child {
      margin-top: 10px; /* Задаем margin-top только для последней кнопки */
    }
  }
`;

const TitleProject = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #d9f2f2;
  padding: 25px 0px 15px 25px;
`;

const TextProject = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: ${thema.colors.primeryText};
  padding: 20px 17px;
`;

const Image = styled.img`
  max-width: 522px;
  width: 100%;
  height: 388px;
`;
