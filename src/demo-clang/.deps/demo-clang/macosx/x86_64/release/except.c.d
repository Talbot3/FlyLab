
{
    ["files"] = 
    {
        "except.h"
    ,   "except.c"
    }
,   ["values"] = 
    {
        "xcrun -sdk macosx clang"
    ,   
        {
            "-fvisibility=hidden"
        ,   "-O3"
        ,   "-Qunused-arguments"
        ,   "-isysroot"
        ,   "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.14.sdk"
        }
    }
}