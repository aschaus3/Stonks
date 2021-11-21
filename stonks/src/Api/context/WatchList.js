import React, { createContext, useState } from "react";


export const WatchList = createContext();

export const WatchListContextProvider = props =>    {
    const [ watchList, setWatchList ] = useState([
        
    ]);

    const deleteCoin = (coin) =>    {
        setWatchList(
            console.log(watchList),
            watchList.filter(el => {
                return el !== coin
        }))
    };

    return  (
        <WatchList.Provider value={{watchList, deleteCoin}}>
            {props.children}

        </WatchList.Provider>

    );

}