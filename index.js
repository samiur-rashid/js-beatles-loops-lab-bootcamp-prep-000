function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

function johnLennonFacts(facts) {
  var i = 0
  var newFacts = []
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  do {
    array[number].push("I love the Beatles!");
    number++;
  } while (number < 15)
}
