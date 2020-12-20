import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10%;
    box-sizing:border-box;
`;

export const Content = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: row;
  margin:5%;
`;

export const SocialContainer = styled.div`
    width: 40%;
`;

export const FormContainer = styled.div`
   width: 60%;
`;

export const Form = styled.form`
   
`;

export const Warn = styled.form`
    font-family: 'Montserrat', sans-serif;
    font-size:0.9rem;
    padding: 12px;
   width:90%;
   font-weight:bold;
   color:grey;
   word-break:break-all;

`;

export const Input= styled.input`
   font-family: 'Montserrat', sans-serif;
   margin:2%;
   width:90%;
   height:2rem;
   border-radius: 4px;
   border: 1px solid #ccc;
   padding: 12px;

   &:focus{
    border: 2px solid #A5678E;
    outline:none;
   }
   
`;

export const Message= styled.textarea`
  font-family: 'Montserrat', sans-serif;
  margin:2%;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  padding: 20px 10px;
  line-height: 28px;
  padding: 12px;
  resize: none;
   
  &:focus{
    border: 2px solid #A5678E;
    outline:none;
   }
`;

export const Send = styled.button`
    padding: 12px;
    margin:2%;
    background-color: #A5678E;
    height: 50px;
    width:20%;
    border:none;
    border-radius:5px;
    font-family: 'Montserrat', sans-serif;
    font-size:1.2rem;
    color: white;
    cursor: pointer;
    opacity: 0.7;

    &:hover{
        opacity: 1;
    }

    &:focus{
        outline:none;
    }

`;




