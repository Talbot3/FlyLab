cmake_minimum_required(VERSION 3.5.0)
project(except.test)

set(CMAKE_C17_STANDARD 17)

set(CMAKE_CXX_FLAGS "-O3 -Wall ${CMAKE_CXX_FLAGS}")
add_definitions(-D__STDC_CONSTANT_MACROS)

add_definitions(-DRTP2MEDIA_VERSION="1.0.4")

string(TIMESTAMP BUILDTIME "%Y%m%d-%H:%M")
add_definitions(-DRTP2MEDIA_BUILDTIME="${BUILDTIME}")

include_directories(./build/libdeps/build/include/ ./include/)
link_directories(./build/libdeps/build/lib/)

if (APPLE)
  include_directories(/usr/local/include/)
  link_directories(/usr/local/lib)
endif (APPLE)

set(SOURCE_FILES except.test.c)

add_executable(except ${SOURCE_FILES})

# target_link_libraries(gray_img libavfilter.a)
# target_link_libraries(gray_img libavformat.a)
# target_link_libraries(gray_img libavcodec.a)
# target_link_libraries(gray_img libswresample.a)
# target_link_libraries(gray_img libswscale.a)
# target_link_libraries(gray_img libavutil.a)
# target_link_libraries(gray_img libopus.a)
# target_link_libraries(gray_img libvpx.a)
# target_link_libraries(gray_img libx264.a)
# target_link_libraries(gray_img libfdk-aac.a)
# target_link_libraries(gray_img libconfig++.a)
if (UNIX)
  target_link_libraries(except.test m z pthread dl)
endif (UNIX)
install(PROGRAMS build/except.test DESTINATION /usr/local/bin/)
