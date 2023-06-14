// import React from "react";
// import { Chart } from "chart.js";

const PieChart = () => {
  // const chartRef = React.createRef();
  // const myPieChart = chartRef.current.getContext("2d");
  // new Chart(myPieChart, {
  //   type: 'doughnut',
  //   data: {
  //       labels: ["Direct", "Referral", "Social"],
  //       datasets: [{
  //           data: [55, 30, 15],
  //           backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
  //           hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
  //           hoverBorderColor: "rgba(234, 236, 244, 1)",
  //       }],
  //   },
  //   options: {
  //       maintainAspectRatio: false,
  //       tooltips: {
  //           backgroundColor: "rgb(255,255,255)",
  //           bodyFontColor: "#858796",
  //           borderColor: '#dddfeb',
  //           borderWidth: 1,
  //           xPadding: 15,
  //           yPadding: 15,
  //           displayColors: false,
  //           caretPadding: 10,
  //       },
  //       legend: {
  //           display: false
  //       },
  //       cutoutPercentage: 80,
  //   },
  // });

  return (
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Dropdown --> */}
      <div
          className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Categorias mais vendidas</h6>
          {/* <div className="dropdown no-arrow">
              <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink">
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
              </div>
          </div> */}
      </div>
      {/* <!-- Card Body --> */}
      <div className="card-body">
          <div className="chart-pie pt-4 pb-2">
            <canvas id="myPieChart"></canvas>
          </div>
          <div className="mt-4 text-center small">
              <span className="mr-2">
                  <i className="fas fa-circle text-primary"></i> Feminino
              </span>
              <span className="mr-2">
                  <i className="fas fa-circle text-success"></i> Masculino
              </span>
              <span className="mr-2">
                  <i className="fas fa-circle text-info"></i> Juvenil
              </span>
          </div>
      </div>
  </div>
  );
};

export default PieChart;
