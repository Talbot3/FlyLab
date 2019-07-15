#include <stdio.h>
#define ARRAY_SIZE 5
int main(int argc, char **argv) {
  int array[ARRAY_SIZE] = {3,3,3,3,3};
  int *pi = NULL;
  int zero = 0x666666;
  for (pi = &array[0];pi < &array[ARRAY_SIZE];++pi) {
    *pi = 0;
  }
  for (int i=0; i< ARRAY_SIZE; ++i) {
    printf("%d", array[i]);
  }
  // pi =(int *)(zero);
  // printf("\n%p %d", pi, *pi);

  char str[]= "hello";
  // 此处为硬编码，未使用栈、堆内存，故无法更新新值
  char *str2 = "world";
  char str3[10];
  printf("input the value \n");
  // str2 world 存储于代码段，无法更改，因此异常于此处。
  // *str2 = "myfdasfdasfdsafdas";
  // scanf("%s", str2);
  
  // 如果输入的长度超出定义了，将覆盖其他的值
  // 此示例中，将str3的值覆盖掉了
  scanf("%s", str);

  printf("str is %s\n", str);
  printf("str2 is %s\n", str2);
  printf("str3 is %s \n", str3);

  return 0;
}