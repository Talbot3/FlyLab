CC=clang
CBSJ=pthread.c
CBSJ2=pthread2.c
CBSJ3=pthread3.c
CBSJ4=pthread4.c
CBSJ6=pthread6.c
CBSJ7=pthread7.c
CBSJ8=pthread8.c

EXXX=pthread
EXXX2=pthread2
EXXX3=pthread3
EXXX4=pthread4
EXXX6=pthread6
EXXX7=pthread7
EXXX8=pthread8

CANSHU=-std=c11
LPTHREAD=-lpthread -I /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.14.sdk/usr/include
WARING=-W

start:$(OBJS)
		# $(CC) -o $(EXXX) $(CBSJ) $(CANSHU) $(LPTHREAD) $(WARING)
		# $(CC) -o $(EXXX2) $(CBSJ2) $(CANSHU) $(LPTHREAD) $(WARING)
		$(CC) -o $(EXXX8) $(CBSJ8) $(CANSHU) $(LPTHREAD) $(WARING)
clean:
		rm -rf $(EXXX)