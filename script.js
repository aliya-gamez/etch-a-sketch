// Create sketchContainer
const heading = document.createElement("h1");
heading.textContent = "etch-a-sketch";

const sketchContainer = document.createElement("div");
sketchContainer.classList.add("sketch-container");

const promptContainer = document.createElement("div");
promptContainer.classList.add("prompt-container");

const promptForm = document.createElement("form");
promptForm.id = "promptForm";
const promptLabel = document.createElement("label");
promptLabel.textContent = "Squares per side:";
const promptInput = document.createElement("input");
promptInput.type = "number";
promptInput.name = "row-count";
const promptSubmit = document.createElement("input");
promptSubmit.type = "button";
promptSubmit.value = "Submit";
promptSubmit.id = "formSubmitBtn";
promptLabel.appendChild(promptInput);
promptForm.appendChild(promptLabel);
promptForm.appendChild(promptSubmit);




// Create 16x16 square divs
for(let i = 1; i <= 16; i++) {
    for(let j = 1; j <= 16; j++) {
        let squareDiv = document.createElement("div");
        //squareDiv.id = `${i}x${j}`;
        squareDiv.classList.add("squareDiv");
        sketchContainer.appendChild(squareDiv);
    }
}


// Styling for Elements
const styles = document.createElement("style");
const containerWidth = 400;
let rowCount = 16;
let dimensionsSquareDiv = ((containerWidth-(rowCount-1))/rowCount);

styles.textContent = `
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background-color: #161C14;
    }

    h1 {
        color: rgb(238, 238, 238);
    }

    .sketch-container {
        display: flex;
        justify-content: space-between;
        align-items: space-between;
        flex-wrap: wrap; 

        width: ${(containerWidth)}px;
        height: auto;

        gap: 1px;
        row-gap: 1px;

        background-color: rgb(165, 165, 165);
        border: 4px solid rgb(165, 165, 165);   
    }

    .squareDiv {
        height: ${dimensionsSquareDiv}px;
        flex: 0 0 ${dimensionsSquareDiv}px;


        background-color: #fff;
    }

    .squareDiv:hover {
       background: red; 
    }

    .prompt-container {
        display: flex;
        align-items: center;
        justify-content: center;

        width: ${containerWidth}px;
        height: 50px;
        margin-top: 20px;

        background: #fff;
        border: 4px solid rgb(165, 165, 165); 
        border-radius: 5px;
    }

    #promptForm input {
        margin-left: 10px;
    }
`;


// Place divs on page
document.body.appendChild(heading);
document.body.appendChild(sketchContainer);
document.body.appendChild(promptContainer);
promptContainer.appendChild(promptForm);
document.head.appendChild(styles);

// Event Listeners

promptSubmit.addEventListener("click", () => {
    createCustomGrid();
});

function createCustomGrid() {
    rowCount = parseInt(promptInput.value);
    sketchContainer.textContent = "";
    dimensionsSquareDiv = ((containerWidth-(rowCount-1))/rowCount);;

    for(let i = 1; i <= rowCount; i++) {
        for(let j = 1; j <= rowCount; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            sketchContainer.appendChild(squareDiv);
        }
    }

    styles.textContent = `
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            background-color: #161C14;
        }

        h1 {
            color: rgb(238, 238, 238);
        }

        .sketch-container {
            display: flex;
            justify-content: space-between;
            align-items: space-between;
            flex-wrap: wrap; 

            width: ${(containerWidth)}px;
            height: auto;

            gap: 1px;
            row-gap: 1px;

            background-color: rgb(165, 165, 165);
            border: 4px solid rgb(165, 165, 165);   
        }

        .squareDiv {
            height: ${dimensionsSquareDiv}px;
            flex: 0 0 ${dimensionsSquareDiv}px;


            background-color: #fff;
        }

        .squareDiv:hover {
        background: red; 
        }

        .prompt-container {
            display: flex;
            align-items: center;
            justify-content: center;

            width: ${containerWidth}px;
            height: 50px;
            margin-top: 20px;

            background: #fff;
            border: 4px solid rgb(165, 165, 165); 
            border-radius: 5px;
        }

        #promptForm input {
            margin-left: 10px;
        }
    `;
}


for(let i = 1; i <= 16; i++) {
    for(let j = 1; j <= 16; j++) {
        //let editSquareDiv = document.getElementById(`${i}x${j}`);
    }
}
