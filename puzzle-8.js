function repeatRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}

var steps = 0;
while(steps < 8) {
  down();
  steps = steps + 1;
}

repeatRight(2);

var steps = 0;
while(steps < 8) {
  up();
  steps = steps + 1;
}

repeatRight(2);

var steps = 0;
while(steps < 8) {
  down();
  steps = steps + 1;
}

repeatRight(2);

var steps = 0;
while(steps < 8) {
  up();
  steps = steps + 1;
}

repeatRight(2);

var steps = 0;
while(steps < 8) {
  down();
  steps = steps + 1;
}

right();

function travelDown(total) {
  var count = 0;
    while (count < total) {
      for(steps=0; steps<8; steps = steps + 1) {
    count = count + 1;
    }
  }
}

function travelUp(total) {
  var count = 0;
    while (count < total) {
      for(steps=0; steps<8; steps = steps + 1) {
    count = count + 1;
    }
  }
}
