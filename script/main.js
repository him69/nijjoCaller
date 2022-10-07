
var xValues = [1,2,3,4,5,6,7,8];
var yValues = [0,150,260,360,425,113,823,999,];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255,193,7,1.0)",
      borderColor: "rgba(255,193,7,0.1)",
      color:"white",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      x:[{
        ticks:{
          color:'green'
        }
      }
        
      ],
      yAxes: [{ticks: {min: 0, max:1000,color:'green' }}],
      xAxex:[{ticks:{min:1, max:31}}]
    }
  }
});
new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255,193,7,1.0)",
      borderColor: "rgba(255,193,7,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:1000 }}],
      xAxex:[{ticks:{min:1, max:31}}]
    }
  }
});
