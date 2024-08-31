import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
  return (
    <StyledLogo>
      <a href="">
        <Icon iconId="mainSVG" height="50" width="50" viewBox="0 0 500 500" />
      </a>
    </StyledLogo>
  );
};
const StyledLogo = styled.div``;
