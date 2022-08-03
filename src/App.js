import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
import About from './components/about';
import Contact from './components/contact';
import Carousel from './components/carousel/carousel';
import Cards from './components/cards';
import Text from './components/text';
import Footer from './layouts/footer';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={ <NavBarExample/>}>
        <Route path='/' element={ <Home />}></Route>
        <Route path='about' element={ <About />}>
          <Route path='contact' element={ <Contact/>}>
          </Route>
        </Route>
      </Route>
    </Routes>
     </BrowserRouter>

     <Carousel/>

    <Text/>

    <Cards/>

    <Footer/>

    </div>
  );
}

export default App;
