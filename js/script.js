var count1 = 0;
var count2 = 0;


//Cat 1
var addUp1 = (function() {

  return function () {
    var element1 = document.getElementById("counter1");
    if (element1) element1.innerHTML = ++count1;
    document.getElementById("counter1").innerHTML = "This has been clicked " + count1 + " times.";
  }
}());


// Attach as a listener
document.addEventListener("click", addUp1, false);

//Cat 2
var addUp2 = (function() {

  return function () {
    var element2 = document.getElementById("counter2");
    if (element2) element2.innerHTML = ++count2;
    document.getElementById("counter2").innerHTML = "This has been clicked " + count2 + " times.";
  }
}());


// Attach as a listener
document.addEventListener("click", addUp2, false);
