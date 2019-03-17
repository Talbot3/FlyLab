except.check:
	clang except.test.c -fsyntax-only
except.print:
	clang except.test.c -S -emit-llvm -o -
except.mathine:
	clang except.test.c -S -O3 -o -
compile:
	clang -undefined dynamic_lookup -o except except.test.c