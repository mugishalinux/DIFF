function CircleBar(e){
	$(e).circleProgress({fill: {color:"#00EAFF"}}).on("circle-animation-progress", function(event,progress, stepValue){
		$(this).find("strong").text(String(parseInt(100 * stepValue)) + "%");
	});
}
circleBar(".round")
document.getElementById("demo").innerHTML = 5 + 6;