#include <Python.h>

// Function 1: A simple 'hello world' function
static PyObject* helloworld(PyObject* self, PyObject* args)
{
    printf("Hello World\n");
    return Py_None;
}

static PyObject *method_fputs(PyObject *self, PyObject *args){
    char *str, *filename = NULL;
    int bytes_copied = -1;

    /* Parse arguments */
    if(!PyArg_ParseTuple(args, "ss", &str, &filename)) {
        return NULL;
    }

    FILE *fp = fopen(filename, "w");
    bytes_copied = fputs(str, fp);
    fclose(fp);

    return PyLong_FromLong(bytes_copied);
}

// Our Module's Function Definition struct
// We require this `NULL` to signal the end of our method
// definition
static PyMethodDef myMethods[] = {
    {"fputs", method_fputs, METH_VARARGS, "Python interface for fputs C library function"},
    { "helloworld", helloworld, METH_NOARGS, "Prints Hello World" },
    { NULL, NULL, 0, NULL }
};

// Our Module Definition struct
static struct PyModuleDef myModule = {
    PyModuleDef_HEAD_INIT,
    "myModule",
    "Test Module",
    -1,
    myMethods
};


// Initializes our module using our above struct
PyMODINIT_FUNC PyInit_myModule(void) {
    /* Assign module value */
    PyObject *module = PyModule_Create(&myModule);

    /* Add int constant by name */
    PyModule_AddIntConstant(module, "FPUTS_FLAG", 64);

    /* Define int macro */
    #define FPUTS_MACRO 256

    /* Add macro to module */
    PyModule_AddIntMacro(module, FPUTS_MACRO);

    return module;
}