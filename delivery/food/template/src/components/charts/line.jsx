/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const ChartLine = ({ labels, label, data }) => {
  const dataChart = {
    labels,
    datasets: [
      {
        label: label,
        data: data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      scales: {
        xAxes: [{ gridLines: { display:false } }],
        yAxes: [{ gridLines: { display:false } }]
    }
    },
  };

  return <Line options={options} data={dataChart} />;
};

export default ChartLine;
