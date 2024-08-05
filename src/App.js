import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Products from './pages/Products'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category='men'/>} />
          <Route path="/womens" element={<ShopCategory category='women'/>} />
          <Route path="/combos" element={<ShopCategory category='combos'/>} />
          <Route path="/joggers" element={<ShopCategory category='joggers'/>} />
          <Route path='/products' element={<Products/>}>
          <Route path=':productsId' element={<Products/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
