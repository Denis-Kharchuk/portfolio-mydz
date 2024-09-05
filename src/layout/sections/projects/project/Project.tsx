import React from "react";
import { Photo } from "../../main/Main";
import photo from "../../../../assets/img/photo.png";
import styled from "styled-components";
import { StyledButton } from "../../../../components/Button";
import { thema } from "../../../../styles/Thema";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  tags: string[];
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ImageBackStyled>
        <Image src={props.src} alt="project" />
        <StyledButton>VIEW PROJECT</StyledButton>
      </ImageBackStyled>
      <Content>
        <Title>{props.title}</Title>
        <TagsBlock>
          {props.tags.map((tag) => (
            <StyledTag>{tag}</StyledTag>
          ))}
        </TagsBlock>
        <Text>{props.text}</Text>
      </Content>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  border-radius: 6px;
  max-width: 522px;
  width: 100%;

  background: #222525;
`;

const ImageBackStyled = styled.div`
  position: relative;
  &:hover {
    ${StyledButton} {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      backdrop-filter: blur(8px);
      background: rgba(0, 0, 0, 0.3);
    }
  }

  ${StyledButton} {
    opacity: 0;

    border-radius: 6px;
    padding: 12px 20px 13px 20px;
    max-width: 200px;
    width: 100%;
    height: 40px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 24px 8px 30px 26px;
`;

const Title = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: ${thema.colors.primeryText};
`;

const TagsBlock = styled.div`
  margin: 15px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledTag = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;

  color: ${thema.colors.primeryText};

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 5px;
    width: 80%;
    background: ${thema.colors.gradient};

    position: absolute;

    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: ${thema.colors.primeryText};
`;
