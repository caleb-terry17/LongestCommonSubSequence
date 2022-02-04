#include <cassert>

#include "LCS.h"

int main() {
    ///////////////
    // test 1
    ///////////////
    std::cout << "test 1" << std::endl;
    std::vector<int> l1;
    std::vector<int> r1;
    int len = 3;
    for (int i = 0; i < len; ++i) {
        l1.push_back(i);
        r1.push_back(i);
    }
    std::cout << l1 << std::endl;
    std::cout << r1 << std::endl;
    int ret = lcs(l1, r1, len - 1, len - 1);
    std::cout << ret << std::endl;
    assert(ret == 3);
    std::cout << std::endl;

    ///////////////
    // test 2
    ///////////////
    std::cout << "test 2" << std::endl;
    std::vector<int> l2;
    std::vector<int> r2;
    len = 5;
    for (int i = 0; i < len; ++i) {
        l2.push_back(i);
        r2.push_back(i);
    }
    l2[0] = 4;
    l2[4] = 1;
    std::cout << l2 << std::endl;
    std::cout << r2 << std::endl;
    ret = lcs(l2, r2, len - 1, len - 1);
    std::cout << ret << std::endl;
    assert(ret == 3);
    std::cout << std::endl;

    ///////////////
    // test 3
    ///////////////
    std::cout << "test 3" << std::endl;
    std::vector<int> l3;
    std::vector<int> r3;
    len = 5;
    for (int i = 0; i < len; ++i) {
        l3.push_back(i);
        r3.push_back(i);
    }
    r3[2] = 4;
    l3[2] = 1;
    std::cout << l3 << std::endl;
    std::cout << r3 << std::endl;
    ret = lcs(l3, r3, len - 1, len - 1);
    std::cout << ret << std::endl;
    assert(ret == 4);
    std::cout << std::endl;
}