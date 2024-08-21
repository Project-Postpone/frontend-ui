// ChartComponent.js
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartBar = ({ chartId, data, labels, borderColor, label }) => {
  useEffect(() => {
    const ctx = document.getElementById(chartId).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          borderColor: borderColor,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 50
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [chartId, data, labels, borderColor, label]);

  return <canvas id={chartId} width="300" height="150"></canvas>;
};

export default ChartBar;
