import React from 'react';
import Navbar from './navbar/Navbar';
import Menu from './menu/Menu';
import ImgSlider from './slider/ImgSlider';
import Categories from './product_categories/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './userProfile/SignUp'; 
import Login from './userProfile/Login';
import MainPage from './mainpage/MainPage';
import MainProduct from './mainProduct/MainProduct';

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        <Route path="/products/:productId" element={<MainProduct />} />

        </Routes>

      </Router>
    </div>
  );
};

export default App;
