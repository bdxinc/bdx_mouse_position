(function(window) {

  var min = 1;
  var max = 11;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var rNumber = random(min,max);
  console.log(rNumber);


  function coor(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "(X: " + x + ", Y: " + y + ")";

    document.getElementById("coor").textContent = coor;
  }

  window.addEventListener("mousemove", coor, false);


  function shape() {
    // things might happen
    document.getElementById('shape').classList.add("createShape");
  }

  // var shapeEl = document.getElementById('shape');
  // shapeEl.addEventListener("click", shape, true);

  window.addEventListener("click", shape, true);



}(window));
