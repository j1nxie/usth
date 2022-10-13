Introduction to Algorithms and Data Structures
==============================================

.. _program:

Computer program
----------------

A computer program is a **collection of instructions** a computer can execute to
perform a task.

.. _data structure:

Data structure
--------------

A data structure is a data organization, management and storage format that
enables efficient access and computation.

.. _flowchart:
   
Flowcharts
----------

Flowcharts are used in designing and documenting simple processes or programs
(see :ref:`program`). They help with visualizing and understanding a process. A
table of common symbols used in flowcharts can be seen `here`_.

.. _here: https://en.wikipedia.org/wiki/Flowchart#Common_symbols

.. _pseudocode:

Pseudocode
----------

Pseudocode is a high-level description of an algorithm (see :ref:`algorithm`). It is usually concrete
and easy for human comprehension. An example of pseudocode would be:

.. code-block::
   :caption: ``findMax(a)``
   :linenos:

   for i = 2 -> n do
      if a[i] > Max then
         Max = a[i]
      end if
   end for
   return Max

.. _algorithm:

Algorithm
---------

An algorithm is a finite sequence of well-defined instructions to **solve a
specific problem or to perform a computation**.

.. _properties:

Properties
~~~~~~~~~~

Good algorithms must possess these following properties.

.. _finiteness:

Finiteness
##########

Finiteness of an algorithm means it must always terminate after a *finite*
number of steps. The *stopping conditions* of the algorithm should be assessed.

.. _definiteness:

Definiteness
############

Each instruction of an algorithm should be defined precisely and concisely.
*Repetition* should be avoided at all costs.

.. _input/output:

Input/Output
############

An algorithms may *not* have **inputs**, but it will have *one or more*
**outputs** available when the algorithm terminates.

.. _effectiveness:

Effectiveness
#############

All operations in an algorithm must be *sufficiently basic* that they can be
done exactly as given and in *finite* time.

.. _criterias:

Evaluation criterias
~~~~~~~~~~~~~~~~~~~~

There are a few criterias often used to evaluate an algorithm.

.. _correctness:

Correctness
###########

Correctness evaluates whether an algorithm always produces the expected results
for each given input.

.. _complexity:

Efficiency/Complexity
#####################

An algorithm should be optimized to have the lowest running time possible, also
known as having the lowest *time complexity*. During implementation of the
algorithm, as variables are declared and located in memory, an algorithm should
also be optimized to have the lowest allocated memory possible, also known as
having the lowest *space complexity*.

.. _categories:

Categories
~~~~~~~~~~

Algorithms can be divided into a few categories, depending on the method used to
solve a certain problem.

.. _recursive:

Recursive
#########

A simple recursive algorithm converts the main problem into smaller
sub-problems, with certain base cases. It will solve the base cases directly,
and it will recur (hence, "recursive") with a simpler sub-problem.

The sub-problems may overlap. As a recursive algorithm will solve all
sub-problems until they reach the base case, sub-problems may be solved more
than once.

.. _divide and conquer:

Divide and Conquer
##################

Divide and conquer algorithms are an extension of the simple recursive
algorithms (see :ref:`recursive`). Given a problem to be solved, these
algorithms will split it into several smaller problems. Afterwards, it will
solve each problem recursively, and combine all the sub-solutions to produce a
solution for the original problem.

Traditionally, an algorithm is considered a "divide and conquer" algorithm if it
contains at least two recursive calls.

Some examples of divide and conquer algorithms would be `quicksort`_ and
`merge sort`_.

.. _quicksort: https://simple.wikipedia.org/wiki/Quicksort
.. _merge sort: https://simple.wikipedia.org/wiki/Merge_sort

.. _dynamic programming:

Dynamic Programming
###################

A dynamic programming algorithm remembers past results and uses them to find new
results. The algorithm will cut the problem into a set of simpler sub-problems.
Afterwards, it will solve each sub-problem *once*, and store their solutions,
which can be used in later stages.

The biggest difference between dynamic programming and divide and conquer (see
:ref:`Divide and Conquer`) is that sub-problems generally don't need to overlap.

An example of dynamic programming would be this implementation in finding the
:math:`n^{th}` number in the Fibonacci sequence:

.. code-block:: cpp
   :caption: `Fibonacci`
   :linenos:

   int fibo(n) {
      if ((n == 0) || (n == 1)) {
         return n;
      }

      if (fibo(n) != 0) {
         return fibo(n);
      }

      return fibo(n - 1) + fibo(n + 2);
   }
