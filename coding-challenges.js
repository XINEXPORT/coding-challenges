//WRITE A FUNCTION THAT CHECKS IF A WORD IS A PALINDROME


//we need to split the word into in array with .split()
//then we get [n,o,o,n]
//then we need loop through the array
//


//we need to take the word and split it into an array
//we need to push the 

// function pali() {
//   console.log(pali);
//   let backArr = []; //reverse copy
//   for (let i = 0; i <a.length-1; i++){
//     paliArr[i].push = backArr
//   }
//   return pali()
// }

// pali("noon")

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


comparing the end to the beginning
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
      let vowelCount = 0
      word = word.toLowerCase()
      let vowelArr = ["a", "e", "i", "o", "u"]
      for (let i = 0; i<word.length; i++){
        if (vowelArr.includes(word[i]){
            vowelCount++
            }
      }
      return vowelCount>word.length/2
    }

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







