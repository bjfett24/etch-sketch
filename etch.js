const myHTML = document.documentElement;
myHTML.style.height = '100%';
myHTML.style.margin = '0px';

const body = document.querySelector("body");
body.style.height = '100%';
body.style.margin = '0px';



const webPage = document.querySelector('#page');
webPage.style.padding = "30px";
webPage.style.height = "100%";
webPage.style.margin = "0px";

const container = document.querySelector("#container");
container.setAttribute("style", "border: 2px solid black; height: 100%; margin: 0px; display: flex; flex-direction: column; justify-content: space-between;");

//const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

const row0 = document.createElement("div");

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

const rows = [row0, row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15];

for (row of rows) {
    row.class = "row";
    row.setAttribute("style", "box-sizing: border-box; flex: 1; display: flex; justify-content: space-between;");
    //row.textContent = "This is a row";
    container.appendChild(row);

    for (i = 1; i < 17; i++) {
        column = document.createElement("div");
        column.textContent = "This is a grid box"
        column.setAttribute("style", "box-sizing: border-box; flex: 1; border: 1px solid black;");
        column.class = 'gridBox';
        row.appendChild(column);


    }
}








