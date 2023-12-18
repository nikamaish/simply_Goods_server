import React from 'react'
import Navbar from './navbar/Navbar'
import Menu from './menu/Menu'
import ImgSlider from './slider/ImgSlider'

const App = () => {

  const [menuOpen,setMenuOpen]=React.useState(false)
  

  return (
    <div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ImgSlider/>
    </div>
  )
}

export default App
