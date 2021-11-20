import React from 'react'

//
const Coin = ({image, name, symbol, price, volume, priceChange, marketCap}) => {
    //UI element
    return (
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                    <p className="coinSymbol">{symbol}</p>
                </div>
                <div className="coinData">
                    <p className="coinPrice">${price}</p>
                    <p className="coinVolume">${volume.toLocaleString()}</p>

                    {priceChange < 0 ? ( 
                      <p classname="coinPercent red" >{priceChange.toFixed(2)}%</p> 
                    ) : (
                      <p classname="coinPercent green" >{priceChange.toFixed(2)}%</p>
                    )}
                    <p class="coinMarketCap">
                        Market Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};
    

export default Coin;
