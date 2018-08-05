var listOfCircles = []
var keyDict = {
	a: {color: "#ff00ff", sound: getSound('bubbles')},
	b: {color: "#86b300", sound: getSound('clay')}
}

function getSound(fileName) {
	return new Howl({src: ["sounds/" + fileName + ".mp3", "sounds/" + fileName + ".ogg"]})
}
// paper.js cannot parse the below. Weird.
// function getSound(fileName) {
// 	return new Howl({src: [`sounds/${fileName}.mp3`, `sounds/${fileName}.ogg`]})
// }

function onKeyDown(e) {
	console.log(e.key)
	console.log(keyDict[e.key])

	var maxPoint = new Point(view.size.width, view.size.height)
	var randomPlace = Point.random()
	var newPoint = maxPoint * randomPlace
	var newCircle = new Path.Circle(newPoint, 100)
	
	newCircle.fillColor = keyDict[e.key].color
	listOfCircles.push(newCircle)
	keyDict[e.key].sound.play()
}

function onFrame(e) {
	listOfCircles.forEach(function (elem) {
		elem.fillColor.hue += 1
		elem.scale(.95)
	})
}
