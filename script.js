// Problem 1
// Create a function which returns true if all elements of a given array are bigger then 5
// Note: Please use loop and higher order functions.
// function isBiggerThan5(arr){
//  return  arr.some(element => element > 5)
// }
// isBiggerThan5([1,2,3,4]);

//problem 2
// Create a function which returns true if any element of a given array is less then a given number
// `isLessThan([1,2,3,4],2) // true
// isLessThan([10,20,60],10) // false`
// Note: Please use loop and higher order functions (some).
// const isLessThan = (array, num) => {
//    return array.some(item => item < num)
// }
// isLessThan([1,2,3,4],2)
// isLessThan([10,20,60],10) 

//problem 3
// Create a function which returns last index of an item from a given array.
// Notes:
// Please use lastIndexOf or loop
// `lastIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // 2
// lastIndexOf([1,1,2,3,1,3], 1) //` 
// function lastIndexOf(arr, item){
  // indexOf
  // let lastInd = arr.lastIndexOf(item)
  // return lastInd

  // //for loop and splice
  // console.log(item)
  // let index = arr.forEach(function(el, i){
  //     if(el === item){
  //       console.log(i, el)
  //       return i;
  //     }
  // })
  // console.log(index,'test')
  // return index;   
// }
// lastIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple")
// lastIndexOf([1,1,2,3,1,3], 1)

//problem 4
//Create a function which returns all indexes of an item from a given array.
// Notes:
// Please use loop
// `allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // [0,2]
// allIndexOf([1,1,2,3,1,3], 1) // [0,1,4]`
// function allIndexOf(arr, item){
//   let allInd = [];
//   let filtered =  arr.filter(function(el, index){
//     if (el === item){
//       allInd.push(index)
//     }
//   })
//   return allInd

// }
// allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple")
// allIndexOf([1,1,2,3,1,3], 1)

//problem 5
// Create a function which adds a postfix to a given array items.
// Notes:
// Please use map or loop
// `addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")` 
// `// ["Apple+", "Orange+", "Apple+", "Mango+"]`
// function addPostfix(arr, str){
//   let newArr = [] 
//   arr.map(function(element){
//   newArr.push(element+str)
//     })
//   return newArr
// }
// addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")

//problem 6
// Create a function which adds postfix between array items and convert to a string.
// `addPostfixMiddle(["Apple", "Orange", "Kiwi"], "and")` 
// `// "Apple and Orange and Kiwi"`
// function addPostfixMiddle(arr,postfix){
//   return arr.join(` ${postfix} `)
// }
// addPostfixMiddle(["Apple", "Orange", "Kiwi"], "and")

//problem 7
// Create a function which finds index of a given text inside a given string in a given string, "bsdabdabcabd"
// `findIndex("bsdabdabcabd", "abc") // 6
// findIndex("131231234312", "1231") // 2`
// function findIndex(str, text){
//   return str.indexOf(text)
// }
// findIndex("131231234312", "1231")
// findIndex("bsdabdabcabd", "abc")

//problem 8
// findIndexAll
// Find all indexes. See previous task a6 findIndex
// `findIndexAll("1231244", "12") // [0,3]`
// function findIndexAll(str, substr) {
//   // your code here
//   let result = [];
//   let idx = str.indexOf(substr)
//   while (idx !== -1) {
//     result.push(idx);
//     idx = str.indexOf(substr, idx+1);
//   }
//   return result;
// }

// findIndexAll("1231244", "12")

//problem 9
// Create a function which finds how many item inside a given array.
// Note: You can use loop
// `countItem([1,2,4,5,8,5,1,5], 5) // 3`
// function countItem(arr, item){
//   let count = 0;
//   for(let el of arr){
//     if(el === item){
//       count += 1
//     }
//   }
//   return count
// }
// countItem([1,2,4,5,8,5,1,5], 5)

//problem 10
// Create a function which finds sum of all elements from a given array
// Note: Please use reduce, loop
// `sumAll([1,2,3,4]) // 10`
// function sumAll(arr){
//   const reducer = (prevVal, curVal) => prevVal + curVal
//   return arr.reduce(reducer)
// }
// sumAll([1,2,3,4])

//problem 11
// Create a function which returns sum of all numbers from a given array. [1,{}, null,2] => 3
// `sumAllNums([1,{}, null,2]) // 3`
// `sumAllNums(["1",NaN, null,2]) // 2`
// function sumAllNums(arr){
//   let sum = 0;
//   for(let el of arr){
//     if(typeof el === 'number' &&el === NaN ){
      
//       sum+= el;
//       // console.log(sum)
//     } 
//   }
//   return sum
// }
// sumAllNums([1,{}, null,2])
// sumAllNums(["1",NaN, null,2])

// typeof obj === 'object' && obj !== null && !Array.isArray(obj)

