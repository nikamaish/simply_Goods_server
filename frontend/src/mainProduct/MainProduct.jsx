import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './mainProduct.css';

const MainProduct = ({ products }) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Find the selected product based on productId
    const product = products.find((p) => p.id === parseInt(productId, 10));
    setSelectedProduct(product);
  }, [productId, products]);

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Main Product</h1>
      <div className="product-card">
        <img src={selectedProduct.img} alt={selectedProduct.name} />
        <div className="product-details">
          <h2>{selectedProduct.name}</h2>
          <p>Price: ₹ {selectedProduct.price}</p>
          {/* Add other product details, e.g., stars */}
          <div className="stars">Stars: {selectedProduct.stars}</div>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
