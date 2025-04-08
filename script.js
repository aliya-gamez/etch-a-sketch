// Create sketchContainer
const heading = document.createElement("h1");
heading.textContent = "etch-a-sketch";

const sketchContainer = document.createElement("div");
sketchContainer.classList.add("sketch-container");

const promptContainer = document.createElement("div");
promptContainer.classList.add("prompt-container");



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
var containerWidth = 400;
var rowCount = 16;

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

        width: ${containerWidth+rowCount-1}px;
        height: auto;

        row-gap: 1px;

        background-color: rgb(165, 165, 165);
        border: 4px solid rgb(165, 165, 165);   
    }

    .squareDiv {
        height: ${containerWidth/rowCount}px;
        flex: 0 0 ${containerWidth/rowCount}px;


        background-color: #fff;
    }

    .squareDiv:hover {
       background: red; 
    }

    .prompt-container {
        width: ${containerWidth+rowCount-1}px;
        height: 50px;
        margin-top: 20px;

        background: #fff;
        border: 4px solid rgb(165, 165, 165); 
        border-radius: 5px;
    }
`;



// Place divs on page
document.body.appendChild(heading);
document.body.appendChild(sketchContainer);
document.body.appendChild(promptContainer);
document.head.appendChild(styles);

for(let i = 1; i <= 16; i++) {
    for(let j = 1; j <= 16; j++) {
        //let editSquareDiv = document.getElementById(`${i}x${j}`);
    }
}
