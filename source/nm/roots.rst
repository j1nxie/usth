Roots of Non-linear equations
=============================

In this section, we will go through some of the methods to find the roots of a non-linear equation. We will start with the simplest method, the bisection method, and then move on to the Newton-Raphson method.

Bisection method
----------------

The bisection method is a very simple method to find the roots of a non-linear equation. It is also called the binary search method. The method is based on the fact that if a function is continuous and has a root in the interval [a,b], then the function must have a different sign at the endpoints of the interval.

Although the method is simple, it is **not very efficient**. It is also **not very robust**. The method is based on the fact that the function must have a different sign at the endpoints of the interval. If the function has a root at one of the endpoints, then the method will not work. The method also requires that the function be continuous. If the function is not continuous, then the method will not work.

Steps to find the root of a non-linear equation using the bisection method:

**Step 1**: Choose the interval [a,b] such that f(a) and f(b) have different signs.

**Step 2**: Find the midpoint of the interval:

.. math::
  
   c = \frac{a+b}{2}


**Step 3**: If :math:`f(c) = 0` then :math:`c` is the root of the equation. If :math:`f(c) \neq 0`, then repeat steps 2 and 3 with the new interval :math:`[a,c]` or :math:`[c,b]` depending on the sign of :math:`f(c)`.

- If :math:`f(c) < 0`, then we assume :math:`a = c`

- If :math:`f(c) > 0`, then we assume :math:`b = c`

**Step 4**: Repeat steps 2 and 3 until the desired accuracy is achieved.

**Example**: Find the root of the equation :math:`f(x) = x^3 - x^2 - 3` in the interval [1,2].

**[Sol]**:

First, find the midpoint of the interval, in this case:

.. math::
    
   c = \frac{1+2}{2} = 1.5

Then, evaluate the function at the midpoint:

.. math::
    
   f(1.5) = (1.5)^3 - (1.5)^2 - 3 = -1.875

Because :math:`f(c) < 0`, we assume :math:`a = c` . Therefore, we repeat the process with the interval [1.5, 2].

.. math::
    
   c = \frac{1.5+2}{2} = 1.75

Then, evaluate the function at the midpoint:

.. math::
    
   f(1.75) = (1.75)^3 - (1.75)^2 - 3 = -0.7031

Because :math:`f(c) < 0`, we assume :math:`a = c`. Therefore, we repeat the process with the interval [1.75, 2].

Follow the same steps, we have the table below:

.. list-table:: Bisection method
   :widths: 25 25 25 25 25
   :header-rows: 1

   * - Iteration
     - :math:`a`
     - :math:`b`
     - :math:`c`
     - :math:`f(c)`
   * - 1
     - 1
     - 2
     - 1.5
     - -1.875
   * - 2
     - 1.5
     - 2
     - 1.75
     - -0.7031
   * - 3
     - 1.75
     - 2
     - 1.875
     - 0.0762
   * - 4
     - 1.75
     - 1.875
     - 1.8125
     - -0.3308
   * - 5
     - 1.8125
     - 1.875
     - 1.8438
     - -0.1317
   * - 6
     - 1.8438
     - 1.875
     - 1.8594
     - -0.0289
   * - 7
     - 1.8594
     - 1.875
     - 1.8672
     - 0.0234
   * - 8
     - 1.8594
     - 1.8672
     - 1.8633
     - -0.0028
   * - 9
     - 1.8633
     - 1.8672
     - 1.8652
     - 0.0102
   * - 10
     - 1.8633
     - 1.8652
     - 1.8643
     - 0.0037
   * - 11
     - 1.8633
     - 1.8643
     - 1.8638
     - 0.0004

After 11 iterations, we have the approximation root of the equation is :math:`x = 1.8638` 

Newton-Raphson method
---------------------

