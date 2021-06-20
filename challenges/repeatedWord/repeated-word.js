'use strict';

function repeatedWord(str){
  let words = str.split(' ');
  let occur = [];

  for(let i = 0 ; i < words.length ;i++) {
    let word = words[i].toLowerCase();

    if(occur.includes(word)) return word;
    else occur.push(word);
  }
  return '';
}

module.exports = repeatedWord;
