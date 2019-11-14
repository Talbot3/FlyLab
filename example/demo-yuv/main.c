#include <stdio.h>
#include <alloca.h>

void yuv420p_y(char *inputPath, char *outputPath, int width, int height) {

    FILE *inFile = fopen(inputPath, "rb+");
    FILE *outFile = fopen(outputPath, "wb+");

    unsigned char *data = (unsigned char *) malloc(width * height * 3 / 2);

    fread(data, 1, width * height * 3 / 2, inFile);

    //Y分量
    fwrite(data, 1, width * height, outFile);

    unsigned char *buffer = (unsigned char *) malloc(width * height / 4);
    memset(buffer, 0x80, width * height / 4);
    //U分量
    fwrite(buffer, 1, width * height / 4, outFile);
    //V分量
    fwrite(buffer, 1, width * height / 4, outFile);

    free(buffer);
    free(data);
    fclose(inFile);
    fclose(outFile);
}

int main(int argc, char* argv[]) {
  yuv420p_y("./output.yuv","./output_gray.yuv", 510, 510);
}