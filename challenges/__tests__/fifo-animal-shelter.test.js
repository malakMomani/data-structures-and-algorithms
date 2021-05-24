'use strict';

const AnimalShelter = require('../fifoAnimalShelter/fifo-animal-shelter.js');

const animalShelter = new AnimalShelter.AnimalShelter();

describe('Test AnimalShelter Class',()=>{

  it('enqueue inside AnimalShelter dogs or cats',()=>{
    animalShelter.enqueue(new AnimalShelter.Animal('frankie','cat'));
    animalShelter.enqueue(new AnimalShelter.Animal('serena','cat'));
    animalShelter.enqueue(new AnimalShelter.Animal('poppy', 'dog'));

    expect(animalShelter.cats.size).toEqual(2);
    expect(animalShelter.dogs.size).toEqual(1);
  });
  it('throw error if the animal not dog either cat',()=>{
    expect(()=>{
      animalShelter.enqueue(new AnimalShelter.Animal('kokki','bird'));
    }).toThrow();
  });

  it('dequeue from AnimalShelter dogs or cats',()=>{
    expect(animalShelter.dequeue('cat').value).toMatchObject({name:'frankie', kind:'cat'});
    expect(animalShelter.cats.size).toEqual(1);
    expect(animalShelter.dequeue('dog').value).toMatchObject({name:'poppy', kind:'dog'});
    expect(animalShelter.dogs.size).toEqual(0);

  });
  it('return null if the pref is not cat either dog',()=>{
    expect(animalShelter.dequeue('bird')).toBeNull();
  });

});
