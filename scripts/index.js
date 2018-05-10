/* Inspired by : https://codepen.io/obc/pen/ypDmg */
/* Te iubesc pisoi */
/* @_tomesch */

// Add values to the values array and see what happens :)
var TotalCount = 0;
var team1,team2,team3,team4,team5;
team1 = 0;
team2 = 0;
team3 = 0;
team4 = 0;
team5 = 0;
var values = [team1, team2, team3, team4, team5];
document.getElementById('totalCount').innerHTML = TotalCount;

drawChart(values,"#chart",100) // You can adjust the margin between each bar by changing 10 to whatever you like

function drawChart(data,selector,padding){
  var max = Math.max.apply(Math, data);
	var chart = document.querySelector(selector);
	var barwidth = ((chart.offsetWidth-(values.length-1)*padding-(data.length)*10)/data.length);
	var sum = data.reduce(function(pv, cv) { return pv + cv; }, 0);
	var left = 0;
	for (var i in data){
	  var newbar = document.createElement('div');
	  newbar.setAttribute("class", "bar");
	  newbar.style.width=barwidth+"px";
	  newbar.style.height=((data[i]/max)*100)+"%";
	  newbar.style.left=left+"px";
	  chart.appendChild(newbar);
	  left += (barwidth+padding+10);
	}
}