

const container = document.querySelector(".container");


function gridCreator(gridSize) {

    gridSize = gridSize**2;

    for (i = 0; i < gridSize; i++) {

        let box = document.createElement("div");

        box.className = "gridbox";

        box.style.width = 400/(Math.sqrt(gridSize)) + "px";

        box.style.height = 400/(Math.sqrt(gridSize)) + "px";

        box.style.margin = "0";

        box.style.pardding = "0";

        container.append(box);

    }

}


function setColor(color) {
    const grids = document.querySelectorAll(".gridbox");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {grid.style.backgroundColor = color});
    });

}

gridCreator(gridSize)

let colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener('input', () => {
    setColor(colorPicker.value);
})


const erase = document.querySelector("#erase");
erase.addEventListener("click", () => {setColor("white")});

const clear = document.querySelector('#clear');
clear.addEventListener("click", ()=> {
    const grids = document.querySelectorAll(".gridbox");
    grids.forEach(grid => { grid.style.backgroundColor = "white"});
    });

const color = document.querySelector('#color');
color.addEventListener("click", () => {setColor(colorPicker.value)});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerText = slider.value + " x " + slider.value;

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    gridCreator(slider.value);
}

slider.addEventListener("input", ()=> {
  output.innerText = slider.value + " x " + slider.value;
  pixelSize();
});