Newton-Raphson is a root-finding algorithm which produces successively better approximations to the roots (or zeroes) of a real-valued function. The most basic version starts with a single-variable function :math:`f(x)` defined for a real variable x, the function's derivative :math:`f'(x)`, and an initial guess :math:`x_0` for a root of :math:`f(x)`. 

If the function :math:`f(x)` is defined and differentiable in an open interval containing a root, then the Newton–Raphson method will converge to a root of the function. The method generates a sequence of approximations :math:`x_n` that converges to a root of :math:`f(x)` if the initial guess is close enough, and the function :math:`f(x)` is suitably smooth.

Steps to find the root of a non-linear equation using the Newton-Raphson method:

**Step 1**: Evaluate :math:`f'(x)`

**Step 2**: Choose an initial guess :math:`x_0`

**Step 3**: Find the next guess :math:`x_i` using the formula:

.. math::
    
   x_{i+1} = x_i - \frac{f(x_i)}{f'(x_i)}

**Step 4**: Repeat steps 2 and 3 until the desired accuracy is achieved.

**Example**: Find the root of the equation :math:`f(x) = x^3 - x^2 - 3` using the Newton-Raphson method, with initial guess :math:`x_0 = 1`.

**[Sol]**:

First, evaluate the derivative of the function:

.. math::
    
   f'(x) = 3x^2 - 2x

Then, find the next guess using the formula:

.. math::

    x_1 = 1 - \frac{f(1)}{f'(1)} = 1 - \frac{-3}{1} = 4

Follow the same steps, we have the table below:

.. list-table:: Newton-Raphson method
   :widths: 25 25 25 25 25
   :header-rows: 1

   * - Iteration
     - :math:`x`
     - :math:`f(x)`
     - :math:`f'(x)`
     - :math:`x_{i+1}`
   * - 1
     - 1
     - -3
     - 1
     - 4
   * - 2
     - 4
     - 45
     - 40
     - 2.875
   * - 3
     - 2.875
     - 12.498
     - 19.0469
     - 2.2188
   * - 4
     - 2.2188
     - 3.0005
     - 10.3319
     - 1.9284
   * - 5
     - 1.9284
     - 0.4526
     - 7.2995
     - 1.8664
   * - 6
     - 1.8664
     - 0.0182
     - 6.7177
     - 1.8637

After 6 iterations, we have the approximation root of the equation is :math:`x = 1.8637`

Estimating the error
--------------------

Usually, when performing this calculation, we will use one more operation called **error**. There are two types errors that we can use to estimate the error of the approximation:

* **True error** (:math:`E_{t}`): A true error is defined as the difference between the true (exact) value and an approximate value. This type of error is only measurable when the true value is available. 

.. math::
    
   \text{True error} = \text{True value} - \text{Approximate value}

Based on this formula, one also gives the formula for the **relative true error** (:math:`\epsilon_{t}`):

.. math::
    
   \text{Relative true error} = \frac{\text{True error}}{\text{True value}}

* **Approximate error** (:math:`E_{a}`): is defined as the difference between the present approximate value and the previous approximation (i.e. the change between the iterations).

.. math::
    
   \text{Approximate error} = \text{Present approximate value} - \text{Previous approximate value}

Based on this formula, one also gives the formula for the **relative approximate error** (:math:`\epsilon_{a}`):

.. math::
    
   \text{Relative approximate error} = \frac{\text{Approximate error}}{\text{Present approximate value}}

.. math::

   \text{Relative approximate error} = \frac{\text{Present approximate value} - \text{Previous approximate value}}{\text{Present approximate value}}

**Example**: Using the problem above, calculate the approximate error and the relative approximate error of the last iterations.

**[Sol]**:

We can see the 6th iteration of the table above is :math:`x = 1.8637`, the previous approximation is :math:`x = 1.8664`. Therefore, the approximate error is:

.. math::
    
   E_a = 1.8664 - 1.8637 = 0.0027

The relative approximate error is:

.. math::
    
   \epsilon_a = \frac{0.0027}{1.8637} = 0.0014

So, the approximate error is :math:`0.0027` and the relative approximate error is :math:`0.0014` (~ 1.4%).









