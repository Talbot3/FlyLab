from distutils.core import setup, Extension
setup(name = 'myModule', version = '1.0',  \
   ext_modules = [Extension('myModule', ['process.c'])])

def main():
    setup(name="fputs",
          version="1.0.0",
          description="Python interface for the fputs C library function",
          author="<your name>",
          author_email="your_email@gmail.com",
          ext_modules=[Extension("myModule", ["process.c"])])

if __name__ == "__main__":
    main()