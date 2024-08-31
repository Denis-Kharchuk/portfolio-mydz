import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SKillPropsType = {
  imgSrc: string;
  imgAlt: string;
  title: string;
};

export const Skill = (props: SKillPropsType) => {
  return (
    <StyledSkill>
      {/* <Icon iconId={"git"} /> */}
      <img src={props.imgSrc} alt={props.imgAlt} />
      <SkillText>{props.title}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 114px;
  height: 164px;
  margin: 0 60px;
  margin-bottom: 60px;

  img {
    width: 120px;
    height: 120px;
  }
`;

const SkillText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: center;
  margin-left: 5px;
`;
