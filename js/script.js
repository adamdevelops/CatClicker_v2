var count1 = 0;
var count2 = 0;


//Cat 1
var addUp1 = function() {
  count1 += 1;
  document.getElementById("counter1").innerHTML = "This has been clicked " + count1 + " times.";

};


// Attach as a listener
//el.addEventListener("click", function(){modifyText("four")}, false);
document.getElementById("cat1").addEventListener("click", addUp1, false);


//Cat 2
var addUp2 = function() {
  count2 += 1;
  document.getElementById("counter2").innerHTML = "This has been clicked " + count2 + " times.";

};


// Attach as a listener
document.getElementById("cat2").addEventListener("click", addUp2, false);
