confirm("do you really want to play this game and kill a dragon?"){
  var slaying = true;
  var youHit = Math.floor(Math.random() * 2);
  var damageThisRound = Math.floor(Math.random()*5 + 1);
  var totaldamage = 0;
  while(slaying) {
        if(youHit = true)
       {
          console.log("You hit the dragon!");
          totalDamage += damageThisRound;
          if(totalDamage >= 4) {
              console.log("You have killed the dragon!");
              slaying = false;
           }
           else {
             youHit = Math.floor(Math.random() * 2);
          }
     }
     else {
         console.log("The dragon incinerated you!");
     }
      slaying = false;
  }
}
else {
  console.log("Then go away.");
}

