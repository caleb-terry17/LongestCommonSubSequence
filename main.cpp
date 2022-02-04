#include <iostream>
#include <vector>

// longest common subsequence
int lcs(std::vector<int>& l, std::vector<int>& r, int lIdx, int rIdx) {
    // idx == -1 => end of check
    if (lIdx == -1 || rIdx == -1) { return 0; }
    // val's == => add one, return and decrement both
    if (l[lIdx] == r[rIdx]) { return lcs(l, r, lIdx - 1, rIdx - 1) + 1; }
    // return greater of two
    int lhs = lcs(l, r, lIdx - 1, rIdx);
    int rhs = lcs(l, r, lIdx, rIdx - 1);
    return (lhs > rhs) ? lhs : rhs;
}

int main() {
    std::vector<int> l;
    std::vector<int> r;
    int len = 3;
    for (int i = 0; i < len; ++i) {
        l.push_back(i);
        r.push_back(i);
    }
    l[2] = 0;
    // l[14] = 31;
    // r[3] = 6;
    l[0] = 1;
    std::cout << lcs(l, r, len - 1, len - 1) << std::endl;
}