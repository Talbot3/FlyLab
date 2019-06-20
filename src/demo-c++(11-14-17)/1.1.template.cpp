#include <iostream>

// sizeof 计算参数的个数
template<typename... Args>
void magic(Args... args) {
  std::cout << sizeof...(args) << std::endl;
}

// clang++ -O 1.1.template.cpp -std=c++17
template<typename T0, typename... T>
void printf(T0 t0, T... t) {
  std::cout << t0 << std::endl;
  // 可变参数模板展开 c++17 支持
  if constexpr (sizeof...(t) > 0) printf(t...);
}

template<typename T, typename... Args>
auto print(T value, Args... args) {
    std::cout << value << std::endl;
    return std::initializer_list<T>{([&] {
        std::cout << args << std::endl;
    }(), value)...};
}

// 折叠表达式
template<typename ...T>
auto sum(T ...t) {
  return (t + ...);
}

// 显示虚函数重载
struct Base {
  virtual void foo(int);
};

struct SubClass: Base {
  virtual void foo(int) override;
};


class Magic {
  public:
  Magic() = default;
  Magic& operator=(const Magic&) = delete;
  Magic(int magic_number);
};

// 枚举类 类型安全
enum class new_enum:unsigned int {
  value1,
  value2,
  value3 = 100,
  value4 = 100
};

template<typename T>
std::ostream& operator<<(typename std::enable_if<std::is_enum<T>::value, std::ostream>::type& stream, const T& e)
{
    return stream << static_cast<typename std::underlying_type<T>::type>(e);
}

int main(void) {
  magic();
  magic(1);
  magic(1, "");
  printf("Hi", ",", "Good", "Morning");
  print(1,2.1,"123");
  std::cout << sum(1,2,3,4,5,6,7,8,9,10) << std::endl;
  if (new_enum::value3 == new_enum::value4) {
    std::cout << "new_enum:value3 == new_enum::value4" << std::endl;
  }
  std::cout << new_enum::value3 << std::endl;

}