#ifndef VECTOR_H
#define VECTOR_H

#include <iostream>
#include <vector>

template <typename T>
std::ostream& operator<<(std::ostream& out, std::vector<T> v) {
    out << "[";
    for (auto& e : v) {
        out << e << ",";
    }
    out << "\b]";
    return out;
}

#endif