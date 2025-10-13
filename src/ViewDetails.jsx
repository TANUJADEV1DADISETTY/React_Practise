import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./ViewData.css";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);

  const product = products[id]; // get product by index

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="view-container">
      <div className="detail-card">
        <img src={product.imageUrl} alt={product.name} className="card-img" />
        <h2>{product.name}</h2>
        <h3>Brand: {product.brand}</h3>
        <p><b>Size:</b> {product.size}</p>
        <p><b>Price:</b> ₹{product.price}</p>
        <p><b>Description:</b> {product.desc}</p>
        <button onClick={() => navigate("/viewdata")}>⬅ Back</button>
      </div>
    </div>
  );
};

export default ViewDetails;
