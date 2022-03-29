'use strict';

// Array

// 1. Declarattion

const arr1 = new Array();
const arr2 = [1, 2];

// Index position

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

console.clear();
// Looping over an array
// print all fruits

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
};

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit, index) => console.log(fruit));

console.clear();
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// 
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// shift, unshift are slower than pop, push!!
// splice: remove an item by index position

console.clear();
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'watermelon', 'tangerine');
console.log(fruits);

