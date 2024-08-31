import React from "react";
import styled from "styled-components";
import iconsSprite from "../../assets/img/main-svg-sprite.svg";
import { thema } from "../../styles/Thema";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "120"}
      height={props.height || "120"}
      viewBox={props.viewBox || "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
    </svg>
  );
};

// <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>  Это очень важно понять, впринципе как всю страницу эту

// export const StyledIcon = styled.div`
//   @media ${thema.media.mobile} {
//     width: 310;
//     height: 239;
//   }
// `;
