

const container = document.querySelector(".container");

const gridSize = 16;

function gridCreator(gridSize) {

    gridSize = gridSize**2;

    for (i = 0; i < gridSize; i++) {

        let box = document.createElement("div");

        box.className = "gridbox";

        box.style.width = 400/(Math.sqrt(gridSize)) + "px";

        box.style.height = 400/(Math.sqrt(gridSize)) + "px";

        box.style.outline = "solid 1px";

        box.style.margin = "0";

        box.style.pardding = "0";

        container.append(box);

    }

}



function changeColor(color) {
    const grids = document.querySelectorAll(".gridbox");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {grid.style.backgroundColor = color});
    });

}



gridCreator(gridSize);
changeColor("black");



