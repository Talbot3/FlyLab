#include "except.h"

#include <stdio.h>
Except_T Exception = {
    "UnknowException"
};
int main(int argc, char ** argv) {
 TRY
     printf("hell exception");
     EXCEPT(Exception);
 END_TRY;
 return 0;
}