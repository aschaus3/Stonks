
import React, {useState, useContext, useEffect}  from 'react';
import './coin.css';
import { FaChevronCircleDown, FaTrash } from 'react-icons/fa';
import Expand from 'react-expand-animated';
import {WatchList} from "./context/WatchList"
import CoinData from './components/CoinData';
import HistoryChart from './components/HistoryChart';
import CoinGecko from './CoinGecko';
import { Line } from 'react-chartjs-2';


const Coin = ({ id, image, name, symbol, price, volume, priceChange, marketCap, route }) => {

    const [clicked, setClicked] = useState(false);
    const {deleteCoin} = useContext(WatchList);

    const [ coinData, setCoinData ] = useState([])

    const [ isLoading, setIsLoading ] = useState([])

    const formatData = data => {
      return data.map(el => {
        return {
          t: el[0],
          y: el[1]
        }
      });
    }

    useEffect(() =>   {
        const fetchData = async () =>   {
            setIsLoading(true)
            const chartResultsMonth = await CoinGecko.get(`/coins/${route}/market_chart?vs_currency=CAD`
            , {
                params: {
                    vs_currency: "cad",
                    days: "30"
                    },
            });
            console.log(chartResultsMonth.data);
            setCoinData(formatData(chartResultsMonth.data.prices));
            setIsLoading(false)
        }
        fetchData();
      },[])

  const getKeyValue = (key) => {
    let arr = [];

    for (let el of coinData) {
      arr.push(el[key]);
    }

    return arr;
  }

    const renderData = () =>    {
      console.log('data: ');
      console.log(getKeyValue("t"));

      const data = {
        labels: getKeyValue("t"),
        datasets: {
          label: name,
          lineTension: 0.5,
          backgroundColor: 'rgba(75, 192, 192, 1)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 2,
          data: getKeyValue("y")
        }
      }

        if (isLoading) {
            return <div>...Loading</div>
        }
        return(
            <div className="coinList">

            {/**<CoinData/>
                <HistoryChart/> */}
              <Line
                data={ data }
              />

            </div>
            );
    }


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
                    <i onClick={(e) => {
                                            e.preventDefault();
                                            deleteCoin(id);
                                        }}>
                        <FaTrash/>
                    </i>

                </div>
                <Expand className="expand" open={clicked}>
                    <div className="expandDiv" style={{ width: '300px', height: '400px', color: 'red' }}>
                        {renderData()}
                    </div>

                </Expand>
            </div>
        </div>
    );
}

                {/*
                <div className="coinData">

                    <h1 className="coinVolume">${volume.toLocaleString()}</h1>


                </Expand>

        </div>0b68ff2eaa61b2fcbc13e0c41a416bbcfd111d
        */}
export default Coin;
