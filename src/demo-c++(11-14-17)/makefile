C = gcc
CXX = clang++

SOURCE_C = foo.c
OBJECTS_C = foo.o

SOURCE_CXX = 1.1.cpp

TARGET = 1.1

LDFAGS_COMMON = std=c++17

all:
	$(C) -c $(SOURCE_C)
	$(CXX) $(SOURCE_CXX) $(OBJECTS_C) $(LDFAGS_COMMON) -o $(TARGET)

clean:
	rm -rf *.o $(TARGET)