import React from "react";
import { useState } from "react";
import './ImageComponent.css'

const ImageComponent1 = () => {
    const [imagePath , setImagePath]=useState(null)
  const GetData= (event) =>{
    const file =event.target.files[0]
    // const path =URL.createObjectURL(file)
    // setImagePath(path)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload= () =>{
    //   setImagePath(reader.result)
        console.log(reader.result)
    }
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

export default ImageComponent1;
