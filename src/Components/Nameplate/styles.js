import styled from "styled-components/macro";

export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;

export const LottieContainer = styled.div`

@media only screen and (max-width: 768px) {
   margin-top:50%;
   display:flex;
   justify-content:center;
   width:80%;
  }
`;

export const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    color: #A5678E;
    font-size: 3rem;
    text-transform:uppercase;
    margin-bottom:10px;
    letter-spacing:3px;

    @media only screen and (max-width: 768px) {
        font-size:2.5rem;
        margin:2%;
        text-align: center;
  }
`;

export const Heading = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;

    @media only screen and (max-width: 768px) {
        flex-direction:column;
        margin-top:10%;
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

export const MenuIcon=styled.div`

display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 3rem;
    right: 3rem;
    transform: (-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #282723;
  }
`;
