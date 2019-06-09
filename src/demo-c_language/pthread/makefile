CC=clang
CBSJ=pthread.c
CBSJ2=pthread2.c
CBSJ3=pthread3.c
CBSJ4=pthread4.c
EXXX=pthread
EXXX2=pthread2
EXXX3=pthread3
EXXX4=pthread4
CANSHU=-std=c11
LPTHREAD=-lpthread -I /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.14.sdk/usr/include
WARING=-W

start:$(OBJS)
		# $(CC) -o $(EXXX) $(CBSJ) $(CANSHU) $(LPTHREAD) $(WARING)
		# $(CC) -o $(EXXX2) $(CBSJ2) $(CANSHU) $(LPTHREAD) $(WARING)
		$(CC) -o $(EXXX4) $(CBSJ4) $(CANSHU) $(LPTHREAD) $(WARING)
clean:
		rm -rf $(EXXX)