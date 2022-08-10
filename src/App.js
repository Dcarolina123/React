import './App.css';
import {Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
import Planetas from './components/planetas';
import Personajes from './components/personajes';


function App() {
  return (
    <div className="App">

    <NavBarExample/>
   
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/personajes' element={ <Personajes />}></Route>
        <Route path='/planetas' element={ <Planetas/>}></Route>
      </Routes>
    

    </div>
  );
}

export default App;
