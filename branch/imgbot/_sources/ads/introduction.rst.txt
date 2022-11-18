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

Data structure is a data organization, management and storage format that is
usually chosen for efficient access to data.

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

**Finiteness**
Finiteness of an algorithm means it must always terminate after a *finite*
number of steps. The *stopping conditions* of the algorithm should be assessed.

**Definiteness**
Each instruction of an algorithm should be defined precisely and concisely.
*Repetition* should be avoided at all costs.

**Input/Output**
An algorithms may *not* have inputs, but it will have *one or more*
outputs available when the algorithm terminates.

**Effectiveness**
All operations in an algorithm must be *sufficiently basic* that they can be
done exactly as given and in *finite* time.

.. _criterias:

Evaluation criterias
~~~~~~~~~~~~~~~~~~~~

There are a few criterias often used to evaluate an algorithm.

**Correctness**
An algorithm should always produce consistent, expected results for each given
input.

**Efficiency/Complexity**
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

.. _greedy:

Greedy
######

A greedy algorithm takes the best possible right now, without regard for later
consequences. It will then choose a local optimum at each step to find a global
optimum.

Greedy algorithms work well sometimes for optimization problems.

.. _backtracking:

Backtracking
############

A backtracking algorithm bases on recursion (see :ref:`recursive`). It first
starts with one possible move out of many, then proceeds to find the next move
from that starting point. If this satisfies the given constraints, it will
continue; else it will return to the previous move.

Sometimes, backtracking problems will not have solutions due to the given
constraints.

.. _randomized:

Randomized
##########

A randomized algorithm employs a degree of randomness as part of its logic.
For example, using a random number as a pivot in `quicksort`.

.. _algorithm complexity:

Algorithm complexity
~~~~~~~~~~~~~~~~~~~~

Complexity of an algorithm is a theoretical evaluation on how good it is in
terms of *running time* and *computational memory*.

There are three main *asymptomtic notations* when it comes to complexity, and those are: Big
:math:`\Theta`, Big :math:`O` and Big :math:`\Omega`. These notations represent
the mathematical limits of an algorithm.

**Big Theta** represents the exact performance value of an algorithm, or a
useful range between its upper bound and lower bound.

**Big O** represents the *upper bound* of a given algorithm, or the longest an
algorithm could take for any given data set.

**Big Omega** is the opposite of Big O, as it represents the *lower bound* of a
given algorithm, or when the algorithm reaches top speed.

Assume that the running time of an algorithm is :math:`T(n)` with :math:`n`
objects, we have the following:

- Big :math:`\Theta`: :math:`T(n) = \Theta(f(n))` if :math:`\exists k_1, k_2,
  n_0 \in \mathbb{N}^+, \forall n \geq n_0: k_1 f(n) \leq T(n) \leq k_2 f(n)`

- Big :math:`O`: :math:`T(n) = O(f(n))` if :math:`\exists k, n_0 \in
  \mathbb{N}^+, \forall n \geq n_0: T(n) \leq kf(n)`

- Big :math:`\Omega`: :math:`T(n) = \Omega(f(n))` if :math:`\exists k, n_0 \in
  \mathbb{N}^+, \forall n \geq n_0: T(n) \geq kf(n)`

Any operation, statement, instruction, etc. will have a complexity of
:math:`O(1)`. Loops will have a complexity of :math:`O(n^k)`, with :math:`k`
being the number of nested loops.

There are also several properties for complexity computation, given below:

.. math::
   \begin{aligned}
    & f(n) = O(h(n)) \rightarrow n \times f(n) = O(n \times h(n)) \\
    & f(n) = O(h(n)) \rightarrow k \times f(n) = O(h(n)) \ \text{where} \ k \
    \text{is a constant} \\
    & f(n) = O(h(n)) \rightarrow g(n) = O(y(n)) \rightarrow f(n) \times g(n) =
    O(h(n) \times y(n)) \\
    & f(n) + g(n) = \text{max}(O(f(n)), O(y(n)))
   \end{aligned}

A table of common time complexities and examples where they can be found is
available `here <https://en.wikipedia.org/wiki/Time_complexity#Table_of_common_time_complexities>`__.

