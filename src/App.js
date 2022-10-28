import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Services from './Pages/Home/Service';
import ContactUs from './Pages/Home/ContactUs';
import ProductDetail from './Pages/Home/ProductDetail';
import AboutUs from './Pages/Home/AboutUs';
import OurService from './Pages/Home/OurService';
import Pricing from './Pages/Pricing/Pricing';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ourService' element={<OurService></OurService>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
