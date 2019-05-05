/* Inspired by : https://codepen.io/obc/pen/ypDmg */
/* Te iubesc pisoi */
/* @_tomesch */

// Add values to the values array and see what happens :)
var TotalCount = 0;
var Sunday,Monday,Tuesday,Wednesday;
Sunday = 0;
Monday = 0;
Tuesday = 0;
Wednesday = 0;
Thursday = 0;
Sunday2 = 0;
Monday2 = 0;
var values = [Sunday, Monday, Tuesday, Wednesday, Thursday, Sunday2, Monday2];
TotalCount = values.reduce(function(e1, e2) { return e1 + e2; });
document.getElementById('totalCount').innerHTML = TotalCount;

var ref = firebase.database().ref();
ref.on("value", function(snapshot){
    Sunday = snapshot.val().sundayDonations;
    Monday = snapshot.val().mondayDonations;
    Tuesday = snapshot.val().tuesdayDonations;
    Wednesday = snapshot.val().wednesdayDonations;
    Thursday = snapshot.val().wednesdayDonations;
    Sunday2 = snapshot.val().sunday2Donations;
    Monday2 = snapshot.val().monday2Donations;
    var values = [Sunday, Monday, Tuesday, Wednesday, Thursday, Sunday2, Monday2];
    TotalCount = values.reduce(function(e1, e2) { return e1 + e2; });
    document.getElementById('totalCount').innerHTML = TotalCount;
    drawChart(values,"#chart",100) // You can adjust the margin between each bar by changing 10 to whatever you like
}, function(err) {
  console.log(err);
});

drawChart(values,"#chart",100) // You can adjust the margin between each bar by changing 10 to whatever you like

function drawChart(data,selector,padding){
  var max = Math.max.apply(Math, data);
	var chart = document.querySelector(selector);
	var barwidth = ((chart.offsetWidth-((data.length-1)*padding)-(data.length)*10)/data.length);
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
