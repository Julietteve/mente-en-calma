import React from 'react';
import {MenuItem} from './data';
import { Container,Name,MenuLinks,Item, Icon, CloseIcon,Social, Anchor} from "./styles";
import {FaFacebookSquare} from 'react-icons/fa';
import { AiFillInstagram} from "react-icons/ai";

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
            <Social>
                <Anchor href="https://www.facebook.com/psifaccone">
                    <FaFacebookSquare/>
                </Anchor>
                <Anchor href="https://www.instagram.com/redes.mentales/">
                    <AiFillInstagram/>
                </Anchor>
            </Social>
       </Container>
    );
};

export default MobileNav;