import './App.css';
import ShowArtists from './componentes/ShowArtists/ShowArtists.jsx';
import Home from './componentes/Home/Home';
import Search from './componentes/search/Search';
import { Route, Routes } from 'react-router-dom'
import Navbar from './componentes/navbar/Navbar.jsx';
import { useSelector } from 'react-redux'



function App() {
  const { enter } = useSelector(state => state)


  return (
    <div className="App">
      <div className={`inicioNav ${!enter && 'activeApp'}`}>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Search />} />
        <Route path='/artists' element={<ShowArtists />} />
      </Routes>



    </div>
  );
}

export default App;
