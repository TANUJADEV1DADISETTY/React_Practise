import React from "react";
import Tilty from "react-tilty";
import image from "./assets/scenery.jpg"
import './Tilt.css'

const Tilt = () => {
    return(
        <>
            <Tilty>
            <img src = {image} />
            </Tilty>
        </>
    )
}
export default Tilt