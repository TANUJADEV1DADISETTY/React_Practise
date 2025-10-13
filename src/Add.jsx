import React from "react";
import './AddData.css'


const Add = () => {
    
     return(
        <>
        <div className="form-container">
      <h1>Registration Form</h1>

      <label>Name:</label>
      <input id="name" type="text" placeholder="Enter your name" />

      <label>E-mail:</label>
      <input id="email" type="text" placeholder="Enter your email" />

      <label>Address:</label>
      <input id="address" type="text" placeholder="Enter your address" />

      <label>Department:</label>
      <input id="department" type="text" placeholder="Enter your department" />

      <label>Roll Number:</label>
      <input id="roll" type="text" placeholder="Enter your roll number" />

      <label>Section:</label>
      <input id="section" type="text" placeholder="Enter your section" />

      <button
        type="button"
        onClick={() => {
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const address = document.getElementById("address").value;
          const department = document.getElementById("department").value;
          const roll = document.getElementById("roll").value;
          const section = document.getElementById("section").value;

          console.log("Form Submitted:");
          console.log("Name:", name);
          console.log("Email:", email);
          console.log("Address:", address);
          console.log("Department:", department);
          console.log("Roll Number:", roll);
          console.log("Section:", section);
        }}
      >
        Submit
      </button>
    </div>

        </>
  )
}

export default Add;