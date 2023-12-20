import React from 'react'
import Navbar from './navbar/Navbar'
import Menu from './menu/Menu'
import ImgSlider from './slider/ImgSlider'
import Categories from './product_categories/Categories'

const App = () => {

  const [menuOpen,setMenuOpen]=React.useState(false)
  

  return (
    <div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ImgSlider/>
      <Categories/>
    </div>
  )
}

export default App
