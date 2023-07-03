const ec = document.getElementById("etch-container");
const input = document.getElementById("input");
let numBoxes = 15;

// TODO - get input value
input.addEventListener("change", (e) => {
    numBoxes = parseInt(e.target.value);
});

function sketch(numBoxes) {
  for (let i = 0; i < numBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    ec.appendChild(box);

    const color = () => {box.style.backgroundColor = "#000"};
    box.addEventListener("click", color)
  }
}

sketch(numBoxes);

