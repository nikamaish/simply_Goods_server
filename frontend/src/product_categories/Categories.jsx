import React, { useState } from 'react';
import './categories.css';

const Categories = () => {
  const electronics = [
    {
      name: 'Pendrives and SD cards',
      img: 'https://purepng.com/public/uploads/large/purepng.com-sandisk-usb-flash-pen-driveelectronics-pen-drive-usb-9415246650490ar6r.png',
      price: '289',
    },
    {
      name: 'Wireless Mouse and Keyboard',
      img: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/km3322w/spi/ng/keyboard-mouse-km3322w-campaign-hero-504x350-ng.psd?hei=402&qtl=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto',
      price: '169',
    },
    {
      name: 'Camera',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8oJVQDAgQJqsceuZd59tHI8AG-fSTB2s1w&usqp=CAU',
      price: '179',
    },
    {
      name: 'Premium Powerbanks',
      img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/usb-power-bank-powerbank-G9GnBK2-600.jpg',
      price: '179',
    },
    {
      name: 'Premium Powerbanks',
      img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/usb-power-bank-powerbank-G9GnBK2-600.jpg',
      price: '179',
    },
    {
      name: 'Premium Powerbanks',
      img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/usb-power-bank-powerbank-G9GnBK2-600.jpg',
      price: '179',
    },
    {
      name: 'Premium Powerbanks',
      img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/usb-power-bank-powerbank-G9GnBK2-600.jpg',
      price: '179',
    },
  ];

  const initialVisibleCards = 4;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);
  const [totalCards, setTotalCards] = useState(electronics.length);

  const [currentPosition, setCurrentPosition] = useState(0);

  const slideCards = (direction) => {
    const eproductContainer = document.querySelector('.eproduct-container');
    const eproductCard = document.querySelector('.eproduct-card');
    const slideWidth = eproductCard.offsetWidth + 10;

    let newPosition = currentPosition + direction * slideWidth;
    if (newPosition < 0) newPosition = 0;

    eproductContainer.style.transform = `translateX(-${newPosition}px)`;
    setCurrentPosition(newPosition);
  };

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  return (
    <div>
      <div className="rectangle-container">
        <div className="electronics">
          <h1>Best Of Electronics</h1>
        </div>
        <div className="eproduct-container">
          {electronics.slice(0, visibleCards).map((product, index) => (
            <div key={index} className="eproduct-card">
              <img src={product.img} alt={product.name} className="eproduct-image" />
              <div className="eproduct-details">
                <p className="eproduct-name">{product.name}</p>
                <p className="eproduct-price">From ₹ {product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCards < totalCards && (
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        )}
        <button className="eproduct-prev" onClick={() => slideCards(-1)}>
          Prev
        </button>
        <button className="eproduct-next" onClick={() => slideCards(1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Categories;



