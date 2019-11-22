#!/usr/bin/env bash

set -e

SCRIPT=`pwd`/$0
FILENAME=`basename $SCRIPT`
PATHNAME=`dirname $SCRIPT`
ROOT=$PATHNAME/..
BUILD_DIR=$ROOT/build
CURRENT_DIR=`pwd`

LIB_DIR=$BUILD_DIR/libdeps
PREFIX_DIR=$LIB_DIR/build/
FAST_MAKE='-j4'

install_vpx(){
  [ -d $LIB_DIR ] || mkdir -p $LIB_DIR
  cd $LIB_DIR
  if [ ! -f ./libvpx-1.5.0.tar.gz ]; then
    # curl -OL http://www.loongnix.org/cgit/libvpx/snapshot/libvpx-1.5.0.tar.gz
    # 使用官方源
    curl -O https://codeload.github.com/webmproject/libvpx/tar.gz/v1.5.0 
    mv v1.5.0 libvpx-1.5.0.tar.gz
  else
    echo "vpx has already download"
  fi

  tar -zxvf libvpx-1.5.0.tar.gz
  cd libvpx-1.5.0 
  ./configure --prefix=$PREFIX_DIR --disable-examples --disable-unit-tests  --enable-static --disable-shared 
  make $FAST_MAKE -s V=0
  make install
  cd $CURRENT_DIR
}

install_x264(){
  [ -d $LIB_DIR ] || mkdir -p $LIB_DIR
  cd $LIB_DIR
  if [ ! -f last_stable_x264.tar.bz2 ]; then
    curl -OL ftp://ftp.videolan.org/pub/videolan/x264/snapshots/last_stable_x264.tar.bz2
  else
    echo "x264 already download"
  fi 

  tar -xjvf last_stable_x264.tar.bz2
  cd x264-snapshot-*
  ./configure --prefix=$PREFIX_DIR  -–enable-static  --disable-asm 
  make $FAST_MAKE -s V=0
  make install install-lib-dev
  make install install-lib-static
  cd $CURRENT_DIR
}

install_opus(){
  [ -d $LIB_DIR ] || mkdir -p $LIB_DIR
  cd $LIB_DIR
  if [ ! -f ./opus-1.1.1.tar.gz ]; then
    # curl -OL http://downloads.xiph.org/releases/opus/opus-1.1.tar.gz
    ## 使用官方源
    curl -O https://ftp.osuosl.org/pub/xiph/releases/opus/opus-1.1.1.tar.gz
  else
    echo "opus already download"
  fi

  tar -zxvf opus-1.1.1.tar.gz
  cd opus-1.1.1
  ./configure --prefix=$PREFIX_DIR --disable-shared
  make $FAST_MAKE -s V=0
  make install
  cd $CURRENT_DIR
}


install_fdk_aac(){
  [ -d $LIB_DIR ] || mkdir -p $LIB_DIR
  cd $LIB_DIR
  if [ ! -f ./fdk-aac-0.1.6.tar.gz ]; then
    curl -OL https://downloads.sourceforge.net/opencore-amr/fdk-aac-0.1.6.tar.gz 
  else
    echo "aac already download"
  fi  

  tar -zxvf fdk-aac-0.1.6.tar.gz  
  cd fdk-aac-0.1.6
  ./configure --prefix=$PREFIX_DIR  --disable-shared
  make $FAST_MAKE -s V=0
  make install
  cd $CURRENT_DIR
}

build_ffmpeg(){
  sudo apt-get -qq install yasm zlib1g-dev
  install_x264
  install_vpx
  install_opus
  install_fdk_aac
  if [ -d $LIB_DIR ]; then
    cd $LIB_DIR
    if [ ! -f ./ffmpeg-4.2.0.tar.bz2 ]; then
      curl -O -L http://ffmpeg.org/releases/ffmpeg-4.2.0.tar.bz2
    else
       echo "already download"
    fi

    tar -xjvf ffmpeg-4.2.0.tar.bz2
    cd ffmpeg-4.2.0
    PKG_CONFIG_PATH=${PREFIX_DIR}/lib/pkgconfig ./configure --prefix=$PREFIX_DIR --disable-nvenc  --disable-avdevice --disable-armv5te --disable-armv6 --disable-armv6t2  --disable-devices --disable-hwaccels --disable-shared --enable-gpl --enable-avresample --enable-libvpx --enable-libx264 --enable-libopus --enable-libfdk_aac --enable-nonfree --extra-cflags="-fPIC" --enable-static --disable-ffplay --disable-ffserver --disable-ffprobe --enable-pic --disable-symver --disable-lzma --disable-vdpau --disable-vaapi --disable-bzlib --extra-cflags='-I'${PREFIX_DIR}'/include/'  --extra-ldflags='-L'${PREFIX_DIR}'/lib'    make $FAST_MAKE -s V=0
    make install
    cd $CURRENT_DIR
  fi
}

mkdir -p $PREFIX_DIR

build_ffmpeg
