import React from "react";
import CountUp from "react-countup";

const Counter = () => {
    return (
        <>
            <CountUp
                end = {2000}
                duration = {10}
            />
        </>
    )
}
export default Counter