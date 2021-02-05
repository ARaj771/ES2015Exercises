
// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4])

 [1,2,3,4]

//  Quick Question #2
//  What does the following code return?
 
 [...new Set("referee")].join("")
ref

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

0: {Array(3) => true}
1: {Array(3) => false}

function hasDuplicate(arr){
 return(arr.length !== new Set(arr).size);
}

  
  function vowelCount(str){
      vowel = 'aeiou'
     let loweredStr = str.toLowerCase();
    const vowelMap = new Map();
    for(let char of loweredStr){
      if(vowel.includes(char)){
        if(vowelMap.has(char)){
          vowelMap.set(char, vowelMap.get(char) + 1);
        } else {
          vowelMap.set(char, 1);
        }
      }
    }
    return vowelMap;
  }