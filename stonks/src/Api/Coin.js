import React from 'react'

//
const Coin = ({image, name, symbol, price, volume}) => {

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
                    <p className="coinPrice">{price}</p>
                    <p className="coinVolume">${volume.toLocaleString()}</p>
                </div>

            </div>
            
        </div>
    )
}

export default Coin
