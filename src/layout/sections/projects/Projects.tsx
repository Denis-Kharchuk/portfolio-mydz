import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import photo from "../../../assets/img/photo.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import { Container } from "../../../components/Container";
import { thema } from "../../../styles/Thema";

const tags = ["js", "React", "Redux", "HTML", "Styled components", "CSS"];

const projData = [
  {
    src: photo,
    title: "TITLE PROJECT",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    tags: ["JAVASCRIPT", "POSTGRESQL", "REACT", "REDUX"],
  },
  {
    src: photo,
    title: "I N S T A G R A M",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    tags: [
      "Javascript",
      "React Native",
      "Redux",
      "Worl Of Warcraft",
      "chatGPT",
    ],
  },
  {
    src: photo,
    title: "YOUTUBE",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    tags: ["Shorts", "travelBlog", "Video", "blogers"],
  },
  {
    src: photo,
    title: "TWICH",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    tags: ["games", "steam", "stream"],
  },
];

export const Projects = () => {
  return (
    <ProjectsStyles>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper
          justify="space-evenly"
          align="center"
          wrap="wrap"
          gap="20px"
        >
          {projData.map((p) => (
            <Project src={p.src} title={p.title} text={p.text} tags={p.tags} />
          ))}
        </FlexWrapper>
      </Container>
    </ProjectsStyles>
  );
};

const ProjectsStyles = styled.section`
  padding-bottom: 140px;
  padding-top: 140px;

  @media ${thema.media.tablet} {
    padding: 70px 0;
  }
`;
