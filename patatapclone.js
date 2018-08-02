var path = new Path()
path.strokeColor = 'white'
var start = new Point(0, 100)
path.moveTo(start)
path.lineTo(start + [500, -50])

var myCircle = new Path.Circle(new Point(100, 70), 50)
myCircle.fillColor = 'pink'