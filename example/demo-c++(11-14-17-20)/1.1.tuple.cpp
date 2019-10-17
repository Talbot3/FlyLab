#include <iostream>
#include <vector>
std::tuple<int, double, std::string> foo() {
  return std::make_tuple(1,2.3, "456");
}

template<typename T, typename U>
auto add3(T x, U y) {
  return x + y;
}

template<typename T>
auto print_type_info(const T&t) {
  if constexpr (std::is_integral<T>::value) {
    return t + 1;
  } else {
    return t + 0.001;
  }
}

int main() {
  auto [x,y,z] = foo();
  std::cout << x << ", " << y << ", " << z << std::endl;
  std::cout << add3<int, double>(22, 33.3) << std::endl;

  std::cout << print_type_info(5) << std::endl;
  std::cout << print_type_info(3.14) << std::endl;

  std::vector<int> vec = {1,2,3,4};
  if (auto itr = std::find(vec.begin(), vec.end(), 3); itr != vec.end())
    *itr = 4;
  for (auto element: vec) {
    std::cout <<element << std::endl;
  }

  for (auto &element : vec) {
    element += 1;
  }
  for (auto element : vec) {
    std::cout << element << std::endl;
  }
  return 
  0;
}