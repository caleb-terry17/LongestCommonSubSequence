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
    // // get input from list1, list2
    // let str1 = document.getElementById("list1").value;
    // let str2 = document.getElementById("list2").value;

    // // replace all whitespace with ""
    // str1 = str1.replace(" ", "");
    // str2 = str2.replace(" ", "");

    // // split by ,
    // let list1 = str1.split(",");
    // let list2 = str2.split(",");

    // // run longest common sub seq on two lists
    // console.log("lcs: " + lcs(list1, list2, list1.length - 1, list2.length - 1));
    // // dynamic lcs
    // fillAry(list1.length, list2.length);
    // console.log("lcsDyn: " + lcsDyn(list1, list2, list1.length - 1, list2.length - 1));
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

///////////////////
// dynamic approach to lcs
///////////////////
// creates array for lcsDyn
function fillAry(list1, list2, lLen, rLen) {
    // construct array
    let ary = [[]];
    let lcsRow = lLen + 1;
    let lcsCol = rLen + 1;
    // fill with 0's
    for (let i = 0; i < lcsRow; i++) {
        ary[i] = [];
        for (let j = 0; j < lcsCol; ++j) {
            ary[i][j] = 0;
        }
    }
    // update values according to matches
    for (let i = 0; i < lcsRow; ++i) {
        for (let j = 0; j < lcsCol; ++j) {
            if (i == 0 || j == 0) { continue; }
            // i == j
            if (list1[i - 1] == list2[j - 1]) { ary[i][j] = ary[i - 1][j - 1] + 1; }
            // i != j
            else {
                let l = ary[i][j - 1];
                let r = ary[i - 1][j];
                ary[i][j] = l > r ? l : r;
            }
        }
    }
    return ary;
}

// longest common subsequence dynamic approach
function lcsDyn(l, r, lIdx, rIdx) {
    let iter = 0;  // iterations for dynIter
    let lcsAry = fillAry(l, r, lIdx, rIdx);  // filling array with paths dynamically
    let z = [];  // final list of lcs
    while (lIdx >= 0 && rIdx >= 0) {
        // i == j => push to list
        if (l[lIdx] == r[rIdx]) { 
            z.push(l[lIdx]); 
            lIdx--;
            rIdx--;
        } else if (lcsAry[lIdx + 1][rIdx] > lcsAry[lIdx][rIdx + 1]) {
            rIdx--;
        } else {
            lIdx--;
        }
        iter++;
    }
    return {"iter": iter, "z": z.reverse()};
}

///////////////////
// testing
///////////////////
// runs a single test case given two string inputs (comma delimited) 
function test(list1, list2) {
    console.log(list1);
    console.log(list2);
    list1 = list1.replace(" ", "");
    list2 = list2.replace(" ", "");
    list1 = list1.split(",");
    list2 = list2.split(",");
    console.log("lcs: " + lcs(list1, list2, list1.length - 1, list2.length - 1) + "|" + iter);
    fillAry(list1, list2, list1.length, list2.length);
    z = lcsDyn(list1, list2, list1.length - 1, list2.length - 1);
    console.log("lcsDyn: " + z.z.length + "|" + z.iter + "|" + z.z);
    console.log("\n");
}

// run all test cases
function runTests() {
    let list1, list2;

    // test 1
    list1 = "a, b, c, c, c, d, e, f, a, b";
    list2 = "b, c, c, e, c, a, f, b";
    test(list1, list2);
}