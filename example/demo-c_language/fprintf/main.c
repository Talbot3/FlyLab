#include<stdio.h>

int main () {
    printf( "hello " );
    fprintf( stderr, "HELP!" );
    printf( " world\n" );
    return 0;
}

// $ ./a.exe
// HELP!hello  world
// $ ./a.exe 2> tmp1
// hello  world
// $ ./a.exe 1> tmp1
// HELP!$