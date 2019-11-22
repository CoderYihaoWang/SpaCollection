const kWidth = 20;
const kHeight = 20;
// const cells = new Array(kWidth * kHeight);
// const container = document.getElementById("container");
function init() {
    const cells = new Array(kWidth * kHeight);
const container = document.getElementById("container");
    for (let i = 0; i < cells.length; ++i) {
        cells[i] = document.createElement("div")
        cells[i].setAttribute("class", "cell");
        container.appendChild(cells[i]);
    }
}
function render() {

}
function update() {

}
function play() {

}
function reset() {

}
window.onload = init;