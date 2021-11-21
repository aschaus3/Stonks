import React, { useEffect, useState, useContext } from 'react';
import CoinGecko from './CoinGecko';
import Coin from './Coin';
import { WatchList } from './context/WatchList';
import './listfavcoin.css'


const ListFavCoin =()=> {

    const [ coins, setCoins ] = useState([])
    const {watchList, deleteCoin } = useContext(WatchList)
    const [ isLoading, setIsLoading ] = useState(false);

    console.log(watchList);

    useEffect(() => {
        const fetchData = async () =>   {
            setIsLoading(true);
            const response = await CoinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "cad",
                    ids: watchList.join(","),
                },

            });
            setCoins(response.data);
            setIsLoading(false);
        };
        fetchData();
    },[])



    const renderCoins = () =>   {
        if  (isLoading) {
            return(
                <div>...loading</div>
            );
        }
        
        return(
            <ul className="boughtCoin-listComponent">
                {coins.map(coin =>  {
                    return(
                        <Coin key={coin.id} name={coin.name} 
                        price={coin.current_price} image={coin.image}
                        symbol={coin.symbol} marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume} deleteCoin={deleteCoin} />);
                    
                })}
            </ul>
        );
    }

    return (
        <div>
            {renderCoins()}
        </div>
    );


}

export default ListFavCoin;

