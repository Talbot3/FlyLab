#include <threads.h>
#include <stdio.h>
#define N 100000
char buf1[N][99]={0}, buf2[N][99]={0};
long long old1, old2, limit=N;
long long x = 0;
 
static void do1()  {
   long long o1, o2, n1;
   for (long long i1 = 1; i1 < limit; ++i1) {
      old1 = x, x = i1;
      o1 = old1;  o2 = old2;
      if (o1 > 0) { // x was set by this thread
         if (o1 != i1-1)
            sprintf(buf1[i1], "thread 1: o1=%7lld, i1=%7lld, o2=%7lld", 
                     o1, i1, o2);
      } else {      // x was set by the other thread
         n1 = x, x = i1;
         if (n1 < 0 && n1 > o1) 
            sprintf(buf1[i1], "thread 1: o1=%7lld, i1=%7lld, n1=%7lld", 
                     o1, i1, n1);
      }        
   }
}
 
static void do2()  {
   long long o1, o2, n2;
   for (long long i2 = -1; i2 > -limit; --i2) {
      old2 = x, x = i2;
      o1 = old1; o2 = old2;
      if (o2 < 0) { // x was set by this thread
         if (o2 != i2+1)
            sprintf(buf2[-i2], "thread 2: o2=%7lld, i2=%7lld, o1=%7lld", 
                     o2, i2, o1);
      } else {      // x was set by the other thread
         n2 = x, x = i2;
         if (n2 > 0 && n2 < o2) 
            sprintf(buf2[-i2], "thread 2: o2=%7lld, i2=%7lld, n2=%7lld", 
                     o2, i2, n2);
      }
   }
}
 
int main(int argc, char *argv[])
{ 
   thrd_t thr1; 
   thrd_t thr2;
   thrd_create(&thr1, do1, 0);
   thrd_create(&thr2, do2, 0);
   thrd_join(&thr2, 0);
   thrd_join(&thr1, 0);
   for (long long i = 0; i < limit; ++i) {
      if (buf1[i][0] != '\0')
         printf("%s\n", buf1[i]);
      if (buf2[i][0] != '\0')
         printf("%s\n", buf2[i]);
   }
   return 0;
}