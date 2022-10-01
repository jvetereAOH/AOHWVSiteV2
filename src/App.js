import './App.scss';
import RouterComp from './Routes/Router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
      <RouterComp/>
    </div>
  );
}

export default App;
