import './App.scss';
import AOHNav from './comp/AOHNav';
import Dropdown from './comp/Dropdown';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AOHNav/>
      </header>
      <Dropdown/>
    </div>
  );
}

export default App;
