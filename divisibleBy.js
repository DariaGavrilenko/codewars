function divisibleBy(numbers, divisor){
    let answ = []
let arr = numbers.map((n)=>n%divisor)
for(let i = 0;i<arr.length;i++){
  if(arr[i]==0){
    answ.push(numbers[i])
  }
}
   return answ
}
//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
//First argument is an array of numbers and the second is the divisor.