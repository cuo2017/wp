var ctxLastMonth = $("#lastMonthChart").get(0).getContext("2d");
var ctxChart = $("#b3-chart").get(0).getContext("2d");
var ctxChart2 = $("#b3-chart2").get(0).getContext("2d");
var ctxChart3 = $("#b3-chart3").get(0).getContext("2d");
var ctxChart4 = $("#b3-chart4").get(0).getContext("2d");
var ctxChart5 = $("#b3-chart5").get(0).getContext("2d");
var ctxChart6 = $("#b3-chart6").get(0).getContext("2d");


var disasterCount;


$.ajax({
      url: '/countDisaster',
      type: 'GET',
      dataType: 'json',
}).done(function(docs){
      disasterCount = docs;
      console.log(disasterCount);
      var dataLastMonth = {
            labels : ["2017.6","2017.7","2017.8","2017.9","2017.10","2017.11","2017.12","2018.1","2018.2","2018.3","2018.4","2018.5"],
            datasets : [
                  {
                  label: "爆发程度",
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
                  data: [0, 1, 3, 2, 0, 0, 0, 0, 1, 2, 1, 0],
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
	labels : ['6.1','6.2','6.3', '6.4', '6.5', '6.6', '6.7'],
	datasets : [
		{
		label: "每日平均空气温度",
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
            data: [20.7,20.3,21.5,20.5,19.3,19.4,20.8],
            spanGaps: false,
		},
		
	]
}

var dataChart2 = {
      labels : ['6.1','6.2','6.3', '6.4', '6.5', '6.6', '6.7'],
      datasets : [
            {
            label: "每日平均空气湿度",
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
            data: [51,58,60,62,78,42,48],
            spanGaps: false,
            },
            
      ]
}


var dataChart3 = {
      labels : ['6.1','6.2','6.3', '6.4', '6.5', '6.6', '6.7'],
      datasets : [
            {
            label: "每日平均空气湿度",
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
            data: [15,15.2,15,15.1,14.6,15.1,15.3],
            spanGaps: false,
            },
            
      ]
}

var dataChart4 = {
      labels : ['6.1','6.2','6.3', '6.4', '6.5', '6.6', '6.7'],
      datasets : [
            {
            label: "过去一周光照强度走势",
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
            data: [22510,6745,5620,6630,5670,15580,18210],
            spanGaps: false,
            },
            
      ]
}

var dataChart5 = {
      labels : ['6.1','6.2','6.3', '6.4', '6.5', '6.6', '6.7'],
      datasets : [
            {
            label: "每日平均浅层土壤水分",
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
            data: [7,6.5,8,6.7,7,7.2,7],
            spanGaps: false,
            },
            
      ]
}

var dataChart6 = {
      labels : ['6.1','6.2','6.3', '6.4', '6.5', '6.6', '6.7'],
      datasets : [
            {
            label: "每日平均中层土壤水分",
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
            data: [9.8,9.4,9.4,9.7,9.7,9.9,9.9],
            spanGaps: false,
            },
            
      ]
}





// chart for chart
new Chart(ctxChart, {
    type:'line',
    data: dataChart,
});

new Chart(ctxChart2, {
    type:'line',
    data: dataChart2,
});

new Chart(ctxChart3, {
    type:'line',
    data: dataChart3,
});

new Chart(ctxChart4, {
    type:'line',
    data: dataChart4,
});
new Chart(ctxChart5, {
    type:'line',
    data: dataChart5,
});
new Chart(ctxChart6, {
    type:'line',
    data: dataChart6,
});


