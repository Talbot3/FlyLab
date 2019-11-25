cmake_minimum_required(VERSION 3.5.0)
project(demo-libav)
set(Boost_USE_STATIC_LIBS ON)


set(CMAKE_CXX_FLAGS "-O3 -Wall ${CMAKE_CXX_FLAGS}")
add_definitions(-D__STDC_CONSTANT_MACROS)

add_definitions(-DRTP2MEDIA_VERSION="1.0.1")

string(TIMESTAMP BUILDTIME "%Y%m%d-%H:%M")
add_definitions(-DRTP2MEDIA_BUILDTIME="${BUILDTIME}")

include_directories(/home/wangc/FlyLab/example/demo-libav/build/libdeps/build/include)
link_directories(/home/wangc/FlyLab/example/demo-libav/build/libdeps/build/lib)

set(SOURCE_FILES
        src/encode_video_mult_rtmp.c
)

add_executable(demo-libav ${SOURCE_FILES})


target_link_libraries(demo-libav libavfilter.a)
target_link_libraries(demo-libav libavformat.a)
target_link_libraries(demo-libav libavcodec.a)
target_link_libraries(demo-libav libswresample.a)
target_link_libraries(demo-libav libswscale.a)
target_link_libraries(demo-libav libavutil.a)
target_link_libraries(demo-libav libopus.a)
target_link_libraries(demo-libav libvpx.a)
target_link_libraries(demo-libav libfdk-aac.a)

if (UNIX AND NOT APPLE)
  target_link_libraries(demo-libav m z pthread dl X11 vdpau va va-drm va-x11 )
endif (UNIX)
install(PROGRAMS build/demo-libav DESTINATION /usr/local/bin/)
