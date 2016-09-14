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

right();
repeatDown(6);
repeatRight(2);
repeatUp(6);
repeatRight(6);
repeatDown(9);
repeatLeft(4);
repeatUp(5);
left();
left();
repeatDown(5);
repeatLeft(3);
repeatUp(9);
