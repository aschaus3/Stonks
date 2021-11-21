import React, {useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const HistoryChart = ({name}) => {

    const chartRef = useRef();

    useEffect(() => {
        if (chartRef && chartRef.current)   {
            console.log("yeah");
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
