import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    color: #A5678E;
    font-size: 3rem;
    text-transform:uppercase;
    margin-bottom:10px;
    letter-spacing:3px;

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
  }
`;

export const Heading = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;

    @media only screen and (max-width: 768px) {
        flex-direction:column;
  }
    
    
`;

export const Subtitle = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    color:gray;
    text-transform:uppercase;
    letter-spacing: 3px;
    margin-right:1rem;
    margin-left:1rem;

    @media only screen and (max-width: 768px) {
       text-align:center;
  }

`;

