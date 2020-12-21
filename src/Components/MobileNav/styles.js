import styled from 'styled-components'


export const Container = styled.div`
    display:none;
    @media only screen and (max-width: 768px) {
    display:flex;
    justify-content:center;
    flex-direction:column;
    position: fixed;
    z-index: 999;
    width:100%;
    height:100%;
    background-color:#F5F2D5;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3 ease-in-out;
    /* opacity: ${({isOpen})=>(isOpen ? '100%' : '0')};
    top: ${({isOpen})=>(isOpen ? '0' : '-100%')}; */
  }
`;

export const Name = styled.div`
    color: #A5678E;
    font-family: 'Satisfy', cursive;
    text-transform:capitalize;
    font-size: 2rem;
    margin: 5%;
`;

export const MenuLinks = styled.div`
    display:flex;
    justify-content:center;
   flex-direction:column;
   text-align:center;
   width:100%;
`;

export const Item = styled.a`
    font-size:1rem;
    text-transform:uppercase;
    letter-spacing:0.5;
    text-decoration:none;
    margin:2%;
    font-family: 'Josefin Sans', sans-serif;
    vertical-align: middle;
    cursor: pointer;
    color:#1D1D1F;
    margin: 5%;

    :hover{
    color: #A5678E;
    }

`;