#include "LCS.h"

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
    std::cout << l << std::endl;
    std::cout << lcs(l, r, len - 1, len - 1) << std::endl;
}