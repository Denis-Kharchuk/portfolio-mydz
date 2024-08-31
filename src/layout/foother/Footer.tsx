import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { thema } from "../../styles/Thema";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconList>
        <SocialIconLink>
          <SocialIconContainer>
            <Icon iconId="gmail" width="37" height="37" viewBox="0 0 40 40" />
            <IconLabel>Gmail</IconLabel>
          </SocialIconContainer>
          <SocialIconContainer>
            <Icon
              iconId="linkedin"
              width="37"
              height="37"
              viewBox="0 0 40 40"
            />
            <IconLabel>LinkedIn</IconLabel>
          </SocialIconContainer>
          <SocialIconContainer>
            <Icon iconId="github" width="37" height="37" viewBox="0 0 40 40" />
            <IconLabel>GitHub</IconLabel>
          </SocialIconContainer>
        </SocialIconLink>
      </SocialIconList>
      <FooterDiv>
        <FooterInfo>Projects</FooterInfo>
        <FooterInfo>Contact</FooterInfo>
      </FooterDiv>

      <Copyright>WEB DEVELOPER 2021</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${thema.colors.primeryBG};
  padding-top: 190px;
  padding-bottom: 100px;
  color: ${thema.colors.primeryText};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIconLink = styled.div`
  display: flex;
  gap: 75px;
`;

const SocialIconList = styled.ul``;

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconLabel = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: #bdebea;
`;

const FooterInfo = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: #bdebea;
  margin: 49px 48px;
`;

const FooterDiv = styled.div`
  display: flex;
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 14px;
  line-height: 186%;
  letter-spacing: 0.04em;
  text-align: center;
  color: #bdebea;
`;
