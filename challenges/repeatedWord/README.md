# repeatedWord

## Challenge
<!-- Description of the challenge -->
This function take a lengthy string as parameter and return the first word to occur more than once in provided string.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
declare function called repeatedWord that takes a lengthy as a parameter
split the string into array of words and save it in a new array called words
declare empty array to save occur words in the string
loop throw the array of words and in each iteration take the word in i index and check if it's include in the occur array if its yes return that word if not push it to occur array
if there's no repeated word return empty string

## Solution
<!-- Embedded whiteboard image -->
![Solution](/assets/repeated-word.jpg)
