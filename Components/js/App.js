
import '../css/App.css'
import Product from './Product';
import CarouSel from './Carousel';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contactus from'./Contactus';
import NavBar from './NavBar';
import Success from './Success';

function App() {
 return(
  <div className='appComp'>
    <NavBar/>
    <Routes>
        <Route path='/' element={<CarouSel/>} />
        <Route path='/home' element={<CarouSel/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/success' element={<Success/>} />
    </Routes>
  </div>
  
 )
}

export default App;
