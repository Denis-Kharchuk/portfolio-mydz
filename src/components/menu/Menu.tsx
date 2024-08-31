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

    gap: 87px;
    align-items: center;
  }

  li:last-child {
    border-radius: 6px;
    padding: 12px 20px 13px 20px;

    width: 105px;
    width: 100%;
    height: 45px;
    background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  }

  .right {
    display: flex;

    align-items: center;
    gap: 87px;
  }

  li:last-child a {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #252728;

    &:hover {
      transform: translateY(20px);
      box-shadow: 0px 30px 40px rgba(166, 207, 231, 0.966);
    }
  }

  a {
    color: ${thema.colors.primeryText};
  }
`;
