function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

function repeatRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}

function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}

function repeatLeft(total) {
  var count = 0;
  while (count < total) {
    left();
    count = count + 1;
  }
}

repeatDown(2);
getColor();
repeatRight(2);
repeatDown(3);
setColor("red");
repeatRight(2);
setColor("blue");
repeatRight(2);
setColor("green");
repeatRight(2);
setColor("yellow");
repeatRight(2);
repeatUp(5);
repeatLeft(5);
repeatDown(4);

//var color = getColor();
//^^^^^^^ HOW TO DEFINE VARIABLES
