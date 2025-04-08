// Create sketchContainer and styling
const sketchContainer = document.createElement("div");
const styles = document.createElement("style");
sketchContainer.classList.add("sketchContainer");

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
styles.textContent = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sketchContainer {
        display: flex;
        flex-wrap: wrap; 
        width: 400px;
        height: 400px;
        border: 1px solid black;   
    }

    .squareDiv {
        height: 25pxpx;
        flex: 1 0 25px;
    }

    .squareDiv:hover {
       background: red; 
    }
`;



// Place divs on page
document.body.appendChild(sketchContainer);
document.head.appendChild(styles);

for(let i = 1; i <= 16; i++) {
    for(let j = 1; j <= 16; j++) {
        //let editSquareDiv = document.getElementById(`${i}x${j}`);
    }
}
