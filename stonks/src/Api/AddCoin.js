import React, { useContext, useState } from 'react'
import {WatchList} from "./context/WatchList"


function AddCoin() {
    const [isActive, setActive] = useState(false);
    const {addCoin} = useContext(WatchList);

    const avalibleCoins = [                
        "bitcoin",
        "ethereum",
        "ripple",
        "eos",
    ];

    const handleClick = (coin) => {
        addCoin(coin);
    }

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" onClick={() => setActive(!isActive)}> Add Coin </button>
            <div id="drop-list" className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                {avalibleCoins.map(el => {
                    return(
                        <a onClick={() => handleClick(el)} href="#" className="dropdown-item">{el}</a>
                    )
                })}
            </div>
        </div>
    );
}

export default AddCoin;
