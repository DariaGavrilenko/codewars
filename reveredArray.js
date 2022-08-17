function digitize(n) {
    var array = [];
    var rev;
    var str;
    if(n>=0){
      str = n.toString()
      for(var i = 0; i<str.length; i++){
       array.push(parseInt(str[i]));
      }
     rev = array.reverse()
     return rev
    }
  }

 // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.