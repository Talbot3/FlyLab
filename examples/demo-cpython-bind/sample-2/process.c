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
        int arg;
        PyObject *arglist;
        PyObject *result;
        arg = 123;
        /* Time to call the callback */
        arglist = Py_BuildValue("(i)", arg);
        // PyObject *item = PyList_GetItem(args, 0);

        PyGILState_STATE gstate;
        gstate = PyGILState_Ensure();

        /* Perform Python actions here. */
        // result = CallSomeFunction();

        // Py_BEGIN_ALLOW_THREADS
        {
          // sleep(3);
        }
        // Py_END_ALLOW_THREADS
         result = PyObject_CallObject(my_callback, arglist);
          Py_DECREF(arglist);
          Py_INCREF(Py_None);
        /* evaluate result or handle exception */

        /* Release the thread. No Python API allowed beyond this point. */
        PyGILState_Release(gstate);
        
        // PyObject_Print(item, stdout, 0); /* BUG! */
        if (result == NULL)
          return Py_None; /* Pass error back */
    }
    return Py_None;
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