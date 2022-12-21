

const container = document.querySelector(".container");

const gridSize = 256;

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

