import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import ContactUs from './Pages/Home/ContactUs';
import ProductDetail from './Pages/Home/ProductDetail';
import AboutUs from './Pages/Home/AboutUs';
import OurService from './Pages/Home/OurService';
<<<<<<< HEAD
import Blogs from './Pages/Home/Blogs';
=======
import Pricing from './Pages/Pricing/Pricing';
>>>>>>> 8815b8172c99a3dd51d72c6ea47d30417c33b7c7

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
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
