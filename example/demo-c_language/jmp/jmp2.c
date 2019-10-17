#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <setjmp.h>
#define TRY do{ jmp_buf ex_buf__; switch( setjmp(ex_buf__) ){ case 0: while(1){
#define CATCH(x) break; case x:
#define FINALLY break; } default: {
#define ETRY break; } } }while(0)
#define THROW(x) longjmp(ex_buf__, x)
double diva(double num1,double num2)         //两数相除函数 
{
    double re;
    re=num1/num2;
    return re;
}
int main()
{
  double a,b,result;
  printf("请输入第一个数字：");
  scanf("%lf",&a);
  printf("请输入第二个数字：");
  scanf("%lf",&b);
  // assert(0!=b);
  TRY
  {
    if(0==b) 
      THROW(1);
  }
  CATCH(1)
  {
    printf("被除数不可为0");
  }
  ETRY;
  // 如果除数为0终止程序 
  // exit(EXIT_FAILURE);
  
  result=diva(a,b);

  printf("相除的结果是: %.2lf\n",result);    
  return 0;
}