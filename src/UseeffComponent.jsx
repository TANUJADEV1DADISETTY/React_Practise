import React from "react";
import { useState, useEffect } from "react";

const UseeffComponent = () => {

    const [x, setx] = useState(0);
    useEffect(()=>{
        console.log("Responding...");
    }, [x])

    return(
        <form>
            <label>Name : </label>
            <input type = "text"></input><br></br><br></br>
            <label>Roll No : </label>
            <input type = "text"></input><br></br><br></br>
            <label>Email</label>
            <input type = "text"></input><br></br><br></br>
            <button>ADD DATA</button>
        </form>
    )
}
export default UseeffComponent