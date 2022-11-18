Numerical Integration
=====================

As you already studied in high school, integration is mathematically represented by

.. math::

    I = \int_a^b f(x) dx

which stands for the integral of the function :math:`f(x)` with respect to the
independent variable :math:`x`, evaluated between the limits :math:`x = a` to
:math:`x = b`.

In this section, we will study some formulas for numerical integration. But
first, let's get to know about the Newton-Cotes formulas.

.. _newton-cotes:

Newton-Cotes Formulas
---------------------

Newton-Cotes Formulas are the most common numerical integration schemes. Based
on the strategy of replacing a complicated function or tabulated data with a
polynomial that is easy to integrate:

.. math::

    I = \int_a^b f(x) dx \approx \int_a^b f_n(x) dx

:math:`f_n(x)` is a polynomial of the form:

.. math::

    f_n(x) = a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n

When ploting the function, the approximation of the integral is the area under
the curve of the polynomial.

Another formula we have to keep an eye on is **a series of polynomials**. This
is the approximation of an integral by the area under three straight line
segments. Here is the formula of it:

.. math::

    y = f(a) + \frac{f(b) - f(a)}{b - a} (x - a)

Now, after studied about Newton-Cotes formulas, we will go through the formula
based on the formula.

.. _trapezoidal:

Trapezoidal Rule
----------------

**Trapezoidal Rule** is the first of the Newton-Cotes closed integration
formulas. Corresponding to the case where the polynomial is first-order:

.. math::

    I = \int_a^b [f(a) + \frac{f(b)-f(a)}{b-a} (x-a)] dx

Which leads to the result:

.. math::

    I = (b-a) \frac{f(a) + f(b)}{2}

*Notes*:

- If the function being intergrated is *linear*, the trapezoidal rule give the
  exact solutions.

- For functions with second or higher order derivatives, the trapezoidal rule
  is not very accurate, some error can occur.

Error of the Trapezoidal Rule:

.. math::

    E_t = - \frac{1}{12} (f''(\xi)) (b-a)^3

where :math:`\xi` is the point where the maximum value of the second derivative
occurs.

**Example 1**: Calculate the integral of :math:`f(x) = 2x - 4` from
:math:`x = 0` to :math:`x = 2` using the trapezoidal rule.

[**Sol**]:

:math:`f(a) = f(0) = -4`

:math:`f(b) = f(2) = 0`

.. math::

    I = (b-a) \frac{f(a) + f(b)}{2} = (2-0) \frac{-4 + 0}{2} = -4

The true solution:

.. math::

    I = \int_0^2 2x - 4 dx = 2x^2 - 4x \bigg|_0^2 = 2(2)^2 - 4(2) - 2(0)^2 + 4(0) = -4

We see that, because :math:`f(x)` is linear, the trapezoidal rule gives the
exact solution.

**Example 2**: Calculate the integral of
:math:`f(x) = 0.2 + 25x - 200x^2 + 675x^3 - 900x^4 + 400x^5` from :math:`x = 0`
to :math:`x = 0.8` using the trapezoidal rule.

[**Sol**]:

:math:`f(a) = f(0) = 0.2`

:math:`f(b) = f(0.8) = 0.232`

.. math::

    I = (b-a) \frac{f(a) + f(b)}{2} = (0.8-0) \frac{0.2 + 0.232}{2} = 0.1728

The true solution:

.. math::

    I = \int_0^{0.8} 0.2 + 25x - 200x^2 + 675x^3 - 900x^4 + 400x^5 dx = 1.640

Which give us relative error of:

.. math::

    \epsilon_t = \frac{|1.640 - 0.1728|}{|1.640|} * 100\% = 89.5\%

Now, in actual situations, we would have no foreknowledge of the true value.
Therefore, an approximate error estimate is required. To obtain this estimate,
the function’s second derivative over the interval can be computed by
differentiating the original function twice to give:

.. math::

    f''(x) = - 400 + 4050x - 10.800x^2 + 8000x^3

The average value of the second derivative over the interval is:

.. math::

    f''(x) = \frac{\int_0^0.8 - 400 + 4050x - 10.800x^2 + 8000x^3 dx}{0.8} = -60

Therefore, the error estimate is:

.. math::

    E_a = - \frac{1}{12} (f''(\xi)) (b-a)^3 = - \frac{1}{12} (-60) (0.8)^3 = 2.56

which is of the same order of magnitude and sign as the true error. A
discrepancy does exist, however, because of the fact that for an interval of
this size, the average second derivative is not necessarily an accurate
approximation of :math:`f''(ξ)`. Thus, we denote that the error is approximate
by using the notation Ea, rather than exact by using :math:`E_t`.

.. _multiple trapezoidal:

The Multiple-Application Trapezoidal Rule
-----------------------------------------

