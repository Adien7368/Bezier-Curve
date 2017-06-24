window.onload = function(){
var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var p0 = {x:300,y:300};
	var p1 = {x:600,y:300};


	function t(event){
	context.clearRect(0,0,width,height);	
	context.beginPath();
	var newCpx = 2*event.clientX - (p0.x+p1.x)/2,
		newCpy = 2*event.clientY - (p0.x+p1.y)/2;
	context.moveTo(p0.x,p0.y);

	for(var i=0; i<1000; ++i){
	var t = i/1000.0;
	var cx =((p1.x - newCpx)*t + newCpx  -  (newCpx - p0.x)*t - p0.x)*t + (newCpx - p0.x)*t + p0.x;  
	var cy =((p1.y - newCpy)*t + newCpy  -  (newCpy - p0.y)*t - p0.y)*t + (newCpy - p0.y)*t + p0.y;  
	context.lineTo(cx,cy);
	}
	context.stroke();
	}

	document.addEventListener("mousemove", t);
};