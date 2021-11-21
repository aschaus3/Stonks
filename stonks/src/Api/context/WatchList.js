import React, { createContext, useState } from "react";
export const WatchList = createContext();
import {Uname} from '../../Login/login';

const URL = 'http://localhost:5000';

export const WatchListContextProvider = props =>    {
    const [ watchList, setWatchList ] = useState([
        
    ]);


    const addCoin = coin => {
        if(watchList.indexOf(coin) === -1)
        {
            setWatchList([...watchList, coin])

                const data = {
                  userID: Uname,
                  cryptoID: coin.id
                }

            axios.post(URL + '/add-crypto', data)
            
        }
    }
    

    const deleteCoin = (coin) => {
        setWatchList(
            watchList.filter(el => {
                return el !== coin
        }))
    };

    return  (
        <WatchList.Provider value={{watchList, deleteCoin, addCoin}}>
            {props.children}

        </WatchList.Provider>

    );

}