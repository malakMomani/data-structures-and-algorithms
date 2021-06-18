# Hashtables

Hash tables allow the storage and retrieval of data in an average time of O(1). At its most basic level, a hash table data structure is just an array. Data is stored into this array at specific indices designated by a hash function. A hash function is a mapping between the set of input data and a set of integers.

## Challenge

implement Hash tabled data structure with some methods

## Approach & Efficiency

I used classes to implement the Hash Table with helping linked list class, add some methods
add -> O(1)
hash -> O(1)
get -> O(n)
contain -> O(n)

## API

add --> it take a key and vlaue pairs, then will hash the key into integer number to mapping it with my array then push it into my array

hash --> it take a string which key and do some operation into it to return an integr number

get --> it take a key and find the value of it

contain --> it take a key and return if it exist in the table or not

Whiteboadrd:
![w](/assets/Hashtable.jpg)
