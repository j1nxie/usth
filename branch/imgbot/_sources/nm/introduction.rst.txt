Introduction to Numerical Methods
=================================

Reasons to study Numerical Methods
----------------------------------

Numerical methods are used to solve problems with *no analytic solution*, such
as non-linear equations or complex behaviors. Understanding these methods gives
familiarity with common algorithms and computing realities and calculations in
principle.

.. _definition:

What are numerical methods?
---------------------------

Numerical method is an approach for solving complex mathematical problems, using
simple arithmetic operations. This approach involves formulation of model of
physical situations that can be solved with arithmetic operations.

The steps involved are:

1. Formulation of a mathematical model
2. Construction of an appropriate numerical method
3. Implementation of the method to obtain a solution
4. Validation of the solution

.. _characteristics:

Characteristics of numerical methods
------------------------------------

Numerical methods have four main characteristics:

**Iterative**

The procedure to obtain the solution iterates multiple times, with the accuracy
*increasing* every iteration.

**Approximate**

The solution procedure cannot obtain an exact solution, but only an
approximation to the true solution.

**Easily programmable**

The algorithm of numerical methods are simple and can be implemented easily.

**Occasional divergence**

Occasionally, the procedure may diverge from, rather than converge to the true
solution.

.. _approximations:

Approximation and round-off errors
----------------------------------

Numerical methods involve approximations, so there will definitely be *errors*
in the solutions obtained. The availability of an analytical solution allows us
to compute said errors exactly. But since many applied engineering problems
don't have obtainable analytical solutions, we can only obtain *estimates* of
the errors.

.. _significant figures:

Significant figures
~~~~~~~~~~~~~~~~~~~

Significant figures (or digits) of a number are digits that are reliable and
*absolutely necessary* to indicate the quantity of something. Computers retain
only a *finite number* of sigificant figures, so in that case there will be
round-off errors.

Accuracy and precision
~~~~~~~~~~~~~~~~~~~~~~

**Precision**

Precision refers to how closely individual computed or measured values agree to
eachother.

**Accuracy**

Accuracy refers to how closely a computed or measured value agrees with the true
value.

.. note::
   Insert images for precision vs accuracy.

.. _errors:

Error definitions
~~~~~~~~~~~~~~~~~

There are two types of errors: *truncation* errors and *round-off* errors.

**Truncation errors**

Truncation errors happen when approximations are used to represent exact
mathematical procedures.

**Round-off errors**

Round-off errors happen when numbers having limited significant figures (see
:ref:`significant figures`) are used to represent exact numbers.

For functions that can be solved analytically, the relationship between the
exact result and the approximation is shown below, with the value :math:`E_t`
referred to as the "true" error.

.. math::
   \begin{aligned}
      & \text{True value} = \text{Approximation} + \text{Error} \\
      & E_t = \text{True value} - \text{Approximation} \\
   \end{aligned}

The "relative" error :math:`\varepsilon_t` can be calculated using the below
formula:

.. math::
   \begin{aligned}
      \text{True fractional relative error} & = \frac{\text{True
      error}}{\text{True value}} \\
      \varepsilon_t & = \frac{\text{True error}}{\text{True value}}
   \end{aligned}

For functions that *cannot* be solved analytically, calculating the true error
is different:

.. math::
   \begin{aligned}
      & \varepsilon_a = \frac{\text{Approximate error}}{\text{Approximation}}
      \times 100 \% \\
      & \varepsilon_a = \frac{\text{Current approximation} - \text{Previous
      approximation}}{\text{Current approximation}} \times 100 \%
   \end{aligned}

The "true" error value is denoted by :math:`\varepsilon_a` here, which signifies
the error has been normalized to an approximate value. For such cases, the
computation is repeated until the below condition is satisfied, in which the
value :math:`\varepsilon_s` denotes the *prespecified percent tolerance*.

.. math::
   | \varepsilon_a | < \varepsilon_s
