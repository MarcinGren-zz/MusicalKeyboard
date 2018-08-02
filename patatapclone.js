paper.install(window);
window.onload = function() {
	// Setup directly from canvas id:
	paper.setup('myCanvas');
	var path = new paper.Path();
	path.strokeColor = 'black';
	var start = new paper.Point(100, 100);
	path.moveTo(start);
	path.lineTo(start.add([ 200, -50 ]));
	view.draw();
}