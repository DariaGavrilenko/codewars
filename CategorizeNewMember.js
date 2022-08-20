function openOrSenior(data){
    let answer = [];
    array = data;
    for(var i=0;i<array.length;i++){
      let n = array[i];
      if(n[0]>=55 && n[1]>7){
        answer.push('Senior')
      }
      else{
        answer.push('Open')
      }
    }
   return answer;
  }
  //The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.