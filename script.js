

const container = document.querySelector(".container");

const gridSize = 16;

let isRainbow = false;

let isGrey = false;

function gridCreator(gridSize) {

    gridSize = gridSize**2;

    for (i = 0; i < gridSize; i++) {

        let box = document.createElement("div");

        box.className = "gridbox";

        box.style.width = 500/(Math.sqrt(gridSize)) + "px";

        box.style.height = 500/(Math.sqrt(gridSize)) + "px";

        box.style.margin = "0";

        box.style.pardding = "0";

        container.append(box);

    }

}

const rainbow = document.querySelector("#rainbow");
const color = document.querySelector('#color');

function setColor(COLOR) {
    isRainbow = false;
    isGrey = false;
    color.classList.add("clicked");
    const grids = container.querySelectorAll("div");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {grid.style.backgroundColor = COLOR});
    });

}

gridCreator(gridSize)

let colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener('input', () => {
    setColor(colorPicker.value);
})


const erase = document.querySelector("#erase");
erase.addEventListener("click", () => {setColor("white")
    erase.classList.add("clicked");
    rainbow.classList.remove("clicked");
    greyScale.classList.remove("clicked");
    color.classList.remove("clicked");
});

const clear = document.querySelector('#clear');
clear.addEventListener("click", ()=> {
    const grids = document.querySelectorAll(".gridbox");
    grids.forEach(grid => { grid.style.backgroundColor = "white"});
    if (isRainbow == false && isGrey == false) {
    setColor(colorPicker.value);
    } else if(isRainbow==true) {
        rainbowEffect();
    } else if(isGrey == true) {
        greyScaleEffect();
    }
    });

color.addEventListener("click", () => {setColor(colorPicker.value)
    color.classList.add("clicked");
    rainbow.classList.remove("clicked");
    greyScale.classList.remove("clicked");
    erase.classList.remove("clicked");
});

const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");
output.innerText = slider.value + " x " + slider.value;

function pixelChange() {
    let gridPixels = container.querySelectorAll('.gridbox');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    gridCreator(slider.value);
  }

slider.addEventListener("input", ()=> {
  output.innerText = slider.value + " x " + slider.value;
  pixelChange();
  if (isRainbow == false && isGrey == false) {
    setColor(colorPicker.value);
    color.classList.add("clicked")
    } else if(isRainbow==true) {
        rainbowEffect();
        rainbow.classList.add("clicked")
    } else if(isGrey == true) {
        greyScaleEffect();
        greyScale.classList.add("clicked")
    }
    erase.classList.remove("clicked");
});




function rainbowEffect() {
    const grids = container.querySelectorAll("div");
    grids.forEach(grid => {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        grid.addEventListener("mouseover", () => {grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`})})
    }

rainbow.addEventListener("click", () => {
    rainbowEffect();
    rainbow.classList.add("clicked");
    greyScale.classList.remove("clicked");
    color.classList.remove("clicked");
    erase.classList.remove("clicked");
    isRainbow = true;
    isGrey = false;
});

function greyScaleEffect() {
    const grids = container.querySelectorAll("div");
    grids.forEach(grid => {
        const greys = ["rgb(100,100,100)", "rgb(0,0,0)","rgb(130,130,130)","rgb(150,150,150)","rgb(160,160,160)", "rgb(210,210,210)", "rgb(225,225,225)"];
        grid.addEventListener("mouseover", () => {grid.style.backgroundColor = greys[Math.floor(Math.random()*greys.length)]})
        })
    }

const greyScale = document.querySelector('#grey');
greyScale.addEventListener("click", ()=> {
    greyScaleEffect();
    isGrey = true;
    isRainbow = false;
    greyScale.classList.add("clicked");
    rainbow.classList.remove("clicked");
    color.classList.remove("clicked");
    erase.classList.remove("clicked");
})
    


    


