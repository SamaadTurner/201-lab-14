'use strict';

let canvasElem = document.getElementById('chart')

// TODO:
 // - Instantiate a new AppState
 let appState = new AppState();
 //- Use a method on that AppState to load vote data from localStorage.
 appState.loadItems();

 // - Create a data object for chart.js using your AppState's allProducts array.
 const data = {
    labels: appState.allProducts.map(product => product.name),
    datasets: [{
      label: 'Votes',
      data: appState.allProducts.map(product => product.timesClicked),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }]
  };
 // - Combine the data object with configuration information for chart.js type, colors, etc
 const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
 // - Call chart.js with the configuration and the canvasElem
 function renderChart() {
    new Chart(canvasElem, config);

  }
  
  renderChart();


