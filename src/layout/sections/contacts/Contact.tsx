import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { thema } from "../../../styles/Thema";

export const Contact = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <ContactForm>
          <Label>
            Name
            <ContactInfo placeholder="Example" />
          </Label>
          <Label>
            Email
            <ContactInfo placeholder="Value" />
          </Label>
          <Label>
            Message
            <ContactInfo as={"textarea"} placeholder="Hi,i will..." />
          </Label>
          <ContactButton type="submit">Submit</ContactButton>
        </ContactForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin: 0 auto;
  max-width: 532px;
  height: 427px;

  textarea {
    resize: none;
    border-radius: 6px;
    max-width: 532px;
    height: 165px;
  }
`;

const ContactInfo = styled.input`
  border: 1px solid ${thema.colors.primeryText};
  background-color: ${thema.colors.primeryBG};
  border-radius: 6px;
  width: 532px;
  height: 48px;
  width: 100%;
  padding: 15px 18px;
  color: ${thema.colors.primeryText};
  font-size: 16px;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #bdebea;
  }

  &:first-child {
    &::placeholder {
      color: #919b9b;
    }
  }
  &:focus-visible {
    outline: 1px solid ${thema.colors.primeryText};
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 6px;
  padding: 12px 20px;
  margin-top: -24px;
  max-width: 532px;
  height: 48px;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
`;
