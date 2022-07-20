import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Poed from './pages/Poed';
import YksikToode from './pages/YksikToode';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';

function App() {
  return (
    <div className="App">
      <button className="nupp">Vajuta mind</button>
      <img className="pilt" src="https://geenius.ee/app/uploads/sites/4/2018/06/3150df1ed3a118814f15a956c54c1eab.jpeg" alt="" />
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>
      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>
      <Link to="/poed">
        <button>Poed</button>
      </Link>
      <Link to="/halda">
        <button>Halda tooteid</button>
      </Link>
      <Routes>
        {/* Näitab seda HTMLi localhost:3000/.... */}
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="poed" element={ <Poed /> } />
        <Route path="toode/:nimi" element={ <YksikToode /> } />
        <Route path="halda" element={ <HaldaTooteid /> } />
        <Route path="muuda/:tooteNimi" element={ <MuudaToode /> } />
      </Routes>
    </div>
    
  );
}

export default App;
