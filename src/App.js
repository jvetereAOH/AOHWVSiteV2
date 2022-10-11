import './App.scss';
import RouterComp from './Routes/Router';


/**
 * Build primary element through router comp
 * @returns Primary Element
 */
function App() {
  return (
    <div id="root" className="App">
      <RouterComp/>
    </div>
  );
}

export default App;
