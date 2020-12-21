import React from 'react';
import {MenuItem} from './data';
import { Container,Name,MenuLinks,Item } from "./styles";

const MobileNav = () => {
    return (
       <Container>
           <Name>Agostina Faccone</Name>
           <MenuLinks>
              {MenuItem.map((item, index)=><Item href={`#${item}`} key={index}>{item}</Item>)}
            </MenuLinks>
       </Container>
    );
};

export default MobileNav;