
const ec = document.getElementById("etch-container")
let numBoxes=16;

    function createDivs(numBoxes) {
        for (let i = 0; i < numBoxes; i++) {
            let box = document.createElement("div");
            box.className = "grid-box";
            ec.appendChild(box);
        }
    }

    console.log(createDivs);
    createDivs(numBoxes);

