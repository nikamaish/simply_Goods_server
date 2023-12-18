// ImgSlider.jsx

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './imgSlider.css';

const ImgSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/OHL_HSS/3000x1200-heroUnrec._CB570990004_.jpg'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Toys/HTL2023/GW/Homepage_DesktopHeroTemplate_3000x1200-Toy-Fiesta-APAY_2x_unrec._CB570529351_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img2020/img21/apparelGW/dec23atf/unrec/mfd/WA_ETH_3000._CB571190800_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImgSlider;
