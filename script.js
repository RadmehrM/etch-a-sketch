

const container = document.querySelector(".container");

const gridSize = 256;

for (i = 0; i < gridSize; i++) {

    let box = document.createElement("div");

    box.className = "gridbox";

    box.style.border= "black solid 1px";

    box.style.width = "20px";

    box.style.height = "20px";

    box.style.float = "left";

    box.style.margin = "0";

    box.style.pardding = "0";

    container.append(box);

}

