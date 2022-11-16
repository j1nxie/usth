Continuous Random Variables
===========================

.. _continuous random variables:

Continuous Random Variables
---------------------------

(Refer to :ref:`discrete random variables` first.)

Given the same definition, but :math:`x` is an interval instead of some exact
value.

.. _pdf:

Probability Density Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A random variable :math:`X` is called *continuous* if there is a non-negative
function :math:`f_X`, called the *probability density function* of :math:`X`,
such that:

.. math::

   P(a \leq X \leq b) = \int_a^b f_X(x) dx

.. note::

   The PDF has three properties:

   - :math:`f_X(x) \geq 0` for all :math:`x`
   - :math:\int_{-\infty}^\infty f_X(x) dx = 1
   - For any subset :math:`B` of the real line:

   .. math::

      P (X \in B) = \int_B f_X(x) dx

.. figure:: ../_static/pdf.png
   :width: 500
   :align: center

   An example of a PDF mapping events to intervals

.. _continuous mean:

The Mean
~~~~~~~~

The expected value of a random variable :math:`X` with PDF :math:`f_X` is
defined by:

.. math::

   \mathbb{E}[X] = \int_{-\infty}^\infty x f_X(x)dx

.. note::

   Expectations have linearity, as demonstrated below:

   .. math::

      \mathbb{E}[aX+b] = a \mathbb{E}[X] + b

.. _continuous expected value:

Expected Value Rule
~~~~~~~~~~~~~~~~~~~

(Refer to :ref:`expected value rule`.)

.. math::

   \mathbb{E}[g(X)] = \int_{-\infty}^\infty g(x) f_X(x)dx

.. _continuous variance:

Variance
~~~~~~~~

Same as its discrete variant. Refer to :ref:`variance`.

.. _cdf:

Cumulative Distribution Functions
---------------------------------

The CDF of a random variable :math:`X` is denoted by :math:`F_X` and provides
the probability :math:`P(X \leq x)`.

.. math::

   F_X(x) = P(X \leq x)

For continuous random variables:

.. math::

   F_X(x) = P(X \leq x) = \int_{-\infty}^x f_X(t)dt

For discrete random variables (Refer to :ref:`discrete random variables`.):

.. math::

   F_X(x) = P(X \leq x) = \sum_{-\infty}^x p_X(k)

.. note::

   CDF has three properties:

   - Non-decreasing
   - As :math:`x \rightarrow \infty`, :math:`F_X(x)` approaches :math:`1`.
   - As :math:`x \rightarrow -\infty`, :math:`F_X(x)` approaches :math:`0`.

.. _continuous common rv:

Common Random Variables
-----------------------

.. _exponential:

Exponential Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: ../_static/exponential.png
   :width: 500
   :align: center

   An exponential random variable with different values of :math:`\lambda`

.. math::

   f_X(x) = \begin{cases}
   \begin{aligned}
   \lambda e^{-\lambda x} \quad & x \geq 0 \\
   0 \quad & x < 0 \\
   \end{aligned}
   \end{cases}

.. _standard gaussian:

Standard Gaussian Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A continuous random variable :math:`X` is said to be standard normal `N(0, 1)`
if it has a PDF of the form:

.. math::

   f_X(x) = \frac{1}{\sqrt{2\pi}} e^\frac{-x^2}{2}

.. _gaussian:

Gaussian Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~

A continuous random variable :math:`X` is said to be normal or Gaussian if it
has a PDF of the form:

.. math::

   f_X(x) = \frac{1}{\sqrt{2\pi}\sigma} e^\frac{-(x-\mu)^2}{2\sigma ^2}

This is **the most important** PDF in probability theorem.

.. note::

   The Gaussian random variable has two properties:

   - :math:`\mathbb{E}[X] = \mu`
   - :math:`\text{var}[X] = \sigma^2`

.. _linear functions:

Linear Functions of :math:`N(\mu , \sigma^2)`
---------------------------------------------

Let :math:`X ~ N(\mu , \sigma^2)`, :math:`Y = aX + b`. Then:

.. math::

   Y ~ N(a \mu + b, a^2\sigma^2)
