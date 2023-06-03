const topContainer = document.querySelector(".top-container");

function createCalculator() {
    const calcContainer = document.createElement("div");
    calcContainer.classList.add("calc-container");

    //create display
    const displayContainer = document.createElement("div");
    displayContainer.classList.add("display-container");
    displayContainer.textContent = "1245689"; // placeholder text

    calcContainer.appendChild(displayContainer);


    //create buttons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

        // create number pad
        const numPadContainer = document.createElement("div");
        numPadContainer.classList.add("numpad-container");

        for (i = 0; i < 11; i++) {
            let button = document.createElement("button");
            button.classList.add("numpad")

            // populate textContent
            button.textContent = i;

            if (i==10) {
                button.textContent = ".";
                button.style.order = "-1";
                button.style.flexBasis = "50%";
            }
            if (i==0) {
                button.style.order = "-1";
                button.style.flexBasis = "50%";
            }

            // add event listeners PLACEHOLDER
            button.addEventListener("click", e => {
                console.log(e.target.textContent);
            })

            // add buttons to parent container
            numPadContainer.appendChild(button);
        }

        buttonsContainer.appendChild(numPadContainer);

        // create operators
        const opContainer = document.createElement("div");
        opContainer.classList.add("op-container");
        const operators = "+-*/=";

        for (let i = 0; i < operators.length; i++) {
            let button = document.createElement("button");
            button.classList.add("numpad")
            button.textContent = operators[i];

            // add event listeners PLACEHOLDER
            button.addEventListener("click", e => {
                console.log(e.target.textContent);
            })

            // add buttons to parent container
            opContainer.appendChild(button);
        }

        buttonsContainer.appendChild(opContainer);
    calcContainer.appendChild(buttonsContainer);

    // display calculator within top-container
    topContainer.appendChild(calcContainer);

}






createCalculator();