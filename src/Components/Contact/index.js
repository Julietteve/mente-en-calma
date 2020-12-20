import React from 'react';
import {Section, Underline} from "../About/styles";
import {Container, Input, Message, Form, FormContainer, SocialContainer, Content, Warn, Send, Details,Icon, Quote} from './styles'

const Contact = () => {
    return (
       <Container  data-aos="fade-down">
           <Section  id="Contacto">Contacto</Section>
           <Underline/>
           <Content>
           <SocialContainer>
               <Quote>
               <Details>
                Las sesiones tanto virtules como presenciales tienen una duración de una hora, con frecuencia semanal o quincenal, dependiendo de las necesidades de cada paciente. Podes contactarme via 
               <Icon  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/psifaccone"> Facebook
                </Icon>, escribiendo a  <Icon target="_blank" rel="noopener noreferrer" href="mailto:agosfaccone.92@gmail.com ">agosfaccone.92@gmail.com </Icon> o via WhatsApp al <Icon rel="noopener noreferrer" href="tel:+5491132348463">+54 9 1132348463</Icon>.
               </Details>
               <Details>
               Tambien podes encontrar material sobre distintas temáticas de psicología, tips de salud mental, curiosidades, investigaciones, recomendaciones de películas de índole psicológico y una sección de consultas en <i>“Redes Mentales”</i>, un proyecto multiplataforma que llevo a cabo con mis colegas. Encontranos en nuestro <Icon  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/redes.mentales/"> Instagram Redes Mentales </Icon> ó <Icon  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mentales.redes"> Facebook Redes Mentales</Icon>.
               </Details>
               </Quote>
           </SocialContainer>
           <FormContainer>
               <Form>
                   <Warn> * Al completar este formulario, estás dando tu permiso para que me comunique con vos mediante el correo electrónico proporcionado.</Warn>
                   <Input placeholder="Nombre" type="text"/>
                   <Input placeholder="Apellido" type="text"/>
                   <Input placeholder="E-mail" type="text"/>
                   <Message placeholder="Escribi tu mensaje aqui ..." cols="30" rows="5"/>
                   <Send type="submit">Enviar</Send>
               </Form>
           </FormContainer>
           </Content>
       </Container>
    );
};

export default Contact;