const ec = document.getElementById("etch-container");
const pixelSize = 25;

function sketch(numBoxes) {
  ec.innerHTML = "";

  for (let i = 0; i < numBoxes; i++) {
    let box = document.createElement("div");
    box.style.width = pixelSize + "px";
    box.style.height = pixelSize + "px";
    box.classList.add("grid-box");
    ec.appendChild(box);

    const color = () => {box.style.backgroundColor = "#000"};
    box.addEventListener("click", color);
  }
}

document.getElementById("btn-small").addEventListener("click", () => {
  let numBoxes = 100;
  sketch(numBoxes);
});
document.getElementById("btn-medium").addEventListener("click", () => {
  let numBoxes = 256;
  sketch(numBoxes);
})
document.getElementById("btn-large").addEventListener("click", () => {
  let numBoxes = 484;
  sketch(numBoxes);
})


  
  