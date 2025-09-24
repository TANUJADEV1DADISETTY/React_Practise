import React from "react";
import "./CommerceComponent.css";

const CommerceComponent = () => {

    const Myimage1 = 
        "https://rukminim2.flixcart.com/image/612/612/ku79vgw0/stuffed-toy/d/h/c/exclusive-and-adorable-combo-of-3-super-soft-toys-for-kids-original-imag7dpgzzarz8dr.jpeg?q=70";

    const Myimage2 = 
        "https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/d/c/6/plush-soft-stuffed-animal-toy-for-6-month-kids-cuddly-soft-toys-original-imagn6c8fc6yfms2.jpeg?q=70";
    
    var Mycards = [
        {
            "image" : Myimage1,
            "title" : "Rabbit Soft Toy",
            "Price" : "177/-"
        },
        {
            "image" : Myimage2,
            "title" : "Story Plush Soft",
            "Price" : "207/-"
        }
    ]
    return(
        <div className="parent">
            
            {  
                Mycards.map((ele) => {
                    return <div className="card">
                        <div className="image">
                                <img src = {ele.image}></img>
                            </div><br></br>
                            <div className="title">{ele.title}</div>
                            <div className="price">Price : {ele.Price}</div>
                            <button>Add to Cart</button>
                            <button>Buy Now</button>
                        </div>
                })
            }
        </div>
    )
}

export default CommerceComponent;