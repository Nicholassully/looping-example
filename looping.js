//To run this file and see output to the terminal run node looping.js

function numbersLoop(){
//if the let count is in the for loop then it will get put back to zero
  let count = 0;
  for (let i = 0; i <= 100; i++){
    count += i;
    console.log(i);
  }
//this kicks out the result of the for loop
  return count;
};

console.log(numbersLoop());

function numbersLoopForMulitplesOfThree(){
//if the let count is in the for loop then it will get put back to zero
  let count = 0;
  for (let i = 0; i <= 100; i++){
//this if is just saying that is wants the numbers that are % by 3
    if (i%3 === 0){
    count += i;
    }
  }
//this kicks out the result of the for loop
  return count;
};

console.log(numbersLoopForMulitplesOfThree());

const stuff = ["apples", "bananas", "fish", "corn"];

//shopping is just a placeholder for whatever you are passing through when calling it
function shopForApricots(shopping){
//if the let count is in the for loop then it will get put back to zero
  let count = 0;
  for (let i = 0; i < shopping.length; i++){
//this if is tells me how many apricots i have
    if ("apricots" === shopping[i]){
    count ++;
    }
  }
//this kicks out the result of the for loop
  return count;
};

console.log(shopForApricots(stuff));

const basket = ["apples","bananas","bananas","bananas","fish","corn"];

function shopForBannas(shopping, nameOfItem){
//if the let count is in the for loop then it will get put back to zero
  let count = 0;
  for (let i = 0; i < shopping.length; i++){
//this if is tells me to look through the basket and pull out the nameOfItem.
    if (nameOfItem === shopping[i]){
    count ++;
    }
  }
//this kicks out the result of the for loop
  return count;
};
//this calls the function and looks for just bananas
console.log(shopForBannas(basket , "bananas"));


const myNumbers = [3,1,5,8,1,9,7,8888,8,4];

// sort the array from lowest to highest
function sort(arr){
  const length = arr.length;
  for(let i = 0; i <length; i++){
    for (let j = i + 1; j<length; j++){
      if (arr[j] > arr[i]){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sort(myNumbers));

const forEachnumbers = [1, 2, 3, 4, 5];

//using a fatArrow instead of a normal function
forEachnumbers.forEach((number) => {
  //number can be named to anything ie fish
    console.log(number);
});

const arrayBeforeBeingSquared = [2, 5, 9];
//map takes in one element of the array in at a time and then acts upon it 
let arrayAfterBeingsquared = arrayBeforeBeingSquared.map((num) => num * num);

console.log(arrayBeforeBeingSquared);
console.log(arrayAfterBeingsquared);


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//filter only returns values that match the condition in the function
const wordsFiltered = words.filter(word => word.length > 6);

console.log(wordsFiltered);

const array1 = [1, 2, 3, 4];
const total = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},2);

console.log(total);
