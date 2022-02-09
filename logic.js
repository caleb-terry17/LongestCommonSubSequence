// document tags to display compare values
let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");

// to hold value of style sheet
let style = document.documentElement.style;

// color codes
let green = "#09FF09";
let yellow = "#FFFF00";
let red = "FF0000";
let white = "#FFF";

function getInput() {
    // get input from list1, list2
    let str1 = document.getElementById("list1").value;
    let str2 = document.getElementById("list2").value;

    // replace all whitespace with ""
    str1 = str1.replace(" ", "");
    str2 = str2.replace(" ", "");

    // split by ,
    let list1 = str1.split(",");
    let list2 = str2.split(",");

    // run longest common sub seq on two lists
    console.log("lcs: " + lcs(list1, list2, list1.length - 1, list2.length - 1));
    // dynamic lcs
    fillAry(list1.length, list2.length);
    console.log("lcsDyn: " + lcsDyn(list1, list2, list1.length - 1, list2.length - 1));

    // iterations
    printStuff();

    // display graph
    drawGraph();
}

let iter = 0;  // iterations for lcs
// longest common subsequence
function lcs(l, r, lIdx, rIdx) {
    // idx == -1 => end of check
    if (lIdx == -1 || rIdx == -1) { return 0; }
    // setting outside values
    // tag1.innerHTML = l[lIdx];
    // tag2.innerHTML = r[rIdx];
    // val's == => add one, return and decrement both
    let total;
    if (l[lIdx] == r[rIdx]) { 
        // lcs computation
        total = lcs(l, r, lIdx - 1, rIdx - 1) + 1;
        // displaying comparison
        // style.setProperty("--color2", green);
    }
    // return greater of two
    else {
        // lcs computation
        let lhs = lcs(l, r, lIdx - 1, rIdx);
        let rhs = lcs(l, r, lIdx, rIdx - 1);
        total = (lhs > rhs) ? lhs : rhs;
        // displaying comparison
        // style.setProperty("--color2", red);
    }
    iter++;
    return total;
}

let iterDyn = 0;  // iterations for dynIter
let lcsAry = [[]];
let lcsRow;  // lhs len
let lcsCol;  // rhs len

// creates array for lcsDyn
function fillAry(lLen, rLen) {
    // set globals
    lcsRow = lLen;
    lcsCol = rLen;
    // fill with 0's
    for (let i = 0; i < lLen; i++) {
        lcsAry[i] = [];
        for (let j = 0; j < rLen; ++j) {
            lcsAry[i][j] = 0;
        }
    }
}

// sets the idx's that no longer need to be seen in the lcsAry
function updateSeen(lIdx, rIdx) {
    for (let i = lIdx; i < lcsRow; ++i) {
        lcsAry[i][rIdx] = 1;
    }
    for (let i = rIdx + 1; i < lcsCol; ++i) {
        lcsAry[lIdx][i] = 1;
    }
}

// longest common subsequence dynamic approach
function lcsDyn(l, r, lIdx, rIdx) {
    // idx == -1 => end of check
    if (lIdx == -1 || rIdx == -1) { return 0; }
    // if current square is 2, don't need to check 
    if (lcsAry[lIdx][rIdx] == 1) { return 0; }
    // val's == => add one, return and decrement both
    let total;
    if (l[lIdx] == r[rIdx]) {
        // no longer need to check anything in graph to right of rIdx or below lIdx
        updateSeen(lIdx, rIdx);
        // lcs computation
        total = lcsDyn(l, r, lIdx - 1, rIdx - 1) + 1;
    }
    // return greater of two
    else {
        // lcs computation
        let lhs = lcsDyn(l, r, lIdx - 1, rIdx);
        let rhs = lcsDyn(l, r, lIdx, rIdx - 1);
        total = (lhs > rhs) ? lhs : rhs;
    }
    iterDyn++; 
    return total;
}

function printStuff() {
    console.log("iter: " + iter);
    console.log("iterDyn: " + iterDyn);
}

// draws the lines and colors the squares after algo runs
function drawGraph() {

}