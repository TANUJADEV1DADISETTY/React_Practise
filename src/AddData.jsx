import React from "react";
import './AddData.css'
import { Link } from "react-router-dom";

const AddData = () => {
    
     return(
        <div className="form-container">
      <h1>Add the data of Products</h1>

      <label>Name:</label>
      <input id="name" type="text" placeholder="Enter the name of product" />

      <label>Brand:</label>
      <input id="brand" type="text" placeholder="Enter the brand of product" />

      <label>size:</label>
      <input id="size" type="text" placeholder="Enter the size of product" />

      <label>price:</label>
      <input id="price" type="text" placeholder="Enter the price of product" />


      <label>Choose Image:</label>
      <input id="image" type="file"/>

      <label>Description</label>
      <textarea id = "desc"></textarea><br></br><br></br>

      <input
        type="submit"
        onClick={() => {
          const name = document.getElementById("name").value;
          const brand = document.getElementById("brand").value;
          const size = document.getElementById("size").value;
          const price = document.getElementById("price").value;
          const image = document.getElementById("image").value;
          const desc = document.getElementById("desc").value;

          console.log("Form Submitted:");
          console.log("Name:", name);
          console.log("Brand:", brand);
          console.log("Size:", size);
          console.log("Price:", price);
          console.log("Image:", image);
          console.log("Description:", desc);
        }}
      >
        Submit
      </input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type = "reset"></input>
    </div>
  );
};

export default AddData;