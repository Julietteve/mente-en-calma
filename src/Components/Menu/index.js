import React from 'react';
import {FiMenu}  from "react-icons/fi";
import {Container, Icon, MenuLinks, Item, MenuIcon} from "./styles";
import { MenuItem} from "./data";
const Menu = () => {
    return (
        <Container>
            <Icon>
                <MenuIcon>
            <FiMenu/>
                </MenuIcon>
            <MenuLinks>
              {MenuItem.map((item, index)=><Item key={index}>{item}</Item>)}
            </MenuLinks>
            </Icon>
        </Container>
    );
};

export default Menu;