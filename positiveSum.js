function positiveSum(arr) {
    let n = 0;
    for(let i =0;i<arr.length;i++){
      if(arr[i]<0||arr.length==0){
        n = n + 0;
      }
      else{
        n = n + arr[i]
      }
    }
    return n
  }
  //You get an array of numbers, return the sum of all of the positives ones.