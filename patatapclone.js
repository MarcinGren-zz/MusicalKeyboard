function onKeyDown(event) {
	console.log(event.key)

	var maxPoint = new Point(view.size.width, view.size.height)
	var randomPlace = Point.random()
	var newPoint = maxPoint * randomPlace
	var newCircle = new Path.Circle(newPoint, 10).fillColor = 'pink'
	
}