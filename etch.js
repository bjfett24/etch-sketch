function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getLightRandomColor() {
    const r = 200 + Math.floor(Math.random() * 56); // 200-255
    const g = 200 + Math.floor(Math.random() * 56); // 200-255
    const b = 200 + Math.floor(Math.random() * 56); // 200-255
    return `rgb(${r},${g},${b})`;
}

function darkenColor(rgbColor, amount = 10) {
    const match = rgbColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
    if (!match) return 'rgb(0,0,0)'; // Return black for safety

    let r = parseInt(match[1]) - amount;
    let g = parseInt(match[2]) - amount;
    let b = parseInt(match[3]) - amount;

    r = Math.max(0, r); // Ensure >= 0
    g = Math.max(0, g);
    b = Math.max(0, b);

    return `rgb(${r},${g},${b})`;
}
const myHTML = document.documentElement;
myHTML.style.height = '100%';
myHTML.style.margin = '0px';

const body = document.querySelector("body");
body.style.height = '100%';
body.style.margin = '0px';



const webPage = document.querySelector('#page');
webPage.setAttribute('style', 'background-color:rgb(255, 214, 138); display: flex; flex-direction: column; justify-content: space-between; align-items: center;')
webPage.style.padding = "30px";
webPage.style.height = "100%";
webPage.style.margin = "0px";

const buttonBox = document.createElement('div');
buttonBox.setAttribute('style', 'background-color: gray; width: 100%; flex: 1; display: flex; padding: 20px 100px; justify-content: center;')
webPage.appendChild(buttonBox);

const newContainer = document.createElement('div');
newContainer.id = 'container';
newContainer.setAttribute("style", "border: 2px solid black; width: 890px; height: 890px; margin: 0px; display: flex; flex-direction: column; justify-content: space-between;");
webPage.appendChild(newContainer);

for (r = 0; r < 16; r++) {
    const row = document.createElement("div")
    row.classList.add("row");
    row.setAttribute("style", "box-sizing: border-box; flex: 1; display: flex; justify-content: space-between;");
    newContainer.appendChild(row);

    for (i = 0; i < 16; i++) {
        column = document.createElement("div");
        //column.textContent = "This is a grid box"
        column.setAttribute("style", "box-sizing: border-box; flex: 1;");
        column.classList.add('gridBox');
        column.style.backgroundColor = 'white';
        column.addEventListener('mouseover', function() {
            if (this.style.backgroundColor === 'white') {
                this.style.backgroundColor = getLightRandomColor();
            } else {
                this.style.backgroundColor = darkenColor(this.style.backgroundColor);
            }
        })
        row.appendChild(column);


    }
}



/*let container = document.querySelector("#container");
container.setAttribute("style", "border: 2px solid black; height: 100%; margin: 0px; display: flex; flex: 6; flex-direction: column; justify-content: space-between;");

generateGrid(16);*/

function generateGrid(num) {
    const oldContainer = document.querySelector('#container');
    oldContainer.remove();
    const newContainer = document.createElement('div');
    newContainer.id = 'container';
    newContainer.setAttribute("style", "border: 2px solid black; width: 890px; height: 890px; margin: 0px; display: flex; flex-direction: column; justify-content: space-between;");
    webPage.appendChild(newContainer);


    
    for (r = 0; r < num; r++) {
        const row = document.createElement("div")
        row.classList.add("row");
        row.setAttribute("style", "box-sizing: border-box; flex: 1; display: flex; justify-content: space-between;");
        newContainer.appendChild(row);

        for (i = 0; i < num; i++) {
            column = document.createElement("div");
            //column.textContent = "This is a grid box"
            column.setAttribute("style", "box-sizing: border-box; flex: 1;");
            column.classList.add('gridBox');
            column.style.backgroundColor = 'white';
            column.addEventListener('mouseover', function() {
                if (this.style.backgroundColor === 'white') {
                    this.style.backgroundColor = getLightRandomColor();
                } else {
                    this.style.backgroundColor = darkenColor(this.style.backgroundColor);
                }
            })
            row.appendChild(column);
    
    
        }
    }

}




function buttonAction() {
    let gridSide = prompt("Input side length of grid: ");
    if (gridSide === null) {
        console.log("closed pop-up");
    } else if (gridSide >= 1 && gridSide <= 100) {
        generateGrid(gridSide);
    } else {
        buttonAction();
    }
}

const button = document.createElement('button');
button.textContent = 'Change Grid Size';
button.addEventListener('click', buttonAction);
button.setAttribute('style', 'margin: 0px; padding: 10px; text-align: center; border :3px solid black; border-radius: 15px;');
buttonBox.appendChild(button);


/*const row0 = document.createElement("div");

const row1 = document.createElement("div");

const row2 = document.createElement("div");

const row3 = document.createElement("div");

const row4 = document.createElement("div");

const row5 = document.createElement("div");

const row6 = document.createElement("div");

const row7 = document.createElement("div");

const row8 = document.createElement("div");

const row9 = document.createElement("div");

const row10 = document.createElement("div");

const row11 = document.createElement("div");

const row12 = document.createElement("div");

const row13 = document.createElement("div");

const row14 = document.createElement("div");

const row15 = document.createElement("div");

//const rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15];

/*for (row of rows) {
    row.classList.add("row");
    row.setAttribute("style", "box-sizing: border-box; flex: 1; display: flex; justify-content: space-between;");
    //row.textContent = "This is a row";
    container.appendChild(row);

    for (i = 1; i < 17; i++) {
        column = document.createElement("div");
        column.textContent = "This is a grid box"
        column.setAttribute("style", "box-sizing: border-box; flex: 1; border: 1px solid black;");
        column.classList.add('gridBox');
        column.style.backgroundColor = 'white';
        column.addEventListener('mouseover', function() {
            if (this.style.backgroundColor === 'white') {
                this.style.backgroundColor = getLightRandomColor();
            } else {
                this.style.backgroundColor = darkenColor(this.style.backgroundColor);
            }
        })
        row.appendChild(column);


    }
}

*/

/*const gridBoxes = document.querySelectorAll(".gridBox");


gridBoxes.forEach(node => {
    node.addEventListener('mouseover', () => column.style.backgroundColor == 'white'? column.style.backgroundColor = 'black': column.style.backgroundColor = 'white');
    node.textContent = node;

});

*/




