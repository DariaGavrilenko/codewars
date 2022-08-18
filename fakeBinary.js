function fakeBin(x){
  let answer = "";
  let n = 0;
for(var i = 0; i<x.length;i++){
  if(x[i]>=5){
    n = 1
  }
  else{
    n = 0
  }
  answer = answer + n
}
  return answer
}

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.