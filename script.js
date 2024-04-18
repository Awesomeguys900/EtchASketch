const container = document.querySelector("#main");
let isMouseDown = false;

document.addEventListener("mouseup", function () {
  isMouseDown = false; // Reset the flag
});

function populate(value) {
  container.innerHTML = ""; // Clear the existing grid
  for (let i = 0; i < value; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < value; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
  var squares = document.getElementsByClassName("square");
  Array.from(squares).forEach(function (square) {
    square.addEventListener("mousedown", function (event) {
      isMouseDown = true;
      square.style.backgroundColor =
        document.getElementById("colorpicker").value;
      event.preventDefault();
    });
    square.addEventListener("mouseover", function () {
      if (isMouseDown) {
        // Check if the mouse is still being pressed
        square.style.backgroundColor =
          document.getElementById("colorpicker").value;
      }
    });
  });
}

function clearSquares() {
  var squares = document.getElementsByClassName("square");
  Array.from(squares).forEach(function (square) {
    square.style.backgroundColor = "";
  });
}

var slider = document.getElementById("gridRange");
var output = document.getElementById("Value");
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
  populate(this.value);
};

document.addEventListener("DOMContentLoaded", function () {
  populate(slider.value); // Initialize the grid
});

populate(16);
