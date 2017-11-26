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


  function randomColor(r, g, b, a) {

    var red = random(0, 255);
    var green = random(0, 255);
    var blue = random(0, 255);
    var alpha = Math.random();

    return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
    // console.log(rgba);
  }





  function shape(event) {
    // things might happen
    console.log(event);

    var sHeight = random(1, 200);
    var sWidth = random(1, 200);

    var myNewShape = document.createElement("div");

    document.getElementById("shape").appendChild(myNewShape);

    myNewShape.style.height = sHeight + "px";
    myNewShape.style.width = sWidth + "px";
    myNewShape.style.background = randomColor();

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
