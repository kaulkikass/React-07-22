import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
      <button className="nupp">Vajuta mind</button>
      <img className="pilt" src="https://geenius.ee/app/uploads/sites/4/2018/06/3150df1ed3a118814f15a956c54c1eab.jpeg" alt="" />
      <Link to="/avaleht">
        <button>Avalehele</button>
      </Link>
      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>
      <Routes>
        {/* Näitab seda HTMLi localhost:3000/.... */}
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
      </Routes>
    </div>
    
  );
}

export default App;
