const topContainer = document.querySelector(".top-container");

function createCalculator() {
    const calcContainer = document.createElement("div");

    // create number pad
    const numPadContainer = document.createElement("div");
    numPadContainer.classList.add("numpad-container");

    for (i = 0; i < 10; i++) {
        let button = document.createElement("button");
        button.classList.add("numpad")
        button.textContent = i;

        if (i==0) {
            button.style.flexBasis = "100%";
        }

        numPadContainer.appendChild(button);
    }

    calcContainer.appendChild(numPadContainer);
    topContainer.appendChild(calcContainer);

}

createCalculator();