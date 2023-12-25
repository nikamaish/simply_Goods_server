// import React, { useEffect, useState, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import _ from 'lodash';

// import './mainProduct.css';

// const ProductCard = React.memo(({ product }) => (
//   <div key={product.name} className="product-card">
//     <img src={product.img} alt={product.name} />
//     <div className="product-details">
//       <h2>{product.name}</h2>
//       <div className='priceOff'>
//         <p> ₹ {product.price}</p>
//         <s> ₹ {product.cancelPrice}</s>
//         <p>{product.off}</p>
//       </div>
//       <div className="stars">
//         <FontAwesomeIcon icon={fasStar} style={{ color: 'white' }} /> {product.stars}
//       </div>
//     </div>
//   </div>
// ));

// const MainProduct = ({ products, applyFilters }) => {
//   const { productId } = useParams();
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [priceRange, setPriceRange] = useState([0, 1000]);

//   const handlePriceChange = useCallback(_.debounce((range) => {
//     setPriceRange(range);
//     applyFilters({ price: range });
//   }, 300), [applyFilters]);

//   useEffect(() => {
//     // Filter products when the priceRange changes
//     const filtered = products.filter((product) => {
//       const productPrice = product.price;
//       return productPrice >= priceRange[0] && productPrice <= priceRange[1];
//     });

//     setFilteredProducts(filtered);
//   }, [priceRange, products]);

//   useEffect(() => {
//     return () => {
//       // Clear the debounce on component unmount
//       handlePriceChange.cancel();
//     };
//   }, [handlePriceChange]);

//   return (
//     <div className="main-product-container">
//       <div className="sidebar">
//         <h2>Filters</h2>
//         <div>
//           <label>Price Range:</label>
//           <Slider range min={0} max={1000} value={priceRange} onChange={handlePriceChange} />
//           <p>
//             Price: ₹ {priceRange[0]} - ₹ {priceRange[1]}
//           </p>
//         </div>
//         {/* Add more filters as needed */}
//       </div>
//       <div className="product-cards">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.name} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainProduct;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import './mainProduct.css';
import { size } from 'lodash';

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
              <h3 style={{fontSize:'15px', color:'#8c8c8c'}}>{product.colorType}</h3>
              <div className='priceOff'>
               <b><p style={{fontSize:'20px'}}> ₹ {product.price}</p></b>
                <s style={{fontSize:'16px'}}> ₹ {product.cancelPrice}</s>
                <p style={{color:'rgb(7, 180, 7)', fontSize:'18px'}}>{product.off}</p>
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

