# Singly Linked List

It's a data structure that contain nodes linked to each other by reference.

## Challenge

Implement linked list data structure, which the user can insert into the list,
search about element if exist or not and print the elements in string format.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used classes to implement the linked list , add some methods
insert -> O(n)
includes -> O(n)
toString -> O(n)

## API
<!-- Description of each method publicly available to your Linked List -->
insert -> if the array is empty it will assign the value to the head node , if not will traverse to the end of the array then append the element in the end of the list

includes -> will loop throw the nodes in the list and check if the value exist in any node and return true if not will return false

toString -> will loop throw the nodes and take the value to print it in string in specific format
