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
  var i = 0;

	function incrementVariable() {
		i = i + 1;
    return i;
	}

  var emptyArray = [];
  do {
  emptyArray.push(`I love the Beatles!`);
} while (incrementVariable(number) <= 15);
}
