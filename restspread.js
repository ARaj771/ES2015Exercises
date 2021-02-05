//  Given  this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
// Refactor it to use the rest operator & an arrow function:


const filterOutOdds = (...nums) => nums.filter((num) =>  num % 2 === 0 );


// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1


function findMin(...args){
    if(args.length === 0) return undefined;
   return  args.reduce ((min,value) => value < min ? value:min);

    }

//     mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const  mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

// function doubleAndReturnArgs(arr,...args){
//       double = (args.map((v) => 2 * v))
//       return [...arr,...double];
// }


const doubleAndReturnArgs= (arr,...args)=>[...arr,...args.map((v) => 2 * v)];
      
     

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let ind = Math.floor(Math.random() * items.length);
    return[...items.slice(0,ind), ... items.slice(idx + 1)];

}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1,...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>{
    return {...obj,[key]:val};

}


/** Return a new object with a key removed. */

const removeKey = (obj, key)  => {
    obj1 = {...obj}
    delete obj1[key];
    return obj1;

}

/** Combine two objects and return a new object. */


const combine = (obj1, obj2) =>{
    return {...obj1,...obj2};

}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key]:val});
;
