import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
    const [state, setState] = React.useState({
          
            series: [{
              name: 'Electronics',
              data: [68, 75, 82, 70, 64, 77, 84]
            }, {
              name: 'Furniture',
              data: [42, 46, 53, 50, 47, 55, 59]
            }],
            options: {
              chart: {
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                name : "monthly_sales",
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
              },
              tooltip: {
                x: {
                  format: 'Monthly_Sales'
                },
              },
            },
          
          
        });

  

  return (
    <div>
            <div id="chart">
                <div class = "area"><ReactApexChart options={state.options} series={state.series} type="area" height={300} width = {450}/></div>
              </div>
            <div id="html-dist"></div>
    </div>
    
  );
};

export default Dashboard;
