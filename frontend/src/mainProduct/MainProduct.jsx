import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import the styles for the slider
import './mainProduct.css';
import { useParams } from 'react-router-dom';

const MainProduct = ({ applyFilters }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { index} = useParams();

  const handlePriceChange = (range) => {
  //   // Update the state and pass the selected price range to the parent component
    setPriceRange(range);
    applyFilters({ price: range });
  };
  // const MainProduct = ({ location }) => {
  //   const { product } = location.state || {};
    
  //   // Use the product information for filtering or other purposes
  //   // ...
  // };

  return (

    <div className="sidebar">
      <h2>Filters</h2>
      <div>
        <label>Filter 1:</label>
        <select onChange={(e) => handlePriceChange('filter1', e.target.value)}>
          {/* Options for Filter 1 */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div>
        <label>Filter 2:</label>
        <select onChange={(e) => handlePriceChange('filter2', e.target.value)}>
          {/* Options for Filter 2 */}
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
        </select>
      </div>
      <div>
        <label>Price Range:</label>
        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={handlePriceChange}
        />
        <p>
          Price: ₹ {priceRange[0]} - ₹ {priceRange[1]}
        </p>
      </div>
      {/* Add more filters as needed */}
    </div>
  );
};

export default MainProduct;
