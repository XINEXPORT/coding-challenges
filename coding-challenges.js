//WRITE A FUNCTION THAT CHECKS IF A WORD IS A PALINDROME

//we need to split the word into in array with .split()
//then we get [n,o,o,n]
//then we need loop through the array

//we need to take the word and split it into an array
//we need to push the 

function pali() {
  console.log(pali);
  let backArr = []; //reverse copy
  for (let i = 0; i <a.length-1; i++){
    paliArr[i].push = backArr
  }
  return pali()
}

pali("noon")

// const isPali = stri =>{
//   let arr = str.split("")
//   let revArr = arr.reverse()
//   let revStr = revArr.join("")
// }

// const isPali = str => {
//   let reverseStr= ""
//   for (let i=str.length-1; i>=0; i--){
//     reverseStr += str[i]
//   }
//   return str ===reverseStr
// }
// str("noon")


//comparing the end to the beginning
const isPali = str => {
  let arr = str.split("")
  while(arr.length>0){
    if (arr[0]===arr[arr.length-1]){
      arr.pop()
      arr.shift()
    } else{
      return false
    }
  }
  return true
}

///////////////////////////////////////////////////////
//WRITE A FUNCTION THAT RETURNS TRUE IF A WORD CONTAINS MORE THAN HALF THE AMOUNT OF VOWELS
//RETURN FALSE IS THE WORD CONTAINS LESS THAN HALF THE AMOUNT 

const hasMoreVowels = (word) => {
    let wordArr = str.split("")
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i=0; i < wordArr.length; i++){
      if (wordArr.includes(vowel))
    }
  }
  
  hasMoreVowels("word")
    
    // you need to turn the string into an array
    // you need to define the vowels in a variable
    // loop over the word array 
    // you need to check if the vowel exists in the word array
    // you need to push the vowel itself in a vowel count array
    // you count how many vowels are in the vowel count array
    // you need to compare the vowel count to the length of the of the word array
    // if the vowel count array < the original word array, return false
    // if the vowel count array > the original word array /2, return true
    
    const hasMore = word =>{
      let vowelCount = 0;
      word = word.toLowerCase();
      let vowelArr = ["a", "e", "i", "o", "u"]
      for (let i = 0; i<word.length; i++){
        if (vowelArr.includes(word[i])){
            vowelCount++
            }
      }
      return vowelCount>word.length/2;
    };

///////////////////////////////////////////////////////
//add to Zero
//give an array of numbers
//console.log true if any 2 numbers add to zero
//othwerwise console.log false

//you need to create an addtoZero function
//you need an empty array
//you need to loop over the array
// then you need to perform another loop to sum the pairs to see if any of them add up to 0
//then you need an if statement to console.log true if any pairs add up to zero
//then you need an else statement to return false for the remaining scenarios
//O(n^2)

const addtoZero =(arr)=>{
  for (let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if (arr[i] + arr[j]===0){
      return true;
  }
  }
  }
return false
}
    
addtoZero([4,4,0,0,0,-4])

///////////////////////////////////////////////////////
//Given a word
//reutrn true if that word contains only unique characters
//return false otherwise

//You need a function
//you need to split the string into an array
//you need to loop over the array
//you need a nested loop
//in the nested loop you need to check if any value matches
//return false if they do
//return true if they dont
//O(n^2)

const hasUniqueChar = str =>{
  let arr = str.split("")
  for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if (arr[i]===arr[j]){
        return false
      }
    }
  }
  return true;
}

hasUniqueChar('bob');

//Set ([...str]) is used to split strings into each individual character
//["B,"o","b"]
//Set {"B,"o","b"}
//Set {"B,"o","b"} is actualy a key value pair of each character, this is why Set is constant
//Set removes duplicate key value pairs, all characters need to be unique bc it has object properties
//.split is usuaully used to split array or data at differrent indexes

const hasUnique = str =>{
  let strSet = new Set([...str])
  
  return strSet.size ===str.length
}

//OR

const hasUnique = str=>{new Set([...str].size===str.length)}

///////////////////////////////////////////////////////
// create a function
// we need an Array
// this array will have integers
// array will be all evens with 1 odd Number
// or the other way around
// function should find the odd number out

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}

if (even.length === 1) {
  return even[0];
} else {
  return odd[0];
};

oddOneOut([2,4,64,11,8])
oddOneOut([3,7,21,4,93,73,49])

///////////////////////////////////

//HOW TO USE SORT
//LOOK AT W3 SCHOOLS EXPLANATION OF SORTING 
let arr = [15,12,13,11,9,6,3,5,7,2,1,8,10,14,4]

console.log(arr.sort())

console.log(arr.sort((a,b) => {
    console.log(`${a} - ${b} = ${a - b}`)
    return a - b
}))

let shirts = "s,s,m,s,m,xs,xl,s,m,l,l,l,l,s,m,m,m,s,l,s,s,l,l,l,s,s,xs,xl"

const sorter = (str) => {
    let sortingPattern = {
        "xs": 0,
        "s": 1,
        "m": 2,
        "l": 3,
        'xl':4
    }

    let arr = str.split(",")
    let sorted = arr.sort((a,b) => sortingPattern[a] - sortingPattern[b])

    return sorted.join('')
}

