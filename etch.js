const ec = document.getElementById("etch-container");

const input = document.getElementById("input");
let numBoxes = input.value;
let squared;
let root;
let sheet = document.styleSheets[0];
let CSSRules = sheet.CSSRules || sheet.rules;
input.addEventListener("change", (e) => {
  numBoxes = e.target.value;
  sqrt();
  sketch(squared);
})

console.log(numBoxes);

function sqrt() {
  root = Math.round(Math.sqrt(numBoxes));
  squared = root**2;
}

function boxSizing() {
  let pixelSize;
  let borderSize = 4;
  if (numBoxes > 36) {
    pixelSize = 25;
    CSSRules[3].style.width = pixelSize + "px";
    CSSRules[3].style.height = pixelSize + "px";
  };
  ec.style.width = root * (pixelSize + borderSize) + 5 + "px";
  ec.style.height = root * (pixelSize + borderSize) + 5 + "px";
  ec.style.alignSelf = "center";
}

function sketch(numBoxes) {
  ec.innerHTML = "";
  boxSizing();

  for (let i = 0; i < numBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    ec.appendChild(box);

    const color = () => {box.style.backgroundColor = "#000"};
    box.addEventListener("click", color);
  }
}

sketch(numBoxes);

