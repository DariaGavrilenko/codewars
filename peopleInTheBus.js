var number = function(busStops){
    let n = 0;
   for(let i = 0;i<busStops.length;i++){
    n = n + busStops[i][0] - busStops[i][1];
   }
    return n;
  }

  //You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

//Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D