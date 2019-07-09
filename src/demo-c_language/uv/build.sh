#!/usr/bin/env bash

libuv_flags=`pkg-config --cflags --libs libuv`;
if [$libuv_flags]; then
  echo "libuv uninstall ..., please run `brew install libuv` on macos, other os query by google by you self"
else 
  echo "libuv installed ."
  echo ${libuv_flags}
fi
clang -o uv src/uvget.c  -I/usr/local/include -L/usr/lib -lcur $libcurl_flags
# ./uvtest && rm -rf uvtest
