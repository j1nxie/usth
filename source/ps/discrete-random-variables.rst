Discrete Random Variables
=========================

.. _discrete random variables:

Discrete Random Variables
-------------------------

The formal definition of discrete random variables is as follows:

.. math::

   \begin{aligned}
      X: \ & \text{sample space} \ \Omega \rightarrow \mathbb{R} \\
         & \text{outcome} \ \omega \rightarrow x \\
   \end{aligned}

.. note::
   
   Notation for the random variable is :math:`X`, while its numerical value is
   notated by :math:`x`.

   - One sample space could have multiple random variables.
   - A function of random variable(s) is also a random variable.

.. _pmf:

Probability Mass Function
-------------------------

Probability mass function (PMF) is also known as the Probability Law or
Probability Distribution. It is a function that gives the *probability* that a
DRV is *exactly equal* to some value.

.. figure:: ../_static/pmf.png
   :width: 300
   :align: center

   An example of a PMF mapping events to numerical values

Its formal definition is given below:

.. math::

   p_X(x) = P(X = x)

.. note::

   Two of PMF's basic properties are:

   - :math:`p_X(x) \geq 0`
   - :math:`\sum_x p_X(x) = 1`

.. _common random variables:

Common Random Variables
-----------------------

.. _bernoulli:

Bernoulli Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~~

Given a Bernoulli random variable with parameter :math:`p \in [0, 1]`:

.. math::

   X = \begin{cases}
      1 \quad \text{w.p.} \ p \\
      0 \quad \text{w.p.} \ 1-p \\
   \end{cases}

The Bernoulli RV indicates an event :math:`A` happening.

.. _uniform:

Uniform Random Variable
~~~~~~~~~~~~~~~~~~~~~~~

Given a uniform random variable with parameters :math:`a`, :math:`b`, and
considering the following experiment: Picking one of :math:`a`, :math:`a+1`,...
:math:`b` at random, with equally likely chances.

We will have its sample space being :math:`\{a, a+1, \ldots , b\}`. From that,
we obtain the random variable :math:`X` as given below:

.. math::

   X(\omega) = \omega

.. _binomial:

Binomial Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~

Given a binomial random variable with parameters being *positive integers*
:math:`n, p \in [0, 1]` and considering the following experiment: :math:`n`
independent tosses of a coin with :math:`P(\text{Heads}) = p`.

We will obtain the sample space being a sequence of H and T, of length
:math:`n`. From that, we obtain the random variable :math:`X` as given below:

.. math::

   X: \ \text{number of heads}

We have the formula of a binomial random variable as follows:

.. math::

   p_X(k) = \begin{pmatrix} n \\ k \end{pmatrix} p^k (1-p)^{n-k}

.. _geometric:

Geometric Random Variable:
~~~~~~~~~~~~~~~~~~~~~~~~~~

Given a geometric random variable with parameter :math:`0 < p \leq 1` and
considering the following experiment: Infinitely independent tosses of a coin
with :math:`P(\text{Heads}) = p`.

We will obtain the sample space being an infinite sequence of H and T. From
that, we obtain the random variable :math:`X` as given below:

.. math::

   X: \text{number of tosses until the first head}

We have the formula of a geometric random variable as follows:

.. math::

   p_X(k) = (1-p)^{k-1} p

.. _expectations:

Expectations
------------

.. _mean:

Mean
~~~~

The *expected value* (also called the *expectation* or the *mean*) of a random
variable :math:`X`, with PMF :math:`p_X` is defined by:

.. math::

   \mathbb{E}[X] = \sum_x x p_X(x)

Expectations have linearity, demonstrated below:

.. math::

   \mathbb{E}[X] = a \mathbb{E}[X] + b

.. _expected value rule:

Expected Value Rule
~~~~~~~~~~~~~~~~~~~

Let :math:`X` be a random variable, and :math:`Y = g(X)` be a function of
:math:`X`. By definition:

.. math::

   \mathbb{E}[g(X)] = \mathbb{E}[Y] = \sum_y y p_Y(y)

From that, we can obtain the general form of the expected value rule for any
function :math:`g(X)` of random variable :math:`X`:

.. math::

   \mathbb{E}[g(X)] = \sum_x g(x) p_X(x)

.. _variance:

Variance
~~~~~~~~

The *variance* is the average distance from the mean, or in other words, the
expected value of the random variable :math:`g(X) = (X - \mathbb{E}[X])^2`.

.. math::

   \text{var}(X) = \mathbb{E}[(X - \mathbb{E}[X])]^2

With the variance, we can also obtain the standard deviation:

.. math::

   \sigma_X = \sqrt{\text{var}(X)}

.. note::

   Variance has two properties, given a random variable :math:`X`:

   - :math:`\text{var}[aX + b] = a^2 \text{var}[X]`
   - :math:`\text{var}[X] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2`
