import React from 'react';
import {bio} from './data';
import { Intro,Container, Background, Section, Underline, Bio, ProfilePic, Article } from "./styles";

const About = () => {
    return (
       <Container>
           <Background />
           <Section>Sobre Mi</Section>
           <Underline></Underline>
           <Article>
           <ProfilePic src="https://admintcns.wforwoman.com/product/20AUW14662-116409/300/20AUW14662-116409_1.JPG"/>
           <Bio>
            <Intro>Mi nombre es Agostina Faccone y soy Licenciada en Psicología egresada de la Universidad de Buenos Aires.</Intro>
          {bio}</Bio>
           </Article>
       </Container>
    );
};

export default About;