labels = ["Dist","Size","Time"];
data_arr = 
[512,32,855,
512,32,833,
512,32,709,
512,32,787,
64,16,721,
64,16,723,
64,16,703,
64,16,580,
128,16,670,
128,16,651,
128,16,745,
128,16,706,
128,64,481,
128,64,489,
128,64,433,
128,64,483,
1024,128,660,
1024,128,668,
1024,128,565,
1024,128,824,
128,32,713,
128,32,826,
128,32,597,
128,32,694,
512,8,915,
512,8,981,
512,8,1464,
512,8,1773,
1024,256,520,
1024,256,518,
1024,256,503,
1024,256,553,
1024,64,758,
1024,64,818,
1024,64,787,
1024,64,990,
256,128,477,
256,128,460,
256,128,433,
256,128,465,
256,16,751,
256,16,949,
256,16,964,
256,16,977,
256,8,896,
256,8,884,
256,8,972,
256,8,925,
1024,16,1155,
1024,16,718,
1024,16,1052,
1024,16,956,
512,64,620,
512,64,715,
512,64,678,
512,64,542,
64,8,1014,
64,8,761,
64,8,873,
64,8,966,
512,16,909,
512,16,887,
512,16,1039,
512,16,1059,
256,64,532,
256,64,736,
256,64,614,
256,64,640,
128,8,896,
128,8,828,
128,8,873,
128,8,862,
32,16,611,
32,16,544,
32,16,633,
32,16,636,
256,32,769,
256,32,779,
256,32,638,
256,32,702,
32,8,881,
32,8,783,
32,8,852,
32,8,1062,
1024,8,1280,
1024,8,1638,
1024,8,1422,
1024,8,1048,
1024,32,1256,
1024,32,946,
1024,32,875,
1024,32,934,
512,256,478,
512,256,466,
512,256,800,
512,256,421,
64,32,521,
64,32,544,
64,32,550,
64,32,485,
512,128,802,
512,128,766,
512,128,512,
512,128,508];

colors = ['green', 'red', 'blue'];

data = [[],[],[]];

for (i=0; i<data_arr.length; i++){
  data[i%3].push(data_arr[i]);
}

ID = []
for (i=0; i<data[0].length; i++){
  id_i = Math.log2((data[0][i] / data[1][i]) + 1);
  ID.push(id_i);
}



console.log(data);

console.log(ID);


var trace1 = {
  x: ID,
  y: data[2],
  mode: 'markers',
  type: 'scatter',
  name: "Fitts' Law Test Data",
  marker: {size: 6}
  
};

var trace2 = {
  x: [0, 8],
  y: [327.291, 1256.926],
  mode: 'scatter',
  name: "Regression Line",
  line: {color: colors[0], width: 5, shape: 'spline'},
  text: ['y = 132.805x + 327.29'],
};

var layout = {
  xaxis: {
    range: [0.8, 7.2],
    title: {
      text: 'ID',
      font: {
        family: 'Courier New, monospace',
        size: 24,
        color: '#000000'
      }
    },
  },
  yaxis: {
    range: [0, 1800],
    title: {
      text: "Time (ms)",
      font: {
        family: 'Courier New, monospace',
        size: 24,
        color: '#000000'
      }
    }
  },
  title: {
    text: "Fitts' Law Tests",
    font: {
      family: 'Courier New, monospace',
      size: 30,
      color: '#000000'
    }
  },
  staticPlot: true
};

Plotly.newPlot('tester', [trace1, trace2], layout);

// 3D Graph

var trace1 = {
	x: data[0], y: data[1], z: data[2],
	mode: 'markers',
	marker: {
		size: 12,
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'
};

var layout3D = 
{title: {
  text: "3D Fitts Law Plot",
  font: {
    family: 'Courier New, monospace',
    size: 30,
    color: '#000000'
  }
  },
  xaxis: {
    range: [0.8, 7.2],
    title: {
      text: 'ID',
      font: {
        family: 'Courier New, monospace',
        size: 24,
        color: '#000000'
      }
    },
  },
  yaxis: {
    title: "Time"
  },};
Plotly.newPlot('3D', [trace1], layout3D);