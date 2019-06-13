CC=gcc
EXXX=a.out
CBSJ=src/pool_sample.c
CANSHU=-std=c11
LPTHREAD=-lpj-x86_64-apple-darwin18.6.0 -I/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.14.sdk/usr/include -I/usr/local/lib/include
WARING=-W -g

start:$(OBJS)
		$(CC) -o $(EXXX) $(CBSJ) $(CANSHU) $(LPTHREAD) $(WARING)
clean:
		rm -rf $(EXXX)