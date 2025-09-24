import React from "react";
import "./FunctionComponent1.css";

const FunctionComponent1 = ({Data}) => {

//   const Myimage =
    // "https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?cs=srgb&dl=food-healthy-apple-39803.jpg&fm=jpg";

//   const Myimage2 =
    // "https://wallpapercave.com/wp/wp2293595.jpg";

//   const Myimage3 = 
    // "http://momobud.sg/wp-content/uploads/2014/12/Organic-Green-Kiwi-Cut.jpg";

    // var Mycards = [
    // {
    //   "image": Myimage,
    //   "Name": "Apple",
    //   "Color": "Red"
    // },
    // {
    //   "image": Myimage2,
    //   "Name": "Orange",
    //   "Color": "Orange"
    // },
    // {
        // "image" : Myimage3,
        // "Name" : "Kiwi",
        // "Color" : "Green"
    // },
//   ];

  return (
    


    <div className="card">
        <div className="image">
            <img src={Data.image} alt={Data.Name} />
        </div>
        <div className="info">
            <div className="Name">Name : {Data.Name}</div>
            <div className="color">Color : {Data.Color}</div>
        </div>
    </div>
  );
};

export default FunctionComponent1;



// <div className="parent">
//   {
    {/* Props.Data.map((ele, index) => ( */}
        {/* <div className="card" key={index}> */}
        //   <div className="image">
            // <img src={ele.image} alt={ele.Name} />
        //   </div>
        //   <div className="info">
            // <div className="Name">Name : {ele.Name}</div>
            // <div className="color">Color : {ele.Color}</div>
        //   </div>
        // </div>
      {/* ))} */}
// </div>
