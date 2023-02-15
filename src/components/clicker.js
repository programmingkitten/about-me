import React from "react";
export default function Clicker() {
    const [clicks, SetClicks] = React.useState(0);
    
    const clickHandler = (event) => {
        SetClicks(clicks + 1)
    }
    return (
        <div>
            <h1> Clicks: {clicks}</h1>
            <button onClick={clickHandler}>Farm some clicks for me :3</button>
        </div>
        )
};