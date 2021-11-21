import React, {useState, useEffect}  from 'react';
import './coin.css';
import { FaChevronCircleDown, FaTrash } from 'react-icons/fa';
import Expand from 'react-expand-animated';
import CoinData from './components/CoinData';
import HistoryChart from './components/HistoryChart';
import CoinGecko from './CoinGecko';

const Coin = ({ coinName ,image, name, symbol, price, volume, priceChange, marketCap, deleteCoin }) => {
  
    const [ clicked, setClicked] = useState(false);

    const [ coinData, setCoinData ] = useState([])

    const [ isLoading, setIsLoading ] = useState([])

    useEffect(() =>   {
        const fetchData = async () =>   {
            setIsLoading(true)
            const chartResultsMonth = await CoinGecko.get(`/coins/${name}/market_chart?vs_currency=CAD`
            , {
                params: {
                    vs_currency: "cad",
                    days: "30"
                    },
            });
            console.log(chartResultsMonth.data);
            setCoinData(chartResultsMonth.data.prices);
            setIsLoading(false)
        };

        fetchData();
      },[])

    const renderData = () =>    {
        
        if (isLoading) {
            return <div>...Loading</div>
        }
        return(
            <div className="coinList">
                
                <CoinData/>
                <HistoryChart/>
            </div>
        );
    }

//UI elementg
return (
    <div className="coinContainer" >
        <div className="coinRow">
            <div className="coin" >
                <img src={image} alt="crypto"></img>
                <h1>{coinName}</h1>
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

                <i >
                    <FaChevronCircleDown className="icon" onClick={() => setClicked(!clicked)}/>
                </i> 
                
            </div>
            <Expand className="expand" open={clicked}>
                
                <div className="expandDiv">
                    <FaTrash/> 

                </div>

                <div className="coinList">
                    {renderData()}
                </div>

                
                {/* <a onClick={(e) => { 
                                        e.preventDefault();
                                        deleteCoin(coin); 
                                    }}>
                </a>
                */}
                    
                
                    
            
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
