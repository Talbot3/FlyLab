%%
[0-9]+ printf("?");
#      return 0;
.      ECHO;
%%

int main(int argc, char* argv[]) {
  yylex();
}

int yywrap() {
  return 1;
}