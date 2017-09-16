function numbers(){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (i = 0; i <= 100; i++){
    count += i;
    console.log(i);
  }
//this kicks out the result of the for loop
  return count;
}

function numbers(){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (i = 0; i <= 100; i++){
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
//shopping is just a caseholder for whatever you are passing through when calling it
function shop(shopping){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (i = 0; i < shopping.length; i++){
//this if is tells me how many apricots i have
    if ("apricots"===shopping[i]){
    count ++;
    }
  }
//this kicks out the result of the for loop
  return count;
}

var baskest = ["apples","bananas","fish","corn"], "bananas"));

function shop(shopping,nameOfItem){
//if the var count is in the for loop then it will get put back to zero
  var count = 0;
  for (i = 0; i < shopping.length; i++){
//this if is tells me to look through the basket and pull out the nameOfItem.
    if (nameOfItem===shopping[i]){
    count ++;
  }
  }
//this kicks out the result of the for loop
  return count;
}
