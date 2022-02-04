#ifndef LCS_H
#define LCS_H

#include "vector.h"

// longest common subsequence
template <typename T>
int lcs(std::vector<T>& l, std::vector<T>& r, int lIdx, int rIdx) {
    // idx == -1 => end of check
    if (lIdx == -1 || rIdx == -1) { return 0; }
    // val's == => add one, return and decrement both
    if (l[lIdx] == r[rIdx]) { return lcs(l, r, lIdx - 1, rIdx - 1) + 1; }
    // return greater of two
    int lhs = lcs(l, r, lIdx - 1, rIdx);
    int rhs = lcs(l, r, lIdx, rIdx - 1);
    return (lhs > rhs) ? lhs : rhs;
}

#endif