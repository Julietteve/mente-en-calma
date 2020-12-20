import React from 'react';
import {Copyright, MadeBy, Container} from './styles';

const Footer = () => {
    return (
        <Container>
            <Copyright> © 2021 <i>Mente en Calma</i> , soluciones terapéuticas de Agostina Faccone </Copyright>
            <Copyright>
            Designed & Written by <MadeBy target="_blank" rel="noopener noreferrer" href="https://juliegarcia.netlify.app/">Julie G.</MadeBy>
            </Copyright> 
        </Container>
    );
};

export default Footer;