console.log(sorter(shirts))

////////////////////////////
// Write a function called printDigits that takes in arg called num
// When given an Integer, the function should print console.log 
// each digit in reverse order, starting with the ones place
// DO NOT TURN THE NUMBER INTO A STRING AND REVERSE IT 
// Solve the problem using math
// (Hint: look up while loops, dont forget about the % operator)

// a loop that runs while we still have digits to print
// an operation that tells us what the last digit is
// reduce the number by 1 digit
// keep running until no digits left to print

// const printDigits = num =>{
//   let arr = str.split("")
//   let  i = 0;
//   let text = ""
  
//   while (arr[i] % 10 ){
//       text += arr[i]
//       i++
//          }
// console.log(printDigits())
// }

// printDigits(314)

// ["3", "1", "4"]

const printDigits = num =>{
  let arr = str.split("")
  let newArr = []
  for(let i = 0; i<arr.length; i++){
    if(arr[i] % 10)
  }
}

//(314)
//["3", "1", "4"]
//  3 % 10 = .3
//  1 % 10 = .1
// 4 % 10 = .4

const printDigits = num =>{
  //while our number still has value
  while (num){
    let digit  = num % 10
    console.log(digit)
    //this turn 314 into 310
    num -=digit 
    //this turns 310 into 31
    num /= 10
  }
}

//WRITE A FUNCTION
//ACCEPTS ARRAY OF 1- INTEGERS
//BETWEEN 0 AND 9
//FUNCTION SHOULD RETURN A STRING OF THOSE NUMBERS
//IN A PHONE NUMBER FORMAT

//O(1)
const phone = arr =>{
  return `(${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]})`
}

//AMERICAN PHONE
const phone = arr =>{
  let template = "(xxx) xxx-xxxx"

  for (i=0; i<arr.length; i++){
    template = template.replace("x", arr[i])
  }
  return template
}

//.replace and .replaceAll
//replaces the first instance of the array
let str = 'xx xx xx xx'
let arr = [1,2,3,4,5,6,7,8]

for (let i=0; i<arr.length; i++){
  str = str.replace('x', arr[i])
}

//replaces all the instances of x with 1
let str = 'xx xx xx xx'
let arr = [1,2,3,4,5,6,7,8]

for (let i=0; i<arr.length; i++){
  str = str.replaceAll('x', arr[i])
}

//.replace broken down in a nest loop
const phone = (arr)=>{
  let template = '(xxx) xxx-xxxx'
  let phoneNum = ''

  for (let i = 0; i < arr.length; i++){
    for (let j = phoneNum.length; j < template.length; j++){
      if (template[j] === 'x'){
          phoneNum += arr[i]
          break;
      } else{
        phoneNum += template[j]
      }
    }
  }
  return phoneNum
}

phone ([1,2,3,4,5,6,7,8,9,10])

///////////////////////////////////////

// const decode = (str) = {
//   let arr = str.split("")
//   let newArr = []
//   for (let i=0; i<-arr.length; i++){
//     if (Math.isInteger(+arr[i])){
//       i+= +arr[i]
//     } else{
//     newArr.push[arr[i]]
//     }
//   }
//   return newArr.join()
// }

// decode("01h33e44y")

const decode = (str) => {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(+str[i])) {
      i += +str[i];
    } else{
      answer += str[i]
    }
  }
  return answer;
};

decode ('0h2xce5ngbdry')
decode ('2bna0plmp20sl0e')


///////////////////////////
// Write a function called best that return the max profit possible for buying and selling stock
// The best function will be given an array of stock prices in the order they happened throughout the day
// It should return the max profit stock for that day
//The following prices, our best option would have been to buy the stock at $10 and sell it at $22
// the profit difference is 12
//best ([15,10,20,22,1,9])

//you need a function
//you need 3 place holder arrays
  //lowest
  //highest
  //diff = profit 
//you need a loop
//you need to push the highest value in the loop
//you need to push the lowest value in the loop
//you need to only push values next to each other

// const best = arr =>{
//   let low = []
//   let max = []
//   let diff = []
  
//   for (let i; i<arr.length; i++){
//     for (let j; j<arr.length; j++){
//     if (Number.MIN_VALUE(arr[i])){
//        arr[i].push = low
//     } else if (
//          Number.MAX_VALUE(arr[i])){
//          arr[i].push = max
//        }
//       }
//     }
//     return max-low
//   }

// best ([1,2,3,4,5])


const best = arr =>{
  //keep track of the lowest price of the day
  //compare profits aka difference
  //loop through the prices
  let low = arr[0]
  let prof = 0
  
  for (let i; i<arr.length; i++){
    if(arr[i] < lowest){
      lowest = arr[i]
    }
    let difference = arr[i]-lowest
    
    if(difference>profit){
      profit = difference
    }
  }
  
  return profit
}

console.log(best([15,10,20,22,1,9]))
console.log(best([1,2,3,4,5]))
console.log(best([5,4,3,2,1]))







