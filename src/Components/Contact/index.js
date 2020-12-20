import React from 'react';
import {Section, Underline} from "../About/styles";
import {Container, Input, Message, Form, FormContainer, SocialContainer, Content, Warn, Send} from './styles'

const Contact = () => {
    return (
       <Container>
           <Section>Contacto</Section>
           <Underline/>
           <Content>
           <SocialContainer>
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