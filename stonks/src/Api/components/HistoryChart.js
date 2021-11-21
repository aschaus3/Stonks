import React, {useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import ChartOptions from './chartOptions/ChartOptions'
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const HistoryChart = ({data}) => {

    const chartRef = useRef();
    //const {chartResultsMonth.data.prices} = data;

    useEffect(() => {
        if (chartRef && chartRef.current)   {
            console.log("yeah");
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: '# of Votes',
                        data: [{x: 1, y: 15}, {x:2, y: 12}, {x:3, y:25} ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    })


    return (
        <div>
            <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>

        </div>
    )
}

export default HistoryChart;
