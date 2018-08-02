var listOfCircles = []

function onKeyDown(e) {
	console.log(e.key)

	var maxPoint = new Point(view.size.width, view.size.height)
	var randomPlace = Point.random()
	var newPoint = maxPoint * randomPlace
	var newCircle = new Path.Circle(newPoint, 10)
	newCircle.fillColor = 'pink'
	listOfCircles.push(newCircle)

}

function onFrame(e) {
	listOfCircles.forEach(function (elem) {
		elem.fillColor.hue += 1
	})
}