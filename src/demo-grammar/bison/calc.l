%{
#include "y.tab.h"
%}

%%
[0-9]*\.?[0-9]+ { yylval = atof(yytext); return T_NUM; }
[-/+*()\n] { return yytext[0]; }
%%

int yywrap(void) {
  return 1;
}