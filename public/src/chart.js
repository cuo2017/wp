var ctxLastMonth = $("#lastMonthChart").get(0).getContext("2d");
var ctxChart = $("#b3-chart").get(0).getContext("2d");
var ctxChart2 = $("#b3-chart2").get(0).getContext("2d");


var disasterCount;


$.ajax({
      url: '/countDisaster',
      type: 'GET',
      dataType: 'json',
}).done(function(docs){
      disasterCount = docs;
      console.log(disasterCount);
      var dataLastMonth = {
            labels : ["锈病","虫害","冻害","干旱"],
            datasets : [
                  {
                  label: "发生次数",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "#33ccff",
                  borderColor: "#3333ff",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "#33ccff",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "#33ccff",
                  pointHoverBorderColor: "#3333ff",
                  pointHoverBorderWidth: 2,
                  pointRadius: 5,
                  pointHitRadius: 10,
                  data: [disasterCount, 0, 0, 0],
                  spanGaps: false,
                  },
                  
            ]
      };

      new Chart(ctxLastMonth, {
          type:'bar',
          data: dataLastMonth,
      });
      
});





var dataChart = {
	labels : ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
	datasets : [
		{
		label: "预警次数",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#33ccff",
            borderColor: "#3333ff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#33ccff",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#33ccff",
            pointHoverBorderColor: "#3333ff",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [1, 2, 0, 0, 0, 0, 0,0,0,0,0,0],
            spanGaps: false,
		},
		
	]
}

var dataChart2 = {
      labels : ["锈病","虫害","干旱","冻害"],
      datasets : [
            {
            label: "预警次数",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#33ccff",
            borderColor: "#3333ff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#33ccff",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#33ccff",
            pointHoverBorderColor: "#3333ff",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [3, 0, 0, 0],
            spanGaps: false,
            },
            
      ]
}





// chart for chart
new Chart(ctxChart, {
    type:'bar',
    data: dataChart,
});

new Chart(ctxChart2, {
    type:'bar',
    data: dataChart2,
});


