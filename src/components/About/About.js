import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,

  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import RushitPhoto from "../../assets/rushitPhoto.JPG";


const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={RushitPhoto} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Rushit Patel, currently pursuing Bachelor of
            Science in Computer Science in SRM University. I
            am a passionate front-end developer based in India.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS, TailwindCSS,
            Bootstrap, Express.js, Git and GitHub, Figma and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
        
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
