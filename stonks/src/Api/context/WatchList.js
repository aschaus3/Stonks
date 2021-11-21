import React, { createContext, useState } from "react";


export const WatchList = createContext();

export const WatchListContextProvider = props =>    {
    const [ watchList, setWatchList ] = useState([
        "bitcoin", 
        "ethereum", 
        "ripple",
        "litecoin"
    ]);

    const deleteCoin = (coin) => {
        setWatchList(
            watchList.filter(el => {
                return el !== coin
        }))
    };

    return  (
        <WatchList.Provider value={{watchList, deleteCoin,}}>
            {props.children}

        </WatchList.Provider>

    );

}