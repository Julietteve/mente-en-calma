import React from 'react';
import {MenuIcon, Container, Title, Subtitle, Heading, LottieContainer } from './styles';
import Lottie from 'react-lottie';
import {FiMenu}  from "react-icons/fi";
import relax from './relax.json'

const Nameplate = ({toggle}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: relax,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <Container data-aos="fade" id="Principal">
           <MenuIcon onClick={toggle} >
            <FiMenu/>
            </MenuIcon>
            <LottieContainer>
             <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
            </LottieContainer>
              <Title >Mente en Calma</Title>
              <Heading>
                <Subtitle>Accesible</Subtitle>
                <Subtitle>|</Subtitle>
                <Subtitle>Transformacional</Subtitle>
                <Subtitle>|</Subtitle>
                <Subtitle>Sin Prejuicios</Subtitle>
              </Heading>
        </Container>
    );
};

export default Nameplate;