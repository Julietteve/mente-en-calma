import React from 'react';
import {MenuItem} from './data';
import { Container,Name,MenuLinks,Item, Icon, CloseIcon} from "./styles";

const MobileNav = ({isOpen,toggle}) => {
    return (
       <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
           <Name >Agostina Faccone</Name>
           <MenuLinks>
              {MenuItem.map((item, index)=><Item href={`#${item}`} key={index}>{item}</Item>)}
            </MenuLinks>
       </Container>
    );
};

export default MobileNav;