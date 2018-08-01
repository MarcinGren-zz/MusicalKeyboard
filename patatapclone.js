import {Paper} from '../paper/dist/paper-full.js';

// Create a Paper.js Path to draw a line into it:
var path = new paper.Path();
// Give the stroke a color
path.strokeColor = 'black';
var start = new paper.Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, -50 ]);