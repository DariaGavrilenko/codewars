function reverseWords(str) {
  let newarray = str.split(" ")
    var answer = "";
    for (var i=0;i<newarray.length;i++){
     answer = answer + newarray[i].split('').reverse().join("") + " ";
    }
  answer = answer.substr(0,answer.length-1)  
      return answer;
  }
   
  //Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

