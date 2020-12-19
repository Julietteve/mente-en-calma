import styled from 'styled-components';

export const Container = styled.div`
 margin-top:15%;
    display: flex;
    flex-direction:column;
    position: relative;
    z-index: 1;
`;

export const Background = styled.div`
    margin-top:5%;
    position: absolute;
    z-index: -1;
    width:100%;
    height:100vh;
    -webkit-transform: scale(1) rotate(0deg) skewY(20deg) skewX(0deg);
    transform: scale(1) rotate(0deg) skewY(-5deg) skewX(0deg);
    background-color:#E7E3F6;
`;

export const Section = styled.section`
    font-family: 'Josefin Sans', sans-serif;
    text-transform:uppercase;
    font-size: 3rem;
    text-align: center;
    letter-spacing: 5px;
`;

export const Underline = styled.div`
    width:10%;
    height:50px;
    border-bottom: 5px solid;
    margin: 0 auto;


`;

export const Bio = styled.p`
    font-family: 'Montserrat', sans-serif;
      color: gray;
      column-count: 2;
      column-gap: 40px;
      font-size:1.1rem;
      line-height:2rem;
`;

export const Article = styled.article`
    display:flex;
    justify-content:center;
    flex-direction:row;
    padding:5%;
    box-sizing:border-box;
`;


export const ProfilePic = styled.img`
    margin-right: 5%;

`;


export const Intro = styled.h2`
     font-family: 'Montserrat', sans-serif;
     line-height:2rem;

`;