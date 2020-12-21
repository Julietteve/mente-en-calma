import React from 'react';
import { Container, Title, Subtitle, Heading } from './styles';
import Lottie from 'react-lottie'
import relax from './relax.json'

const Nameplate = () => {
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
             <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
              <Title>Mente en Calma</Title>
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