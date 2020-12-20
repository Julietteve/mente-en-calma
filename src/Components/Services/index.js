import React from 'react';
import { services } from "./data";
import {Container, Service,Main, Name, Icon} from './styles'
import {Section,Underline} from '../About/styles'


const Services = () => {
    return (
        <Main  data-aos="fade-down" >
           <Section id="Servicios">Servicios</Section>
           <Underline></Underline>
       <Container>
              {
                  services.map((item, index)=>(
                    <Service key={index}>
                      <Icon src={item.pic}/>
                      <Name>{item.name}</Name>
                    </Service>
                  ))
              }
           
       </Container>
        </Main>
    );
};

export default Services;