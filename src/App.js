import './App.scss';
import Navbars        from './one/Navbars';
import BootFooter     from './one/BootFooter';
import Home           from './one/Home';
import AboutUs          from './one/AboutUs';

import { Container }  from 'react-bootstrap';
import Services from './one/Services';

/**
 * Build primary element through router comp
 * @returns Primary Element
 */
function App() {
  return (
    <Container style={{display: "flex", position: "absolute", left: "0", right: "0", top: "0", bottom: "0", overflowY: "auto", flexDirection: "column",  maxWidth: "100%", width: "100%", maxHeight: "auto", height: "100%", padding: "0", alignItems: "center", margin: "0", maxHeight: "100%"}}>
      <Navbars style={{height: "auto"}}/>
      <Home style={{height: "auto"}}/>
      <AboutUs style={{width: "100%"}}/>
      <Services/>
    </Container>  
  );
}

export default App;
