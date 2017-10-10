function numbers(){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (var i = 0; i <= 100; i++){
    count += i;
    console.log(i);
  }
//this kicks out the result of the for loop
  return count;
}

function numbers(){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (var i = 0; i <= 100; i++){
//this if is just saying that is wants the numbers that are % by 3
    if (i%3===0){
    count += i;
    }
  }
//this kicks out the result of the for loop
  return count;
}

var stuff = ["apples","bananas","fish","corn"];
shop(stuff);
//shopping is just a placeholder for whatever you are passing through when calling it
function shop(shopping){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (var i = 0; i < shopping.length; i++){
//this if is tells me how many apricots i have
    if ("apricots"===shopping[i]){
    count ++;
    }
  }
//this kicks out the result of the for loop
  return count;
}

var basket = ["apples","bananas","bananas","bananas","fish","corn"];

function shop(shopping,nameOfItem){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (var i = 0; i < shopping.length; i++){
//this if is tells me to look through the basket and pull out the nameOfItem.
    if (nameOfItem===shopping[i]){
    count ++;
  }
  }
//this kicks out the result of the for loop
  return count;
}
//this calls the function and looks for just bananas
shop(basket."bananas");

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
}
