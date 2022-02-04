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

let iter = 0;

// longest common subsequence
function lcs(l, r, lIdx, rIdx) {
    iter++;
    // idx == -1 => end of check
    if (lIdx == -1 || rIdx == -1) { return 0; }
    // val's == => add one, return and decrement both
    let total;
    if (l[lIdx] == r[rIdx]) { total = lcs(l, r, lIdx - 1, rIdx - 1) + 1; }
    // return greater of two
    else {
        let lhs = lcs(l, r, lIdx - 1, rIdx);
        let rhs = lcs(l, r, lIdx, rIdx - 1);
        total = (lhs > rhs) ? lhs : rhs;
    }
    return total;
}