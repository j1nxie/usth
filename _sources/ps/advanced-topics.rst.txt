Advanced Topics
===============

.. _derived distributions:

Derived Distributions
---------------------

.. _linear fn disc rv:

Linear Function of a Discrete Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Given :math:`Y = aX + b`:

.. math::

   p_Y(y) = p_X(\frac{y-b}{a})

.. _linear fn cont rv:

Linear Function of a Continuous Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Given :math:`Y = aX + b`:

.. math::

   f_Y(y) = \frac{1}{|a|} f_X(\frac{y-b}{a})

.. _linear fn norm rv:

Linear Function of a Normal Random Variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Given :math:`X ~ N(\mu , \sigma^2)` and :math:`Y = aX + b`:

.. math::

   f_Y(y) = \frac{1}{\sqrt{2\pi} \sigma} e^\frac{-(\frac{y-b}{a} - \mu)^2}{2
   \sigma^2}

.. _pdf of general fn:

PDF of a General Function
~~~~~~~~~~~~~~~~~~~~~~~~~

Two-step procedure:

1. Find the CDF of :math:`Y`: :math:`F_Y(y) = P(Y \leq y)`
2. Differentiate: :math:`f_Y(y) = \frac{dF_Y(y)}{dy}`

.. _covariance:

Covariance
----------

The covariance of two random variables :math:`X` and :math:`Y` is defined by:

.. math::

   \text{cov}(X,Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])]

When :math:`\text{cov}(X,Y) = 0`, :math:`X` and :math:`Y` are *uncorrelated*.

.. note::

   Covariance has four properties:

   - :math:`\text{cov}(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X] \mathbb{E}[Y]`
   - :math:`\text{cov}(X,Y) = \text{var}(X)`
   - :math:`\text{cov}(X, aY+b) = a \times \text{cov}(X,Y)`
   - :math:`\text{cov}(X, Y+Z) = \text{cov}(X,Y) + \text{cov}(Y,Z)`

.. _correlation:

Correlation
-----------

The correlation coefficient :math:`\rho(X,Y)` is defined by:

.. math::

   \rho(X,Y) = \frac{\text{cov}(X,Y)}{\sqrt{\text{var}(X)\text{var}(Y)}}

The above coefficient satisfies :math:`-1 \leq \rho(X,Y) \leq 1`.
