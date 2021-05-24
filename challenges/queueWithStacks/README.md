# Stack & Queue

PsuedoQueue : data structure use nodes linked to each other use FIFO(First In First Out) and LILO(Last In Last Out) concepts, implements using two stacks

## Challenge

Implement PsuedoQueue using two stacks

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used classes to implement the PsuedoQueue
propreties :

- stack1
- stack2

methods :

- enqueue -> O(1)
- dequeue -> O(n)

## API
<!-- Description of each method publicly available to your Linked List -->
enqueue -> using stack1 push the value into stack1
dequeue -> first of all check if the stack2 is Empty or not, if true keep going and check if the stack2 is Empty if true throw new Error('Empty queue), if not keep going and copy the stack1 into stack2 in reverse order using pop and push, return stack2.pop that will be the first element added into stack1 and it's the concept of queue

![WhiteBoard](assets/stack-with-queue.png)
