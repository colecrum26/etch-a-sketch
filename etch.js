const ec = document.getElementById("etch-container");
let numBoxes = 16;

function sketch(numBoxes) {
  for (let i = 0; i < numBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    ec.appendChild(box);

    const color = () => {box.style.backgroundColor = '#000'};
    box.addEventListener('mouseover', color)
  }
}

sketch(numBoxes);

