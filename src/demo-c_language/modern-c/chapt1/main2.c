#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <tgmath.h>


int main(int argc, char *argv[argc + 1]) {
  printf("argc %d\n%s\n", argc, *argv);
  puts("Hello␣world!");
  if (argc > 1) {
    while (true) {
      puts("some␣programs␣never␣stop");
    }
  } else {
    do {
      puts("but␣this␣one␣does");
    } while (false);
  }

  double const eps = 1E-9;
  double const a = 34.0;
  double x = 0.5;
  while(fabs(1.0 - a*x) >= eps) {
    x *= (2.0 -a*x);
  }

  return EXIT_SUCCESS;
}