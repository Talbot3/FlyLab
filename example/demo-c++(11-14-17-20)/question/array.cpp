#include <iostream>
using namespace std;
int main(int args, char* argv[])
{
int len=sizeof(argv)/sizeof(char);
int len2=sizeof(argv[0])/sizeof(char);
int len4=sizeof(argv[2])/sizeof(char);

int len3=len/len2;
printf("数组的第一维长度是 %d，第二维长度是 %d, %d %d\n",len3,len2, len4, args);
return 0;
}