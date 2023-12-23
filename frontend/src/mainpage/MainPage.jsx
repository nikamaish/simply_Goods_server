import React from 'react'
import ImgSlider from '../slider/ImgSlider'
import Categories from '../product_categories/Categories'
import MainProduct from '../mainProduct/MainProduct'

const MainPage = () => {
  return (
    <div>
      <ImgSlider/>
      <Categories/>
      {/* <MainProduct/> */}
    </div>
  )
}

export default MainPage
