Elementary Data Structure
=========================

.. _data:

Data
----

Data is a set of values of qualitative or quantitative variables. It refers to
some existing information or knowledge.

Everything can be considered as data, such as:

- name, age, address
- numbers, series of numbers
- pixels or images
- linear, polynomial or exponential functions
- trees, graphs, maps, documents

.. _data structures:

Data structures
---------------

(See :ref:`data structure` for definition.)

Data structures can be categorized into two main categories: *primitive* and
*non-primitive* data structures.

**Primitive Data Structure**

Primitive data structures are usually built-in primitive data types found in
programming languages: :code:`integer`, :code:`character`, :code:`float`, etc.

**Non-primitive Data Structure**

Non-primitive data structures built upon primitive data structures, and can be
sorted into two smaller categories: *linear* and *non-linear*.

Some examples of non-primitive data structures include:

- Linear: arrays, queues, stacks, linked lists, etc.
- Non-linear: trees, graphs, etc.

.. _variables:

Variables
---------

Variables are names used to refer to some location in memory, a location that
can be written, retrieved and manipulated. A variable has its own name, and must
be declared and initialized before using.

Declaring a variable shows its specific type, which determines its size in
memory; the range of values that can be stored with it; and the set of
operations that can be applied to it.

**Global variables**

Global variables are variables that are visible and accessible throughout the
program. Their values can be changed anywhere within the code.

**Local variables**

Local variables are variables that are either: *a variable declared within a
function* or *an argument passed to a function*. This type of variable can only
be used within its respective function. After execution, they will be removed
from memory.

.. _functions:

Functions
---------

Functions are named sections of a computer program that performs a specific task
and returns a value. It can be called or used in other functions.

.. _pointers:

Pointers
--------

Pointers are variables whose values are addresses of another variable, i.e. the
direct address of a memory location. They must be declared before use, similar
to variables.

References of pointers must be initialized when declared. Pointers can be
initialized with the value :code:`NULL`.

- :code:`&` or ampersand indicate the reference of a variable.
- :code:`*` allows getting the value of the variable pointed by a pointer.

.. _references:

References
----------

If we consider a variable name as a label attached to its location in memory, a
reference is similar to another label attached to that memory location.

They are often confused with pointers (see :ref:`pointers`), but there are a few
key differences between these two:

- Compilers generate a reference to each variable after declaration
- There are **no** :code:`NULL` references. All references must connect to a
  legitimate piece of memory.
- Once a reference is initialized to an object, it cannot be changed. Pointers
  can be changed any time.
- A reference **must** be initialized when declared. Pointers can be initialized
  any time.
