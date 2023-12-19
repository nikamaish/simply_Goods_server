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

  const electronics = [
    {
    'name': 'Pendrives and SD cards',
    'img':'https://purepng.com/public/uploads/large/purepng.com-sandisk-usb-flash-pen-driveelectronics-pen-drive-usb-9415246650490ar6r.png',
    'price': '289',
  },
  {
    'name': 'Wireless Mouse and Keyboard',
    'img':'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/km3322w/spi/ng/keyboard-mouse-km3322w-campaign-hero-504x350-ng.psd?hei=402&qtl=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto',
    'price': '169',
  },
  {
    'name': 'Camera',
    'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8oJVQDAgQJqsceuZd59tHI8AG-fSTB2s1w&usqp=CAU',
    'price': '179',
  },
  {
    'name': 'Premium Powerbanks',
    'img':'https://atlas-content-cdn.pixelsquid.com/stock-images/usb-power-bank-powerbank-G9GnBK2-600.jpg',
    'price': '179',
  }

]

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
            src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/wearables/BAU_GW/New_launchGW_tallhero_3000x1200._CB597027259_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="rectangle-container">
      {/* <div className='electronics'> */}
      <h1>Best Of Electronics</h1>

      <div className="eproduct-container">
        {electronics.map((product,index)=>(
          <div key={index} className="eproduct-card">
          <img src={product.img} alt={product.name} className="eproduct-image" />
          <div className="eproduct-details">
            <p className="eproduct-name">{product.name}</p>
            <p className="eproduct-price">From ₹ {product.price}</p>
          </div>
        </div>
        ))}
        </div>
      {/* </div> */}
    </div>


    </div>
  );
};

export default ImgSlider;
