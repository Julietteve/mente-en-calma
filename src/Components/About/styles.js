import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 15%;
    display: flex;
    flex-direction:column;
    position: relative;
    z-index: 1;
`;

export const Background = styled.div`
    margin-top:6%;
    position: absolute;
    z-index: -1;
    width:100%;
    height:100vh;
    -webkit-transform: scale(1) rotate(0deg) skewY(20deg) skewX(0deg);
    transform: scale(1) rotate(0deg) skewY(-2deg) skewX(0deg);
    background-color:#F3F2F9;
`;

export const Section = styled.section`
    font-family: 'Josefin Sans', sans-serif;
    text-transform:uppercase;
    font-size: 3rem;
    text-align: center;
    letter-spacing: 5px;
    padding-top:3%;
`;

export const Underline = styled.div`
    width:10%;
    height:50px;
    border-bottom: 5px solid;
    margin: 0 auto;


`;

export const Image= styled.div`
    width:30%;
    margin-right: 5%;
    display:flex;
    align-items:center;
`;


export const Bio = styled.p`
        width:70%;
        font-family: 'Montserrat', sans-serif;
      color: gray;
      column-count: 2;
      column-gap: 40px;
      font-size:1rem;
      line-height:1.8rem;
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
    width:100%;
`;


export const Intro = styled.h2`
     font-family: 'Montserrat', sans-serif;
     line-height:2rem;

`;