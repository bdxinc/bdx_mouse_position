(function(window) {

  var min = 1;
  var max = 11;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var rNumber = random(min,max);
  console.log(rNumber.toString());


  var colorArr = ["red", "orange", "yellow", "green", "blue", "purple"];
  var cLength = colorArr.length;

  function randomColor(min, cLength) {
    return Math.floor(Math.random() * (cLength - min) + min);
  }

  var rColor = randomColor(min, cLength);
  console.log(rColor.toString());


  function coor(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "(X: " + x + ", Y: " + y + ")";

    document.getElementById("coor").textContent = coor;
  }

  window.addEventListener("mousemove", coor, false);


  function shape(event) {
    // things might happen
    console.log(event);
    var sHeight = rNumber.toString() + "0px";
    var sWidth = rNumber.toString() + "0px";
    var opacityStat = rNumber.toString() + "0%";


    var objColor = colorArr[rColor];


    var myNewShape = document.createElement("div");

    document.getElementById("shape").appendChild(myNewShape);

    myNewShape.style.height = sHeight;
    myNewShape.style.width = sWidth;
    myNewShape.style.color = objColor;
    myNewShape.style.opacity = opacityStat;

    myNewShape.style.position = "absolute";
    myNewShape.style.left = (event.clientX - (sWidth/2)) + "px";
    myNewShape.style.top = (event.clientY - (sHeight/2)) + "px";

    myNewShape.classList.add("rectangle");

    // if(Math.random() > 0.5) {
    //   myNewShape.classList.add("rectangle");
    // } else {
    //   myNewShape.style.borderRadius = "50%";
    //   myNewShape.classList.add("oval");
    // }
  }
  window.addEventListener("click", shape, true);
}(window));




/*
**NONSENSE**


rectangle() {





}

oval() {
  var oHeight = random().toString() + "0px";
  var oWidth = random().toString() + "0px";

  document.getElementById("square").style.height = rNumber.toString() + "0px";
  document.getElementById("square").style.width = rNumber.toString() + "0px";
  document.getElementById("square").style.borderRadius = "50%";
  document.getElementById("square").style.color = odjColor;
  document.getElementById("square").style.opacity = rNumber.toString() +"0%";
}
*/
