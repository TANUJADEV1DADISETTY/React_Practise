import React, { useState, useContext } from "react";
import "./AddData.css";
import { ProductContext } from "./ProductContext";

const AddData = () => {
  const { products, setProducts } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    size: "",
    price: "",
    image: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: id === "image" ? files[0] : value,
    });
  };

  const SubmitForm = () => {
    if (!formData.name || !formData.brand || !formData.price || !formData.image) {
      alert("Please fill all required fields!");
      return;
    }

    const newProduct = {
      ...formData,
      imageUrl: URL.createObjectURL(formData.image), // for preview
    };

    setProducts([...products, newProduct]); // add product globally

    alert("Product added successfully!");
    setFormData({
      name: "",
      brand: "",
      size: "",
      price: "",
      image: "",
      desc: "",
    });
  };

  const ClearForm = () => {
    setFormData({
      name: "",
      brand: "",
      size: "",
      price: "",
      image: "",
      desc: "",
    });
  };

  function Change() {
    window.location.href = "/viewdata";
  }

  return (
    <div className="form-container">
      <h1>Add the data of Products</h1>

      <label>Name:</label>
      <input
        id="name"
        type="text"
        placeholder="Enter the name of product"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Brand:</label>
      <input
        id="brand"
        type="text"
        placeholder="Enter the brand of product"
        value={formData.brand}
        onChange={handleChange}
        required
      />

      <label>Size:</label>
      <input
        id="size"
        type="text"
        placeholder="Enter the size of product"
        value={formData.size}
        onChange={handleChange}
        required
      />

      <label>Price:</label>
      <input
        id="price"
        type="text"
        placeholder="Enter the price of product"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <label>Choose Image:</label>
      <input id="image" type="file" onChange={handleChange} required />

      <label>Description:</label>
      <textarea
        id="desc"
        placeholder="Enter the description"
        value={formData.desc}
        onChange={handleChange}
      ></textarea>

      <br />
      <br />
      <button type="button" onClick={SubmitForm}>Submit</button>
      &nbsp;&nbsp;&nbsp;
      <button type="button" onClick={ClearForm}>Clear</button>
      &nbsp;&nbsp;&nbsp;
      <button type="button" onClick={Change}>View Data</button>
    </div>
  );
};

export default AddData;
