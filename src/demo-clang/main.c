#include<stdio.h>

struct Test1 {
  int i_number;
  double f_number;
  /* data */
} test11 = {.f_number = 33.33 , .i_number = 33};

struct Test2 {
  int i_number;
  float f_number;
  /* data */
} test22 = {.i_number = 33, .f_number = 33.33};

int main(int argv , char ** argc) {
 printf("%lf", test11.f_number);
}