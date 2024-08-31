import React from "react";
import styled from "styled-components";
import { thema } from "../../styles/Thema";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">Home</a>
        </li>

        <div className="right">
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </div>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }

  .right {
    display: flex;
    gap: 30px;
  }

  a {
    color: ${thema.colors.primeryText};
  }
`;
