String.prototype.toJadenCase = function () {
    var str = this;  
    let up = str.split(' ');
    for(let i = 0; i<up.length;i++){
     up[i] = up[i][0].toUpperCase() + up[i].substring(1)
    }  
      return  up.join(" ")
    };
    //Your task is to convert strings to how they would be written by Jaden Smith. 
    //The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

