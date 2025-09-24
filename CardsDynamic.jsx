import React from "react";
import { useState, useEffect } from "react";
import './CardsDynamic.css';


const CardsDynamic = () => {
    const [completeData, setCompleteData] = useState([
    {
        "name" : "Alice",
        "Roll_No" : "23P31A4201"
    },
    {
        "name" : "Bob",
        "Roll_No" : "23A91A4208"
    },
    {
        "name" : "Charlie",
        "Roll_No" : "23P31A4202"
    },
    {
        "name" : "David",
        "Roll_No" : "23MH1A4205"
    },
    {
        "name" : "Emma",
        "Roll_No" : "23MH1A4215"
    },
    {
        "name" : "Ferrik",
        "Roll_No" : "23P31A4210"
    },
    {
        "name" : "Tanuja",
        "Roll_No" : "23P31A4215"
    }
]);

const [QueryResult, setQueryResult] = useState([
    // {
    //     "name" : "Alice",
    //     "Roll_No" : "23P31A4201"
    // },
    // {
    //     "name" : "Bob",
    //     "Roll_No" : "23A91A4208"
    // },
    // {
    //     "name" : "Charlie",
    //     "Roll_No" : "23P31A4202"
    // },
    // {
    //     "name" : "David",
    //     "Roll_No" : "23MH1A4205"
    // },
    // {
    //     "name" : "Emma",
    //     "Roll_No" : "23MH1A4215"
    // },
    // {
    //     "name" : "Ferrik",
    //     "Roll_No" : "23P31A4210"
    // },
    // {
    //     "name" : "Tanuja",
    //     "Roll_No" : "23P31A4215"
    // }
]);
    const [UserSearch, setUserSearch] = useState("");



    useEffect(() => {
    const filteredData = completeData.filter((ele) =>
      ele.name.toLowerCase().includes(UserSearch.toLowerCase()) ||
      ele.Roll_No.toLowerCase().includes(UserSearch.toLowerCase())
    );
    setQueryResult(filteredData);
  }, [UserSearch, completeData]);
    
    return (
        <>
        <input type = "text" placeholder="Search..........."
        onChange={(e) => setUserSearch(e.target.value)}></input>
        <div className = "parent">
        {
            QueryResult.map((ele) => {
                return <div className="card">
                    <div className="name">{ele.name}</div>
                    <div className="roll">{ele.Roll_No}</div>
                </div>
            })
        }
        </div>
        </>

    )
}
export default CardsDynamic