var listOfCircles = []
var keyDict = {
	a: {color: "#ff00ff", sound: getSound('bubbles')},
	b: {color: "#86b300", sound: getSound('clay')},
	c: {color: "#77f3a7", sound: getSound('confetti')},
	d: {color: "#e723a1", sound: getSound('corona')},
	e: {color: "#aa55cc", sound: getSound('dotted-spiral')},
	f: {color: "#a3a4a5", sound: getSound('flash-1')},
	g: {color: "#f29ed3", sound: getSound('flash-2')},
	h: {color: "#123456", sound: getSound('flash-3')},
	i: {color: "#abcdef", sound: getSound('glimmer')},
	j: {color: "#5a72b7", sound: getSound('moon')},
	k: {color: "#2f0a7c", sound: getSound('pinwheel')},
	l: {color: "#d3d3d3", sound: getSound('piston-1')},
	m: {color: "#2c2c2c", sound: getSound('piston-2')},
	n: {color: "#911991", sound: getSound('piston-3')},
	o: {color: "#e8ffdd", sound: getSound('prism-1')},
	p: {color: "#100fbb", sound: getSound('prism-2')},
	q: {color: "#47a0aa", sound: getSound('prism-3')},
	r: {color: "#fedcba", sound: getSound('splits')},
	s: {color: "#987654", sound: getSound('squiggle')},
	t: {color: "#f10ab4", sound: getSound('strike')},
	u: {color: "#1b4ad9", sound: getSound('suspension')},
	v: {color: "#ffee12", sound: getSound('timer')},
	w: {color: "#f4de1f", sound: getSound('ufo')},
	x: {color: "#a20bbf", sound: getSound('veil')},
	y: {color: "#1e2b6a", sound: getSound('wipe')},
	z: {color: "#9911bb", sound: getSound('zig-zag')}
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