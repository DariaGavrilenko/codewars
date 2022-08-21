function printerError(s) {
    let arr_en = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let n =0;
   for(let i=0;i<s.length;i++){
  if(arr_en.indexOf(s[i])>=0){
     n++;
      }
    }
      return n + "/" + s.length;
  }
  //You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.