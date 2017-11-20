(function(window) {


  function coor(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "(X: " + x + ", Y: " + y + ")";

    document.getElementById("coor").textContent = coor;
  }

  window.addEventListener("mousemove", coor, false);


  function create() {
    // things might happen
  }

  // var eL = document.getElementById('')...
  // el.addEventListener("click", create/click, true);



}(window));
