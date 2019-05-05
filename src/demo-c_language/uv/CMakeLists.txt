cmake_minimum_required (VERSION 2.6)
project (LibUvTutorial)

set (Tutorial_VERSION_MAJOR 1)
set (Tutorial_VERSION_MINOR 0)

include(CheckCCompilerFlag)


add_executable(LibUvTutorial src/exp.c)

# include_directories(/usr/local/include/)
# link_directories(/usr/local/lib)

# target_link_libraries(LibUvTutorial libuv.a)

# install(PROGRAMS build/ms-2rtp DESTINATION /usr/local/bin/)