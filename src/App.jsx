// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'

// // import './App.css'
// // import FunctionComponent from "./FunctionComponent"
// // import MyComponent from './MyComponent'
// // import FormComponent1 from './FormComponent1'
// // import FormComponent2 from './FormComponent2'
// // import FormComponent3 from './FormComponent3'
// // import FormComponent4 from './FormComponent4'
// // import FormComponent5 from './FormComponent5'
// // import FunctionComponent1 from './FunctionComponent1'
// // import CommerceComponent from './CommerceComponent'
// // import Component1 from './Component1'
// // import Component2 from './component2'
// // import UseeffComponent from './UseeffComponent'
// // import CardsDynamic from './CardsDynamic'
// // import Todo from '../todo'
// // import ImageComponent from '../ImageComponent'
// // import ImageComponent1 from './ImageComponent1'
// // import HeaderComponent from './HeaderComponent'
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AddData from './AddData'
// import HeaderComponent from './HeaderComponent';
// import Add from './Add';
// import { ProductProvider } from './ProductContext';
// import ViewData from './ViewData';

//   // const Myimage =
//     // "https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?cs=srgb&dl=food-healthy-apple-39803.jpg&fm=jpg";

//   // const Myimage2 =
//     // "https://wallpapercave.com/wp/wp2293595.jpg";

//   // const Myimage3 = 
//     // "http://momobud.sg/wp-content/uploads/2014/12/Organic-Green-Kiwi-Cut.jpg";

//     // var Mycards = [
//     // {
//       // "image": Myimage,
//       // "Name": "Apple",
//       // "Color": "Red"
//     // },
//     // {
//       // "image": Myimage2,
//       // "Name": "Orange",
//       // "Color": "Orange"
//     // },
//     // {
//         // "image" : Myimage3,
//         // "Name" : "Kiwi",
//         // "Color" : "Green"
//     // },
//   // ];

//  function App() {
//   // const [x, setx] = useState(true);
//   // const change = (x) => {
//     // x = !x;
//   // }

//   // const [Data,setData]=useState([1,2,3])
//   // const change=()=>{
//     // setData([4,5,6,7,8])
//     // setData([...Data,100])
//   // };

//   // const Delete=(deleteIndex)=>{
//     // var arr=Data.filter((ele,index)=> index !== deleteIndex)
//     // setData(arr)
//    //}

//     // console.log(deleteIndex)

//   return (
//     <>
//       {/* <FunctionComponent /> */}
//       {/* <MyComponent/> */}
//       {/* <FormComponent1/> */}
//       {/* <FormComponent2 /> */}
//       {/* <FormComponent3 /> */}
//       {/* <FormComponent4 /> */}
//       {/* <FormComponent5 /> */}
//       {
//         //Mycards.map((ele) => {
//           //return <FunctionComponent1 Data={ele} />
//         //})
//       }
//       {/* <CommerceComponent/> */}
//       {/* {x == true ? <Component1/> : <Component2/>} */}
//       {/* {x == true ? <h1>Hello</h1> : <h1>Bye</h1>} */}
//       {/* {<button onclick = "change">Change State</button>} */}
//       {/*  */}
//       {
//         // Data.map(ele=>{
//           // return <h1>{ele}</h1>
//         // }) 
//       }

//       {/* <UseeffComponent/> */}
//       {/* <CardsDynamic/> */}
//       {/* <Todo/> */}
//       {/* <ImageComponent1 /> */}
//       {/* <HeaderComponent /> */}
//       {/* <AddData /> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path = "/" element = {<HeaderComponent/>} />
//           <Route path = "/adddata" element = {<AddData />} />
//           <Route path = "/viewdata" element = {<ViewData/>} />
//         </Routes>
//       </BrowserRouter>
//       {/* <HeaderComponent /> */}
//       {/* <AddData /> */}

//     </>
//   )
// };

// export default App




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import AddData from "./AddData";
import ViewData from "./ViewData";
import { ProductProvider } from "./ProductContext";
import ViewDetails from "./ViewDetails";
import Counter from "./CountUp";
import Tilt from "./Tilt";
import Toast from "./Toast";
import Spinner from "./Spinner";
import Confit from "./Confit";
import Dashboard from "./Dashboard";
import Dashboard1 from "./Dashboard1";

const App = () => {
  return (
    // Uncomment this part when you want routing
    // <Router>
    //   <ProductProvider>
        
    //     <Routes>
    //       <Route path="/" element={<HeaderComponent />} />
    //       <Route path="/adddata" element={<AddData />} />
    //       <Route path="/viewdata" element={<ViewData />} />
    //       <Route path="/viewdata/:id" element={<ViewDetails />} />
    //     </Routes>
    //   </ProductProvider>
    // </Router>

    // For now, just showing your Counter
    // <Counter />  
    // <Tilt />
    // <Toast />
    // <Spinner />
    // <Confit />
    <>
    <div>
    <div>
      <Dashboard />
    </div>
    <div>
      <Dashboard1 />
    </div>
    </div>
    </>
    
  );
};

export default App;
