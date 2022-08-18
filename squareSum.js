function squareSum(numbers){
let sum = 0;
for(var i = 0;i<numbers.length;i++){
sum = sum + Math.pow(numbers[i],2)
}
return sum
}

squareSum([0,3,4,5]) 

//Complete the square sum functionn so that it squares each number passed into it and then sums the results together.