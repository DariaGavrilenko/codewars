function findShort(s){
    let arr = s.split(' ');
  let n = 100;
      for(let i = 0;i<arr.length;i++){
        if(n>arr[i].length){
          n = arr[i].length;
        }
      }
       return n;
  }
 // Simple, given a string of words, return the length of the shortest word(s).

  // String will never be empty and you do not need to account for different data types.  