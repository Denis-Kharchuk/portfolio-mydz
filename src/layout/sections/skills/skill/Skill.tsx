import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { thema } from "../../../../styles/Thema";

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
  max-width: 114px;
  width: 100%;
  height: 164px;
  margin: 0 60px;
  margin-bottom: 60px;

  img {
    max-width: 120px;
    width: 100%;
    height: 120px;
  }
  @media ${thema.media.tablet} {
    width: 88px;
    height: 120px;
    /* margin-right: 45px;
    margin-left: 0px; */
    /* margin-right: 22px;
    margin-left: 22px; */

    /* margin: 0px 22px 80px 22px; */
    margin: 0 auto;

    img {
      max-width: 85px;

      height: 88px;
    }
    p {
      font-size: 11px;
    }
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
