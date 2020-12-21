import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    padding-top: 5%;
    padding-left:10%;
    padding-right:10%;
    box-sizing:border-box;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
  }
`;

export const Service = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        transform: scale(1.1)
    }
`;

export const Icon = styled.img`
     width:30%;
     margin: 0 auto;
     margin: 2rem;
     opacity:0.7;
`;

export const Name = styled.div`
font-family: 'Josefin Sans', sans-serif;
word-break: break;
font-size: 1.2rem;
text-transform:uppercase;
line-height: 2rem;

`;

export const Main = styled.div`
    margin-top: 10%;
    display:flex;
    justify-content:center;
    flex-direction: column;
    position: relative;
    z-index: 10;

`;