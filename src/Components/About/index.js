import React from 'react';
import {bio} from './data';
import { Intro,Container, Background, Section, Underline, Bio, ProfilePic, Article , Image} from "./styles";

const About = () => {
    return (
       <Container data-aos="fade-down">
           <Background />
           <Section id="Sobre Mi" >Sobre Mi</Section>
           <Underline></Underline>
           <Article>
               <Image>

           <ProfilePic src="images/profile.jpg"/>
               </Image>
           <Bio>
            <Intro>Mi nombre es Agostina Faccone y soy Licenciada en Psicología egresada de la Universidad de Buenos Aires.</Intro>
          {bio}</Bio>
           </Article>
       </Container>
    );
};

export default About;