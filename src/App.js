import Menu from "./Components/Menu";
import {createGlobalStyle} from 'styled-components/macro';
import Nameplate from "./Components/Nameplate";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const GlobalStyle = createGlobalStyle`
  html{
    margin:0;
    padding:0;
    box-sizing: border-box;
    user-select: none;
    color:#1D1D1F;
  }    
`;
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Menu/>
      <Nameplate/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
