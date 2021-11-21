import React, {useState}  from 'react';
import './coin.css';
import { FaChevronCircleDown, FaTrash } from 'react-icons/fa';
import Expand from 'react-expand-animated';

const Coin = ({ coin, image, name, symbol, price, volume, priceChange, marketCap, deleteCoin, key}) => {
  
  const [clicked, setClicked] = useState(false);

    //UI element
    return (
        <div className="coinContainer" >
            <div className="coinRow" for="expend">
                <div className="coin" for="extend">
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                    <h1 className="coinSymbol">{symbol}</h1>
                    <h1 className="coinPrice">${price}</h1>

                    {/*<div className="buy-button">
                    <Link to="/Trade" state={{from:name}}className="buy-button" >

                    <div className="buy-button">
                    <Link to="/Trade" state={{cName:name, cImg:image}}className="buy-button" >

                        Buy
                    </Link>
                    </div>*/}

                    {priceChange < 0 ? (
                    <h1 className="red" >{priceChange.toFixed(2)}%</h1>
                    ) : (
                    <h1 className="green" >{priceChange.toFixed(2)}%</h1>
                    )}

                    <i>
                        <FaChevronCircleDown className="icon" onClick={() => setClicked(!clicked)}/>
                    </i> 
                    <a onClick={(e) => { 
                                            e.preventDefault();
                                            console.log(symbol)
                                            deleteCoin(symbol); 
                                        }}>
                        <FaTrash/> 
                    </a>
                    
                </div>
                <Expand className="expand" open={clicked}>
                    <div className="expandDiv" style={{ width: '300px', height: '400px', color: 'red' }}>
                        Hello
                    </div>
                        
                
                </Expand>
                

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
