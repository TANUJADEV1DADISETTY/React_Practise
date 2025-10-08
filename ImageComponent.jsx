import React from "react";
import { useState } from "react";
import './ImageComponent.css'

const ImageComponent = () => {
    const [imagePath, setimagePath] = useState(null);
  const GetData = (event) => {
    const file = event.target.files[0]
    const path = URL.createObjectURL(file)
    setimagePath(path);
    // console.log(file);
  }

  return (
    <>
      <input type="file" onChange={(event) => GetData(event)} />
      {
        imagePath ? <img className = "myimage" src = {imagePath} alt = "Image cracked"/> : <></>
      }
      
    </>
  );
};

export default ImageComponent;
