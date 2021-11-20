import React from 'react';
import './coin.css';

//
const Coin = ({image, name, symbol, price, volume, priceChange, marketCap}) => {
    //UI element
    return (
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                    <h1 className="coinSymbol">{symbol}</h1>
                    <h1 className="coinPrice">${price}</h1>
                </div>
                {/*
                <div className="coinData">
                    
                    <h1 className="coinVolume">${volume.toLocaleString()}</h1>

                    {priceChange < 0 ? ( 
                      <h1 className="red" >{priceChange.toFixed(2)}%</h1> 
                    ) : (
                      <h1 className="green" >{priceChange.toFixed(2)}%</h1>
                    )}
                    <h1 className="coinMarketCap">
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </h1>
                </div>
                */}
            </div>
        </div>
    );
};
    

export default Coin;
