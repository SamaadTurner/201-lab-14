'use strict';
// getting elements for the chart from the id 'chart' in chart.html 
let canvasElem = document.getElementById('chart')

// TODO:
 // - Instantiate a new AppState
 let appState = new AppState();
 //- Uses a method on that AppState to load vote data from localStorage.
 appState.loadItems();

 // - Creates an object called 'data' for chart.js using the AppState's allProducts[]
 const data = {
    // Go through allProducts[] and give each element the name product, and return the name of each product (product.name) in the new array.
    // .map  method is an array method in JavaScript that iterates over each element of the array and creates a new array with the results of applying a provided function to each element.
    // product => product.name: This part is an arrow function that takes each product from the appState.allProducts array as input and returns product.name. It extracts the name property from each product object.
    // all in all, when this line of code is executed, it will create a new array containing only the names of each product from appState.allProducts. The resulting array will have the same number of elements as the original array, but each element will now be a product name.
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


