import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import './mainProduct.css';

const MainProduct = ({ products }) => {
  const { productId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on productId
    const filtered = products.filter((p) => p.id === parseInt(productId, 10));
    setFilteredProducts(filtered);
  }, [productId, products]);

  if (filteredProducts.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Main Product</h1>
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.img} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <div className='priceOff'>
                <p> ₹ {product.price}</p>
                <s> ₹ {product.cancelPrice}</s>
                <p>{product.off}</p>
              </div>
              {/* Display the number of stars as a digit with a single star icon */}
              <div className="stars">
                <FontAwesomeIcon icon={fasStar} style={{ color: 'white' }} /> {product.stars}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProduct;
