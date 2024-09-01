import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import JavaScriptPhoto from "./../../../assets/img/Javascript.svg";
import typescriptPhoto from "./../../../assets/img/typescript.svg";
import mongodbPhoto from "./../../../assets/img/mongodb.svg";
import postgresqltPhoto from "./../../../assets/img/postgresql.svg";
import jestPhoto from "./../../../assets/img/jest.svg";
import expresstPhoto from "./../../../assets/img/express.svg";
import nestPhoto from "./../../../assets/img/nest.svg";
import dockerPhoto from "./../../../assets/img/docker.svg";
import reactJsPhoto from "./../../../assets/img/reactJs.svg";
import reactNactivePhoto from "./../../../assets/img/reactNactive.svg";
import styledComponentsPhoto from "./../../../assets/img/styledComponents.svg";
import reduxPhoto from "./../../../assets/img/redux.svg";
import gitPhoto from "./../../../assets/img/git.svg";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        {/* <FlexWrapper justify="space-evenly" wrap="wrap"> */}
        <Test>
          <Skill imgSrc={JavaScriptPhoto} title="JAVACRIPT" imgAlt="" />
          <Skill imgSrc={typescriptPhoto} title="typescript" imgAlt="" />
          <Skill imgSrc={mongodbPhoto} title="mongoDb" imgAlt="" />
          <Skill imgSrc={postgresqltPhoto} title="Postgresql" imgAlt="" />
          <Skill imgSrc={jestPhoto} title="Jest" imgAlt="" />
          <Skill imgSrc={expresstPhoto} title="Express JS" imgAlt="" />
          <Skill imgSrc={nestPhoto} title="Nest JS" imgAlt="" />
          <Skill imgSrc={dockerPhoto} title="Docker" imgAlt="" />
          <Skill imgSrc={reactJsPhoto} title="React JS" imgAlt="" />
          <Skill imgSrc={reactNactivePhoto} title="React Nactive" imgAlt="" />
          <Skill
            imgSrc={styledComponentsPhoto}
            title="Styled Components"
            imgAlt=""
          />
          <Skill imgSrc={reduxPhoto} title="Redux" imgAlt="" />
          <Skill imgSrc={gitPhoto} title="Git" imgAlt="" />
        </Test>
        {/* </FlexWrapper> */}
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;

const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 45px;
`;
