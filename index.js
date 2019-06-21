// add solution here
function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var whoPlays = []
  for (let i = 0; i < 4; i++) {
    whoPlays.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return whoPlays
}

function johnLennonFacts (arrayFacts) {
  var superFacts = [];
  let i = 0;
    while (arrayFacts.length > i) {
      superFacts.push(`${arrayFacts[i]}!!!`);
      i++;
}
  return superFacts
}


function iLoveTheBeatles (number) {
  var emptyArray = [];
  var reps = number - 15;
  do {
  emptyArray.push(`I love the Beatles!`);
} while (reps > 0);
}
