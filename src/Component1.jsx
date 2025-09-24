import React from "react";
import "./Component1.css";

const Component1 = () => {

    var Mycards = [
        {
            "name" : "Thub",
            "varient" : "Pink"
        },
        {
            "name" : "Aditya",
            "varient" : "skyblue"
        },
        {
            "name" : "Pragathi",
            "varient" : "skyblue"
        }
    ]
    return (
        <div className="parent">
            {
                Mycards.map((ele) => {
                    return <div className={ele.varient == "Pink" ? "card bg-pink" : "card bg-skyblue"}>{ele.name}</div>
                })
            }
        </div>
    )
}
export default Component1;