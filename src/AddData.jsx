import React from "react";
import './AddData.css'

const AddData = () => {
    return(
        <>
        <h1 className="heading">Add the data of products</h1>
        <form className="form">
            <label>Name : </label>
            <input type = "text" required></input><br></br><br></br><br></br>
            <label>Brand : </label>
            <input type = "text" required></input><br></br><br></br><br></br>
            <label>Size : </label>
            <input type = "text" required></input><br></br><br></br><br></br>
            <label>Price : </label>
            <input type = "text" required></input><br></br><br></br><br></br>
            <label> chooseImage : </label>
            <input type = "file"></input><br></br><br></br>
            <label>Description : </label>
            <textarea></textarea>
        </form>
        </>
    )
}
export default AddData