//problem 12
// Create a function which returns sum of all numbers or convertable to numbers from a given array.
// NOTE: use **reduce, forEach, loop**
// `sumAllConvertNums([1,{}, null,'1','3']) // 5`
// function sumAllConvertNums(array){
//   array.reduce((acc, el) => {
//     if(el !== 'number'){
//       let convertToNum = Number(el)
//       console.log(convertToNum)
      
//     }
//   }, 0)
// }
// sumAllConvertNums([1,{}, null,'1','3'])

//problem 13
// Create a function to filter all chars which are not equal to a given char from an arrays. ['a','b','A','c'], 'a' => ['b','c']
// NOTE: use reduce, filter, loop
// `filterChar(['a','b','A','c'], 'a') // ['b','c']`
// function filterChar(arr, str){
//   let result = [];
//   arr.filter(element => {
//     let lowerCaseEl = element.toLowerCase()
//     if(lowerCaseEl !== str){
//       result.push(element)
//     }
//   })
//   return result
// }
// filterChar(['a','b','A','c'], 'a') 

//problem 14
// Create a function to get 3 items starting from a given item.
// NOTE: use **splice, slice, loop**
// `getItems(["Banana", "Orange", "Lemon", "Apple", "Mango"], "Orange", 3) / ["Orange", "Lemon", "Apple"]`
// function getItems(arr, str, num){
//   for(let i=0; i < arr.length; i++){
//     if(arr[i] === str){
//       let spliced = arr.splice(i, num)
//       return spliced
//     }
//   }
// }
// getItems(["Banana", "Orange", "Lemon", "Apple", "Mango"], "Orange", 3)

//problem 15
// Create a function to sort a given string "gtdebca";
// NOTE: use **sort;**
// `sortStr("gtdebca") // "abcdegt"
// sortStr("seattle") // "aeelstt"`
// function sortStr(str){
//   return str.split('').sort().join('')
// }
// sortStr("gtdebca") 

//problem 16
// Create a function to sort numbers in a given array [20, 18, 10, 5];
// `sortNums([20, 18, 10, 5]) // [5, 10, 18, 20]
// sortNums([5,1,0-4]) // [-4,0,1,5]`
// function sortNums(arr){
//   numArray = arr.sort((a, b) => a - b);
 
//   console.log(numArray)
// }
// sortNums([20, 18, 10, 5])

//problem 17
// Create a function to remove 2 items starting from a index of a given item and add a new item.
// `replace(["Banana", "Orange", "Apple", "Mango"], "Orange", 2, "Melon") // ["Banana", "Melon", "Mango"]
// replace([5,1,0-4], 1, 2, 9) // [5,9,-4]`

// function replace(arr, item, removeCount, value ) {
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === item){
//       arr.splice(i, removeCount, value)
//       return arr
//     }
//   }
// }
// replace(["Banana", "Orange", "Apple", "Mango"], "Orange", 2, "Melon")
// replace([5,1,0,-4], 1, 2, 9) 

//problem 18
// Create a function to replace all given items into a new item.
// `replace(["Banana", "Orange", "Mango", "Orange"],"Orange", "Melon") // ["Banana", "Melon", "Mango", "Melon"]
// replace([5,1,1-4], 1, 2 ) // [5,2,2,-4]`
// function replace(arr, item, value){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === item){
//       arr.splice(i, item, value)
//     }
//   }
//       console.log(arr)
// }
// replace(["Banana", "Orange", "Mango", "Orange"],"Orange", "Melon")

// //problem 19
// Create a function to add a new after a given item's index. With and without mutation.
// `add(["Banana", "Orange", "Mango"], "Orange", "Melon") // ["Banana", "Orange", "Melon", "Mango"]
// add([5,1,1-4], 1, 2 ) // [5,1,2,1,-4]`
// function add(arr, item1, item2){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === item1){
//       arr.slice(i, 0, item2)
//       console.log(arr)
//     }
//   }
// }
// add(["Banana", "Orange", "Mango"], "Orange", "Melon")

//problem 20
// Create a function to merge all given arrays into a array.
// *Note: we don't know how many parameters are there. *Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// `merge(["Banana", "Orange", "Mango"], ["Orange", "Melon"]) // ["Banana", "Orange", "Mango","Orange", "Melon"]`
// function merge(arr1, arr2){
//   let newArr = arr1.concat(arr2)
//   console.log( newArr)
// }
// merge(["Banana", "Orange", "Mango"], ["Orange", "Melon"])

// //problem 21
// Create a function to merge all given arrays into a array.
// *Note: we don't know how many parameters
// `merge([1], [2],[3,4],[5]) // [1,2,3,4,5]`
// function merge(...arr){
 
// }
// merge([1], [2],[3,4],[5])

