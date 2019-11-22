const kWidth = 20;
const kHeight = 20;
let interval;
function init() {
    const cells = new Array(kWidth * kHeight);
    const container = document.getElementById("container");
    for (let i = 0; i < cells.length; ++i) {
        cells[i] = document.createElement("div");
        cells[i].setAttribute("class", "cell");
        cells[i].setAttribute("onclick", "set(this)");
        cells[i].setAttribute("id", i);
        container.appendChild(cells[i]);
    }
}
function set(cell) {
    if (cell.getAttribute("class") === "cell")
        cell.setAttribute("class", "alive");
    else   
        cell.setAttribute("class", "cell");
}
function start() {
    let button = document.getElementById("button")
    button.setAttribute("onclick", "stop()")
    button.setAttribute("class", "stop")
    button.setAttribute("value", "Stop")
    run()
}
function run() {
    const map = new Array(kHeight * kWidth);
    for (let i = 0; i < map.length; ++i)
        map[i] = document.getElementById(i).getAttribute("class") == "alive" ? 1 : 0
    for (let i = 0; i < kWidth * kHeight; ++i)
        document.getElementById(i).setAttribute("onclick", null);
    interval = setInterval(()=>next(map), 300)
}
function next(map) {
    const newMap = new Array(map.length);
    let count, col, row;
    for (let i = 0; i < map.length; ++i) {
        row = Math.floor(i / kWidth);
        col = i % kWidth;
        count = get(map, row - 1, col - 1) +
                get(map, row - 1, col)     +
                get(map, row - 1, col + 1) +
                get(map, row, col - 1)     +
                get(map, row, col + 1)     +
                get(map, row + 1, col - 1) +
                get(map, row + 1, col)     +
                get(map, row + 1, col + 1)
        if ((map[i] === 1 && count >=2 && count <= 3) || (map[i] === 0 && count == 3))
            newMap[i] = 1
        else
            newMap[i] = 0
    }
    for (let i = 0; i < newMap.length; ++i) {
        map[i] = newMap[i];
        document.getElementById(i).setAttribute("class", map[i] === 1 ? "alive" : "cell")
    }
}
function get(map, i, j) {
    if (i < 0 || i >= kHeight || j < 0 || j >= kWidth)
        return 0;
    return map[i * kWidth + j];
}
function stop() {
    let button = document.getElementById("button")
    button.setAttribute("onclick", "start()")
    button.setAttribute("class", "start")
    button.setAttribute("value", "Start!")
    clearInterval(interval)
    for (let i = 0; i < kWidth * kHeight; ++i)
        document.getElementById(i).setAttribute("onclick", "set(this)");
}
window.onload = init;