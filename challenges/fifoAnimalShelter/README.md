# Animal Shelter

holds only dogs and cats. The shelter operates using a first-in, first-out approach.

## Challenge

Implement AnimalShelter class uses FIFO approach, store only dogs and cats

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used my built-in queue to implement the AnimalShelter class
propreties :

- cats queue
- dogs queue

methods :

- enqueue -> O(1)
- dequeue -> O(1)

## API
<!-- Description of each method publicly available to your Linked List -->

nqueue -> if the obj is cat then will enqueue the obj into cats queue, if it's dog will enqueue into dogs queue otherwise throw new Error
dequeue -> if the pref is cat will dequeue from cats queue, if it's dog  will dequeue from dogs queue otherwise will return null

![whiteboard](assets/animalShelter.png)
