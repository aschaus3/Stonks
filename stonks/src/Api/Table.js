import React, { useState, useEffect } from 'react';
import Coin from './Coin'
import './table.css'
import { StickyContainer, Sticky } from 'react-sticky'
import ListFavCoin from './ListFavCoin';
import AddCoin from './AddCoin';
import axios from 'axios';

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=100&page=1&sparkline=false


function Table()    {
    //initializing state
    const [ coins, setCoins ] = useState([])

    //initializing use state
    const [ search, setSearch ] = useState(' ')

    //creating axios connection
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=500&page=1&sparkline=false')
            .then(res =>    {
                setCoins(res.data)
            }).catch(err => console.log(err))
    }, []);
     
    //handling change in input
    const handleChange = e =>   {
        setSearch(e.target.value);
    }

    //filters through coins
    const filteredCoins = coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        )

    //UI element
    return(
        <div>
            <div className="favCoin">
                <AddCoin/>
                <ListFavCoin/>
            </div>
        
            <div className="coinApp">
                
                <div className="coinSearch">
                    <h1 className="coinText">Search a Currency</h1>
                    <form className="searchForm"> 
                        <input type="text" placeholder="Search" 
                                className="coinInput" onChange={handleChange}/>
                    </form>
                </div>
                {filteredCoins.map(coin =>  {
                    return(
                        <Coin key={coin.id} name={coin.name} 
                        price={coin.current_price} image={coin.image}
                        symbol={coin.symbol} marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}/>
                    );
                })}
            
            </div>
        </div>
    );
}

export default Table;