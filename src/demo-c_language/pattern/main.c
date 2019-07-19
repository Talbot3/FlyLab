#include <stdio.h>

void PrintNum(int n);
void ShowNume(int n, void(*prt)(int));

void PrintMessage1();
void PrintMessage2();
void PrintMessage3();
void ShowMessage(void (*prt)());

int main(void) {
  ShowNume(11111, PrintNum);
  ShowNume(22222, PrintNum);

  ShowMessage(PrintMessage1);
  ShowMessage(PrintMessage2);
  ShowMessage(PrintMessage3);
  return 0;
}

void PrintNum(int n) {
  printf("Test1 is called, the num is %d\n", n);
}

void ShowNume(int n, void(*prt)(int)) {
  (* prt)(n);
}

void PrintMessage1() {
  printf("This is the message 1!\n");
}

void PrintMessage2() {
  printf("This is the message 2\n");
}

void PrintMessage3() {
  printf("This is the message 3\n");
}

void ShowMessage(void (* ptr)()) {
  (*ptr)();
}