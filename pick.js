const ec = document.getElementById("etch-container");
let numBoxes;

// document.getElementById("btns").addEventListener("click", function(evt) {
//     let target = evt.target;
//     if (target.id === "btn-small") {
//         numBoxes = 100;
//     } else if (target.id === "btn-medium") {
//         numBoxes = 256;
//     } else {
//         numBoxes = 484;
//     }
// });

document.getElementById("btn-small").addEventListener("click", () => {
    numBoxes = 100;
    console.log(numBoxes);
});

function sketch(numBoxes) {
    console.log(numBoxes);
    ec.innerHTML = "";
  
    for (let i = 0; i < numBoxes; i++) {
      let box = document.createElement("div");
      box.classList.add("grid-box");
      ec.appendChild(box);
  
      const color = () => {box.style.backgroundColor = "#000"};
      box.addEventListener("click", color);
    }
  }
  
  sketch(numBoxes);