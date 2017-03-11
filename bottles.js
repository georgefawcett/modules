function calculateBottles (money) {
  // for every 2 empty bottles, 1 bottle
  // for every 4 caps, 1 bottle
  // $2 per bottle to buy


  var newBottles = money / 2;


  var freeFromEmpty = Math.floor(newBottles / 2);
  var newFreeFromEmpty = freeFromEmpty;


  var freeFromCaps = Math.floor (newBottles / 4);
  var newFreeFromCaps = freeFromCaps;


  while (newFreeFromEmpty > 1) {
    freeFromEmpty += Math.floor(newFreeFromEmpty / 2);
    newFreeFromEmpty = Math.floor(newFreeFromEmpty / 2);
    var leftoverBottles = newFreeFromEmpty % 2;
  }

  while (newFreeFromCaps > 3) {
    freeFromCaps += Math.floor(newFreeFromCaps / 4);
    newFreeFromCaps = Math.floor(newFreeFromCaps / 4);
    var leftoverCaps = newFreeFromCaps % 4;
  }

if (!leftoverBottles) {
  var leftoverBottles = 0;
}

if (!leftoverCaps) {
  var leftoverCaps = 0;
}

var totalBottles = newBottles + freeFromEmpty + freeFromCaps;
console.log(`${totalBottles} total bottles possible (${newBottles} purchased, ${freeFromEmpty} through bottle recycling, ${freeFromCaps} through cap recycling).`);
console.log(`${leftoverBottles} bottles left over.`);
console.log(`${leftoverCaps} caps left over.`);
}

calculateBottles(process.argv[2]);