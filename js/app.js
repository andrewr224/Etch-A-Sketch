const section = document.querySelector("section");
const reset   = document.querySelector("button.reset");

function newCanvas() {
  clearCanvas();

  setCanvas(getDimentions());
}

function clearCanvas() {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}

function setCanvas(dimention = 32) {
  let size = canvasHeight() / dimention;

  for (let i = 0; i < dimention; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < dimention; j++) {
      let square = buildSquare(size);

      row.appendChild(square);
    }

    section.appendChild(row);
  }
}

function buildSquare(size) {
  let square = document.createElement("div");

  square.classList.add("square");
  square.setAttribute("style", `width: ${size}px; height: ${size}px`);

  square.addEventListener("mouseover", changeColor);

  return square;
}

function canvasHeight() {
  return parseInt(getComputedStyle(section).getPropertyValue("height"));
}

function getDimentions() {
  let size = prompt("How wide do you want your canvas?", 32);

  return (size > 0) ? size : 32;
}

function changeColor() {
  this.classList.add("colored");
}

reset.addEventListener("click", newCanvas);

setCanvas();
