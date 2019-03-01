#include <stdio.h>
#include "average.h"
struct Test1 {
  int i_number;
  double f_number;
  /* data */
} test11 = {.f_number = 33.33 , .i_number = 33};

typedef struct  {
  int i_number;
  double f_number;
  /* data */
} Test2;
Test2 test22 = {.i_number = 33, .f_number = 33.33};

void print_test2(Test2 test) {
  printf("\n%lf ", test.f_number);
  printf("\n%d ", test.i_number);
}

int main(int argv , char ** argc) {
//  printf("%lf", test11.f_number);
//  print_test2(test22);
//  print_test2((Test2) {.i_number=44, .f_number=44.44444});
 void (*print_ptr)(Test2);
 print_ptr = print_test2;
//  print_ptr(test22);
 printf("%lf", average(33.33, 44.44));
}