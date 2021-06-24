'use strict';

function uniqueString(str) {
  let charactersAppear = [];

  let characters = str.split('');

  for (let i = 0; i < characters.length; i++) {
    let char = characters[i].toLowerCase();
    if(char === ' ') continue;

    if (charactersAppear.includes(char)) return false;
    else charactersAppear.push(char);
  }

  return true;
}

module.exports = uniqueString;
