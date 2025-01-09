import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import phone_banner from './Components/Assets/phone_banner.jpg'
import laptop_banner from './Components/Assets/laptop_banner.jpg'
import tablet_banner from './Components/Assets/tablet_banner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/phones' element={<ShopCategory banner = {phone_banner} category="phone"/>}/>
          <Route path='/tablets' element={<ShopCategory banner = {tablet_banner} category="tablet"/>}/>
          <Route path='/laptops' element={<ShopCategory banner = {laptop_banner} category="laptop"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
