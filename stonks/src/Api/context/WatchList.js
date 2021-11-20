import React, { createContext, useState } from "react";

export const WatchList = createContext();

export const WatchListContextProvider = props =>    {
    const [ watchList, setWatchList ] = useState(["bitcoin, ethereum", "ripple"])

    return  (
        <WatchList.Provider value={{watchList}}>
            {props.children}
        </WatchList.Provider>

    );

}