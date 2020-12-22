import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;

    @media only screen and (max-width: 768px) {
    display:none;
  }
`;

export const MenuLinks = styled.div`
    width:100%;
    height:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
    transition: 0.5s ease;
    position:relative;
    top:-5rem;
    background-color:white;
`;

export const MenuIcon=styled.div`
    position:absolute;
    right:3rem;
    top:3rem;
    width:auto;
    font-size:2.5rem;
    cursor: pointer;
    z-index:10;
`;

export const Icon = styled.div`
 &:hover ${MenuLinks} {
   top:1rem;
 }
  
`;

export const Item = styled.a`
    font-size:1rem;
    text-transform:uppercase;
    letter-spacing:0.5;
    text-decoration:none;
    margin-right:2rem;
    font-family: 'Josefin Sans', sans-serif;
    vertical-align: middle;
    cursor: pointer;
    color:#1D1D1F;

    &:nth-child(3) {
        color: #A5678E;
        font-family: 'Satisfy', cursive;
        text-transform:capitalize;
        font-size: 2rem;
    }

    :active {
    color: #A5678E;
    }
    :hover{
    color: #A5678E;
    }

`;
