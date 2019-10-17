g++ exp2.cc -o mutex
g++ exp3.cc -o lockfree
clang++  exp4.cc -std=c++1y -o exp4

echo "lock      program time: "
./mutex 
echo "lock-free program time: "
./lockfree
echo "example4"
./exp4