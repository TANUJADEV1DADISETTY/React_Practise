import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import './Dashboard1.css';

const Dashboard1 = () => {
  const [state, setState] = React.useState({
          
            series: [210000, 175000, 85000, 65000, 40000],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              labels: ['Electronics', 'Furniture', 'Home Decor', 'Sports', 'Books'],
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: 'Department_sales'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
        });

        return (
          <div>
            <div id="chart1">
                <div className="area1"><ReactApexChart options={state.options} series={state.series} type="donut" width={380} /></div>
              </div>
            <div id="html-dist"></div>
          </div>
        );
}
export default Dashboard1;