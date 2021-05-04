# Insert value and shift an Array

## Challenge
<!-- Description of the challenge -->
This function take an array and value, then search about the value by Binary search approch then return the index.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The function takes an array as argument and the value to search about it
define the low and high and middle index by default values
looping unless the low not equal to the high
find the middle in current level
check if element of middle is equal to the value that we wanted or not if true , will return the index
check if the element of the low is my target value if true return it
check if the element of the low high is my target value if true return it
check if element of the middle is greater than the targeted value then will modify the high to be less else will modify the low to higher
repeat this process until return something
if the loop is end without returning then the element not exist and will return -1


## Solution
<!-- Embedded whiteboard image -->
![Solution](/assets/array-binary-search.png)
