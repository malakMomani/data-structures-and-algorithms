# ListZip

## Challenge
<!-- Description of the challenge -->
This function take an two linked lists as parameter , and return a new linked list combined with list1 and list2

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The function takes two linked list as parameter ,
check if first list is empty if true will return the second list, and if the second is empty
will return the first list as is.
find the number of loops(rounds) to combine the two list
looping number of rounds and do the combinations process
after that check the rest of elements in two arrays then append them in the end of new list
return Zip linked list

## Solution
<!-- Embedded whiteboard image -->
![Solution](/assets/zip.png)
