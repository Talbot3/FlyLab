#include <Python.h>

static PyObject *my_callback = NULL;

static PyObject *
my_set_callback(PyObject *dummy, PyObject *args)
{
    PyObject *result = NULL;
    PyObject *temp;

    if (PyArg_ParseTuple(args, "O:set_callback", &temp)) {
        if (!PyCallable_Check(temp)) {
            PyErr_SetString(PyExc_TypeError, "parameter must be callable");
            return NULL;
        }
        Py_XINCREF(temp);         /* Add a reference to new callback */
        Py_XDECREF(my_callback);  /* Dispose of previous callback */
        my_callback = temp;       /* Remember new callback */
        /* Boilerplate to return "None" */
        Py_INCREF(Py_None);
        result = Py_None;
    }
    return result;
}

static PyMethodDef myMethods[] = {
  {"my_set_callback", my_set_callback, METH_VARARGS, "Python interface callback"},
  {NULL, NULL, 0, NULL}
};

static struct PyModuleDef myModule = {
  PyModuleDef_HEAD_INIT,
  "myModule",
  "Test Module",
  -1,
  myMethods
};

PyMODINIT_FUNC PyInit_myModule(void) {
  PyObject *module = PyModule_Create(&myModule);

  return module;
}