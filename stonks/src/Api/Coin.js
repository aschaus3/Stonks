import React from 'react';
import { Collapse } from 'react-bootstrap';
import './coin.css';
import { Link } from 'react-router-dom';

const Coin = ({image, name, symbol, price, volume, priceChange, marketCap}) => {
  let open = false;

  let toggleClick = () => {
    open = !open;
  }
    //UI element
    return (
        <div className="coinContainer" >
                <div className="coinRow" for="expend">
                    <div className="coin" for="extend">
                        <img src={image} alt="crypto" onClick={toggleClick}></img>
                        <h1>{name}</h1>
                        <h1 className="coinSymbol">{symbol}</h1>
                        <h1 className="coinPrice">${price}</h1>
                        <div className="buy-button">
                        <Link to="/Trade" className="buy-button" >
                            Buy
                        </Link>
                    </div> 
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