One way to improve the accuracy of the trapezoidal rule is to divide the
integration interval from :math:`a` to :math:`b` into a number of segments and
apply the method to each segment. The areas of individual segments can then be
added to yield the integral for the entire interval. The resulting equations
are called *multiple-application*, or *composite*, *integration formulas*.

The multiple-application trapezoidal rule is the most common composite
integration formula. It is obtained by dividing the interval from :math:`a` to
:math:`b` into :math:`n` equal subintervals of length :math:`h = \frac{b-a}{n}`,
and then applying the trapezoidal rule to each subinterval.

Formula of the multiple-application trapezoidal rule:

.. math::

    I = h \frac{f(x_0)+f(x_1)}{2} + h \frac{f(x_1)+f(x_2)}{2} + \cdots + h \frac{f(x_{n-1})+f(x_n)}{2}

or, grouping terms:

.. math::

    I = \frac{h}{2} [f(x_0) + 2\Sigma_{i=1}^{n-1} f(x_i) + f(x_n)]

or can be written in general form:

.. math::

    I = (b-a) \frac{f(x_0) + 2\Sigma_{i=1}^{n-1} f(x_i) + f(x_n)}{2n}


*Notes*: :math:`n` = number of segments

The error of the multiple-application trapezoidal rule:

.. math::

    E_a = - \frac{(b-a)^3}{12n^2} f''(\xi)

**Example 3**: Use the two-segment trapezoidal rule to estimate the integral of
:math:`f(x) = 0.2 + 25x - 200x^2 + 675x^3 - 900x^4 + 400x^5` from
:math:`x = 0` to :math:`x = 0.8`.

[**Sol**]:

:math:`h = \frac{0.8 - 0}{2} = 0.4`

:math:`f(x_0) = f(0) = 0.2`

:math:`f(x_1) = f(0.4) = 2.456`

:math:`f(x_2) = f(0.8) = 0.232`

Therefore, we have:

.. math::

    I = 0.8 \frac{0.2 + 2(2.456) + 0.232}{4} = 1.0688

The estimate error:

.. math::

    E_a = - \frac{(0.8)^3}{12(2)^2} (-60) = 0.64

.. _simpson:

Simpson's Rule
==============

Aside from applying the trapezoidal rule, we also have another way to obtain a
more accurate estimate of an integral is to use higher-order polynomials to
connect the points. The methods are called *Simpson's rule*.

.. _composite simpson:

Composite Simpson's Rule
------------------------

Simpson's rule can be improved by dividing the integration interval into a
number of segments of equal width and applying the method to each segment. The
resulting equations are called *composite Simpson's rule*.

The general form:

.. math::

    I = \int_{x_0}^{x_2} f(x) dx + \int_{x_2}^{x_4} f(x) dx + \int_{x_n}^{x_{n-2}} f(x) dx

Leads to the result:

.. math::

    I = (b-a) \frac{f(x_0) + 4 \Sigma_{i=1,3,5}^{n-1} f(x_i) + 2 \Sigma_{j=2,4,6}^{n-2} f(x_j) + f(x_n)}{3n}

.. _1/3 rule:

Simpson's 1/3 rule
------------------

Simpson's 1/3 rule is an extension of the trapezoidal rule in which the
integrand is approximated by a second-order polynomial. Simpson rule can be
derived from the various way using Newton's divided difference polynomial,
Lagrange polynomial and the method of coefficients.

Because we approximate the polynomial based on quadratic approximation. In
this, each approximation actually covers two of the subintervals. This is why
we require the number of subintervals to be even.

The general form of Simpson's 1/3 rule:

.. math::

    I = \frac{h}{3}[f(x_0) + 4f(x_1) + f(x_2)]

or can be written as the general form:

.. math::

    I = (b-a) \frac{f(x_0) + 4f(x_1) + f(x_2)}{6}

The error of Simpson's 1/3 rule:

.. math::

    E_a = - \frac{(b-a)^5}{2880} f^{(4)}(\xi)

**Example 4**: Use Simpson's 1/3 rule to integrate

.. math::

    f(x) = 0.2 + 25x + 3x^2 + 2x^4

from :math:`a = 0` to :math:`b = 2`.

[**Sol**]:

:math:`h = \frac{2 - 0}{2} = 1`

:math:`f(x_0) = f(0) = 0.2`

:math:`f(x_1) = f(1) = 30.2`

:math:`f(x_2) = f(2) = 94.2`

Applied the Simpson's 1/3 rule:

.. math::

    I = (2-0) \frac{0.2 + 4(30.2) + 94.2}{6} = 71.73

The exact solution:

.. math::

    I = \int_0^2 (0.2 + 25x + 3x^2 + 2x^4) dx = 71.2

The relative error:

.. math::

    |\epsilon_t| = \frac{|71.2 - 71.73|}{|71.2|} * 100 = 0.7 \%

Gauss Quadrature
================

