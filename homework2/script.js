
function addToList(list, bottleSentence) {
  let newSentenceLi = document.createElement('li')
  let newSentenceText = document.createTextNode(bottleSentence)
  newSentenceLi.appendChild(newSentenceText)
  list.appendChild(newSentenceLi)
}

window.onload = function() {
  let sentenceList = document.getElementById('bottle-list')

  for (num = 100; num > 2; num--) {
  bottleSentence = (`${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottles of beer on the wall.`);
  addToList(sentenceList, bottleSentence)      
  }

  if  (num = 2)  { 
    bottleSentence = (num + ' bottles of beer on the wall, ' + num + ' bottles of beer. Take one down and pass it around, ' + (num-1) + ' bottle of beer on the wall.');
    addToList(sentenceList, bottleSentence)
  }   

  if  (num = 1)  { 
    bottleSentence = (num + ' bottle of beer on the wall, ' + num + ' bottle of beer. Take one down and pass it around, ' + (num-1) + ' bottles of beer on the wall.');
    addToList(sentenceList, bottleSentence)
  }
}

