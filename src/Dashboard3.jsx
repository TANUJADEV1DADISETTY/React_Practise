import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import './Dashboard3.css'


const Dashboard3 = () => {
    const [state, setState] = React.useState({
          
            series: [{
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 80]
            }, {
              name: 'Revenue',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 68, 90]
            }, {
              name: 'Free Cash Flow',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 56, 64]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  borderRadius: 5,
                  borderRadiusApplication: 'end'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              },
              yaxis: {
                title: {
                  text: '$ (thousands)'
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return "$ " + val + " thousands"
                  }
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart3">
                <div className="area3"><ReactApexChart options={state.options} series={state.series} type="bar" height={350} width = {700}/></div>
              </div>
            <div id="html-dist"></div>
          </div>
        );
    }
export default Dashboard3