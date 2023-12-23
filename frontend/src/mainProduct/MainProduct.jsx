import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './mainProduct.css';
import { useParams } from 'react-router-dom';

const MainProduct = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const electronics = [
    {
      id: 1,
      name: 'Pendrives and SD cards',
      img: 'https://purepng.com/public/uploads/large/purepng.com-sandisk-usb-flash-pen-driveelectronics-pen-drive-usb-9415246650490ar6r.png',
      price: 289,
    },
    // Add more electronic products as needed
  ];

  const { index } = useParams();

  useEffect(() => {
    // Filter products when the priceRange changes
    const filtered = electronics.filter((product) => {
      const productPrice = product.price;
      return productPrice >= priceRange[0] && productPrice <= priceRange[1];
    });

    setFilteredProducts(filtered);
  }, [priceRange]);

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <div>
        <label>Price Range:</label>
        <Slider range min={0} max={1000} value={priceRange} onChange={handlePriceChange} />
        <p>
          Price: ₹ {priceRange[0]} - ₹ {priceRange[1]}
        </p>
      </div>

      <div>
        <h2>Filtered Products</h2>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>Price: ₹{product.price}</p>
            {/* Add other product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProduct;
