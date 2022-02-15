// imports for testing from logic
import {
    lcs, 
    fillAry,
    lcsDyn,
    printIter
} from '../logic.js';

// runs a single test case given two string inputs (comma delimited) 
function test(l, r) {
    l = l.split(",");
    r = r.split(",");
    console.log("lcs: " + lcs(list1, list2, list1.length - 1, list2.length - 1));
    fillAry(list1.length, list2.length);
    console.log("lcsDyn: " + lcsDyn(list1, list2, list1.length - 1, list2.length - 1));
    printIter();
}

// run all test cases
function runTests() {
    let list1, list2;

    // test 1
    list1 = "a, b, c, c, c, d, e, f, a, b";
    list2 = "b, c, c, e, c, a, f, b";
    test(list1, list2);
}

runTests();