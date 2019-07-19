#include <stdio.h>
 /**
  * @brief  用来说明
  * @note   
  * @retval 
  */
main() {
  int i;
  char c;
  for (i = 0;i<5;++i) {
    scanf("%d", &c);
    printf("%d ", i);
  }
  printf("%c %d", c, i);
  printf("\n");

}