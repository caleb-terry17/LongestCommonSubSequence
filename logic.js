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
    console.log(lcs(list1, list2, list1.length - 1, list2.length - 1));
}

// longest common subsequence
function lcs(l, r, lIdx, rIdx) {
    // idx == -1 => end of check
    if (lIdx == -1 || rIdx == -1) { return 0; }
    // setting outside values
    tag1.innerHTML = l[lIdx];
    tag2.innerHTML = r[rIdx];
    // val's == => add one, return and decrement both
    let total;
    if (l[lIdx] == r[rIdx]) { 
        // lcs computation
        total = lcs(l, r, lIdx - 1, rIdx - 1) + 1;
        // displaying comparison
        style.setProperty("--color2", green);
    }
    // return greater of two
    else {
        // lcs computation
        let lhs = lcs(l, r, lIdx - 1, rIdx);
        let rhs = lcs(l, r, lIdx, rIdx - 1);
        total = (lhs > rhs) ? lhs : rhs;
        // displaying comparison
        style.setProperty("--color2", red);
    }
    return total;
}