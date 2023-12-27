const ec = document.getElementById("etch-container");
const colorPicker = document.getElementById("color")
const pixelSize = 49;

function sketch(numBoxes) {
  ec.innerHTML = "";

  for (let i = 0; i < numBoxes; i++) {
    let box = document.createElement("div");
    box.style.width = pixelSize + "px";
    box.style.height = pixelSize + "px";
    box.classList.add("grid-box");
    ec.appendChild(box);

    const color = () => {box.style.backgroundColor = colorPicker.value};
    box.addEventListener("click", color);
  }
}

document.getElementById("btn-small").addEventListener("click", () => {
  let numBoxes = 95;
  sketch(numBoxes);
});
document.getElementById("btn-medium").addEventListener("click", () => {
  let numBoxes = 247;
  sketch(numBoxes);
})
document.getElementById("btn-large").addEventListener("click", () => {
  let numBoxes = 475;
  sketch(numBoxes);
})


  
  