function Generatechart() {
    var altitudeArray = document.getElementById('please').value.split(',');
  //  var iterations = document.getElementById("iterationlog");
  //  var altitude = document.getElementById("altitudelog");
   // var iterationsArray = [iterations];
  //  var altitudeArray = [altitude];

    const CHART = document.getElementById("LineChart");
    let LineChart= new Chart(CHART, {
        type:'line',
        data: {
            labels: ["january", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First Database",
                    Fill: true,
                    lineTension: 0.0,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderCapStyle: 'butt',
                    borderdashOffser: 0.0,
                    borderJoinStyle: 'niter',
                    pointHoverRadius: 5,
                    pointRadius: 1,
                    data: [12,42,53,62,15,36,12],
                }
            ]
        },
        options:{
            scales: {
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                }]
            }
        }
    })
}