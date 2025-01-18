const container = document.querySelector(".container")
const resetButton = document.querySelector("button#reset");

const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;
const MIN_SIZE = 1;
let size = DEFAULT_SIZE;

//=============================================
//function to create row with n number of cells
const createRow = (n) => {
    const row = document.createElement("div")
    row.className = "row"
    for(let i = 0; i < n; i++){
        const cell = document.createElement("div")
        cell.className = "cell"
        row.appendChild(cell)
    }
    return row;
}


const random8BitColor = () => Math.floor(Math.random() * 256);
//===============================================================
//function to create a grid using the previous createRow function
const createGrid = (n) => {
    for(let i = 0; i < n; i++){
        container.appendChild(createRow(n));
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
    const randomRgba = `rgba(${random8BitColor()},${random8BitColor()},${random8BitColor()},0)`;
    cell.style.backgroundColor = randomRgba;
    cell.addEventListener("mouseover", (e) => {
        const cell = e.target;
        const rgba = cell.style.backgroundColor;     

        cell.style.backgroundColor = `rgba(${random8BitColor()},${random8BitColor()},${random8BitColor()})`;
    });
});
    
    
}
createGrid(size);


//==================================
//onclick event to the reset button
resetButton.addEventListener("click", () => {
  size = prompt(
    `Enter the size of the grid (${MIN_SIZE} - ${MAX_SIZE})`,
    DEFAULT_SIZE
  );
  
  while (isNaN(size) || size < MIN_SIZE || size > MAX_SIZE) {
    size = prompt(
      `Please enter a valid number between ${MIN_SIZE} and ${MAX_SIZE}`,
      DEFAULT_SIZE
    );
  }

  container.innerHTML = "";
  createGrid(size);
});






