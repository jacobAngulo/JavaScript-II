// Create a callback function and invoke the function to test your work. 
// You have been provided an example of a problem and a solution to see how this works 
// with our items array.  Study both the problem and the solution to figure out the rest 
// of the problems.

const items = ['Pencil', 'Notebook', 'Pencil', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, function(param) {
  console.log(param.length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

last (items, function(param) {
  console.log(param[param.length - 1])
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

sumNums(1, 2, (param) => {
  console.log(param)
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y)
}

multiplyNums(2, 3, (a, b) => {
  console.log(a * b);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(cb(item, list));
}

contains('Pencil', items, (inquiry, subject) => {
  for (let i = 0; i < subject.length; i++) {
    if (subject[i] == inquiry) {
      return true;
    } else {
      return false;
    }
  }
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  console.log(cb(array))
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

removeDuplicates(items, (param) => {
  let paramCopy = param.slice();
  for(let i = 0; i < param.length; i++) {
    for (let j = 0; j < param.length; j++) {
      if(i !== j && param[i] == param[j]) {
        paramCopy.splice(i, 1)
      }
    }
  }
  return paramCopy;
})
