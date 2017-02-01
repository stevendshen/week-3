/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});


===================== */


// Count the number of times a value occurs in an array

var myarray = [1, 2, 3, 4, 5, 4, 4, 4, 4, 4, 11, 12, 13, 15];

var count_times = function(some_array, i){
  var count = 0;
  _.each(some_array, function(x){if(x == i){count += 1 ;}});
  console.log(count);
};

count_times(myarray,4);


// Return the first element of each array

var myarray = [[1, 2, 3], [4, 5, 4]];
_.each(myarray, function(anyarray){console.log(anyarray[0]);});
