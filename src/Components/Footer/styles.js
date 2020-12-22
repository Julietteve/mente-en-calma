import styled from 'styled-components/macro'

export const Container = styled.footer`
    display:flex;
    flex-direction: column;
    justify-content:center;
    text-align: center;
    color:gray;
    font-family: 'Montserrat', sans-serif;
    padding: 2%;
    font-size:0.9rem;

    @media only screen and (max-width: 768px) {
    font-size:0.6rem;
    margin-top:15%;
    margin-bottom:5%;
  }
`;

export const Copyright = styled.span`
    margin-top: 1%;
`

export const MadeBy = styled.a`
color: #A5678E;
`;
