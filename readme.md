# List mini katas

Preparing the way for sort and search.

* What is algorithmic thinking?
* What is an algorithm?
* What is a data structure?
* What data structures have you used?
* How are data structures and algorithms related?
* How do you navigate a data structure?

## Mini katas

Write code and unit tests for the functions below.

### Swap first two

Create a function:

  * That takes a list as a parameter.
  * Swap the first and the second entry in the list.
  * And returns the resulting list.

Given a list :

```javascript
['apple', 'pear', 'mango', 'banana'];
```

It should return :

```javascript
['pear', 'apple', 'mango', 'banana'];
```

### Swap first and last

Create a function:

  * That takes a list as a parameter.
  * And swap the first and the last entry in the list.
  * And returns the resulting list.

Given a list :

```javascript
['apple', 'pear', 'mango', 'banana']
```    

It should return :

```javascript
['banana', 'pear', 'mango', 'apple']
```    

### Know they neighbour

Create a function that:

  * takes a list of numbers;
  * loops through the numbers;
  * compares each number with its neighbour to the right;
  * if a number is bigger than its neighbour on the right, it should swap with its neighbour.
  * returns the resulting list.

What is the result of this function? Where does the biggest number ends up?

Use this data :

```javascript
    [5, 19, 7, 17, 6, 1, 3]
```
