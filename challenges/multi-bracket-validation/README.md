# Multi Brackets Validation

Validate whether or not the brackets in the string are balanced

## Challenge

Implement multiBracketsValidator that take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used my built-in stack to implement the multiBracketsValidator function

## API
<!-- Description of each method publicly available to your Linked List -->
multiBracketsValidator => it take a string as input and iterate into this string characters , check if the bracket is an open bracket it will push it into a stack, if not will match it with the one that is in the top of the stack if there is an colsing one then will pop it and continueu otherwise it will return false

![whiteboard](assets/validate.png)
