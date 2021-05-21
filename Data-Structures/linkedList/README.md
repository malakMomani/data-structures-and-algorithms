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

<!-- code challenge 06 -->

append -> if the array is empty it will assign the value to the head node , if not will traverse to the end of the array then append the element in the end of the list

insertBefore -> if the array is empty will throw no such value error, if have one item it will insert the newNode in the beginning, if there's a lot , first will check the first item if it's equal to the value , if true will insert in the beginning if not will loop throw the linked list and find the node of the value if exist willl insert before it , if not will throw new error

insert After -> if the array is empty will throw no such value error , if I have item I will looping throw it until I find the node of the value if exist will insert the newNode after it. if not exist will throw no such valur error

![WhiteBoard](/assets/codechalleng06.png)

<!-- code challenge 07 -->
kthFromEnd -> pass k as parameter, and return the kth element start counting from the end of the list, check if the array is empty then will throw new error , if not will check the k , if it's more than list size will throe an error , if it's negative number also will throw an error, if all is okay , wil calculate the rounds to reach the kth in the list by find the difference between the this.size and the k , after looping return the current.value

![WhiteBoard](/assets/kthFromEnd.png)
