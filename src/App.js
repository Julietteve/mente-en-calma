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
