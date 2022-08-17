function countBy(x, n) {
    let z = [];
    var plus = x;
    z[0] = x;
    for(var i = 1;i<n;i++){
      plus += x;
      z[i]=plus;
    }
  
    return z;
  }
//  Create a function with two arguments that will return an array of the first (n) multiples of (x).
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array (or list in Python, Haskell or Elixir).