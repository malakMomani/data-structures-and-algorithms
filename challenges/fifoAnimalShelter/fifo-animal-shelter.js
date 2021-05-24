'use strict';

const queue = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

class Animal {
  constructor(name ,kind){
    this.name = name;
    this.kind = kind;
  }
}
class AnimalShelter {
  constructor(){
    this.cats = new queue.Queue();
    this.dogs = new queue.Queue();
  }

  enqueue(animal){

    if(animal.kind === 'cat'){
      this.cats.enqueue(animal);
    } else if(animal.kind === 'dog'){
      this.dogs.enqueue(animal);
    } else throw new Error('This not cat or dog');
  }

  dequeue(pref){
    if(pref === 'cat'){
      return this.cats.dequeue();
    } else if(pref === 'dog'){
      return this.dogs.dequeue();
    } else return null;

  }
}

module.exports = {
  Animal: Animal,
  AnimalShelter: AnimalShelter
};
