// document tags to display compare values
let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");
let lcsOut = document.getElementById("lcsOutput");

function computeLCS() {
    // get input from list1, list2
    let str1 = document.getElementById("list1").value;
    let str2 = document.getElementById("list2").value;

    // remove all whitespace
    str1 = str1.split(" ").join("");
    str2 = str2.split(" ").join("");

    // split by ,
    let list1 = str1.split(",");
    let list2 = str2.split(",");

    // running methods and outputting data
    let recursive = lcsRec(list1, list2, list1.length - 1, list2.length - 1);
    let dynamic = lcsDyn(list1, list2, list1.length - 1, list2.length - 1);

    console.log(recursive.list);
    console.log(dynamic.list);

    lcsOut.innerHTML = "The Longest Common Subsequence is: " + dynamic.list;
}

// longest common subsequence
function lcsRec(l, r, lIdx, rIdx) {
    let iter = 0;  // iterations for lcs

    // recursive function to run lcs algorithm
    function lcs(l, r, lIdx, rIdx) {
        // idx == -1 => end of check
        if (lIdx == -1 || rIdx == -1) { return {"len": 0, "list": []}; }

        // val's == => add one, return and decrement both
        let obj;
        if (l[lIdx] == r[rIdx]) { 
            // lcs computation
            obj = lcs(l, r, lIdx - 1, rIdx - 1);
            obj.len++;
            obj.list.push(l[lIdx]);
        } else {  // return greater of two
            // lcs computation
            let lhs = lcs(l, r, lIdx - 1, rIdx);
            let rhs = lcs(l, r, lIdx, rIdx - 1);
            obj = (lhs.len > rhs.len) ? lhs : rhs;
        }

        iter++;
        return obj;
    }

    // run lcs recursive algorithm
    let z = lcs(l, r, lIdx, rIdx);
    
    return {"iter": iter, "list": z.list};
}

///////////////////
// dynamic approach to lcs
///////////////////
// creates array for lcsDyn
function fillAry(list1, list2, lLen, rLen) {
    // construct array and fill with 0's
    let ary = [[]];
    let lcsRow = lLen + 1;
    let lcsCol = rLen + 1;
    for (let i = 0; i <= lcsRow; i++) {
        ary[i] = [];
        for (let j = 0; j <= lcsCol; ++j) {
            ary[i][j] = 0;
        }
    }

    // update values according to matches
    for (let i = 1; i <= lcsRow; ++i) {
        for (let j = 1; j <= lcsCol; ++j) {
            // i == j
            if (list1[i - 1] == list2[j - 1]) { ary[i][j] = ary[i - 1][j - 1] + 1; }
            // i != j
            else {
                let lhs = ary[i][j - 1];
                let rhs = ary[i - 1][j];
                ary[i][j] = lhs > rhs ? lhs : rhs;
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

    return {"iter": iter, "list": z.reverse()};
}