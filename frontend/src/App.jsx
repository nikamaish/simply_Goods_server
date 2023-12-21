import React from 'react';
import Navbar from './navbar/Navbar';
import Menu from './menu/Menu';
import ImgSlider from './slider/ImgSlider';
import Categories from './product_categories/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route path="/" element={<ImgSlider />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* ImgSlider and Categories are now part of the Routes */}
        {/* <ImgSlider /> */}
        <Categories />
      </Router>
    </div>
  );
};

export default App;
