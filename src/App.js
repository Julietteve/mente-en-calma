import React, {useEffect} from 'react'
import Menu from "./Components/Menu";
import {createGlobalStyle} from 'styled-components/macro';
import Nameplate from "./Components/Nameplate";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Footer";
import Aos from 'aos';
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
  html{
    margin:0;
    padding:0;
    box-sizing: border-box;
    user-select: none;
    color:#1D1D1F;

    ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 60px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
  }    
`;
function App() {

  useEffect(()=>{
      Aos.init({duration: 2000})
  }, [])

  return (
    <div>
      <GlobalStyle/>
      <Menu/>
      <Nameplate/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
