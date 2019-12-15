LIBS=$(pkg-config --libs tap)
# echo ${LIBS}
gcc main.c ${LIBS} -ltap
./a.out