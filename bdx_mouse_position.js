(function(window) {

  var min = 1;
  var max = 11;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var rNumber = random(min,max);
  console.log(rNumber.toString());


  function coor(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "(X: " + x + ", Y: " + y + ")";

    document.getElementById("coor").textContent = coor;
  }

  window.addEventListener("mousemove", coor, false);


  function shape() {
    // things might happen
    var myNewShape = document.createElement("div");

    document.getElementById("shape").appendChild(myNewShape);

    myNewShape.classList.add("redSquare");
  }

  window.addEventListener("click", shape, true);



}(window));





/*
**NONSENSE**

random();


function ...{

colorArr = ["red", "green", "blue".....];

rectangle() {
  var rHeight = random().toString() + "0px";
  var rWidth = random().toString() + "0px";

  var objColor = colorArr[random()]...?;
  var opacity = random().toString();

  document.getElementById("square").style.height = randomStat;
  document.getElementById("square").style.width = randomStat;
  document.getElementById("square").style.color = odjColor;
  document.getElementById("square").style.opacity = opacityStat +"0%";
}

oval() {
document.getElementById("square").style.height = rNumber.toString() + "0px";
document.getElementById("square").style.width = rNumber.toString() + "0px";
document.getElementById("square").style.???radius = "100%";
document.getElementById("square").style.color = odjColor;
document.getElementById("square").style.opacity = rNumber.toString() +"0%";
}
*/
