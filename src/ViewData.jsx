import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import "./ViewData.css";

const ViewData = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/viewdata/${index}`);
  };

  return (
    <div className="view-container">
      <h1>Product Details</h1>
      <div className="card-container">
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((item, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <img src={item.imageUrl} alt={item.name} className="card-img" />
              <h3>{item.name}</h3>
              <p>Brand: {item.brand}</p>
              <p>₹{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewData;
