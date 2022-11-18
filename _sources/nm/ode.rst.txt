ODE
===

.. _ode overview:

Overview
--------

The fundamental laws of physics, mechanics, electricity, and thermoddynamics
are usually based on empirical observations that explain variations in physical
properties and states of systems. Rather than describing the state of physical
systems directly, the laws are usually couched in terms of spatial and
temporal changes. Such equations, which are composed of an unknown function and
its derivatives, are called differential equations.

The formula for an ODE is given below, where :math:`g` is the gravitational
constant, :math:`m` is the mass, :math:`c` is a drag coefficient, :math:`v` is
the dependent variable, and :math:`t` is the independent variable.

.. math::
   \frac{dv}{dt} = g - \frac{c}{m} v

When the function involves one independent variable, the equation is called an
ordinary differential equation (ODE). This constrasts to a partial differential
equation (PDE), which involves more than one independent variable.

.. _ode solving:

Solving ODEs
------------

This part is devoted to solving ordinary differential equations of the form
:math:`\frac{dy}{dx} = f(x,y)`, where :math:`x` is the independent variable and
:math:`y` is the dependent variable.

The method was of the general form:

.. math::

   \text{new value} = \text{old value} + \text{slope} \times \text{step size}

or in mathematical terms:

.. math::

   y_{n+1} = y_n + \theta h

where the slope :math:`\theta` is called an increment function.

Euler's method uses the simple formula:

.. math::

   y(x+h) = y(x) + h f(x,y)

to construct the tangent at the point :math:`x` and obtain the value of
:math:`y(x+h)`, whose slope is :math:`f(x,y)` or :math:`\frac{dy}{dx}`.

In Euler’s method, you can approximate the curve of the solution by the tangent
in each interval (that is, by a sequence of short line segments), at steps of
:math:`h`.

In general, if you use small step size, the accuracy of approximation
increases.

.. _ode formula:

General formula
~~~~~~~~~~~~~~~

.. math::

   y_{i+1} = y_i + h f(x_i, y_i)

- :math:`y_{i+1}`: the next estimated solution value
- :math:`y_i`: the current value
- :math:`h`: the interval between steps
- :math:`f(x_i, y_i)`: value of the derivative at the current :math:`(x_i,y_i)`
  point

.. _ode functional value:

Functional value at any point B given by y(b)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. math::
   n = \frac{b-x_0}{h}

- :math:`n`: number of steps
- :math:`h`: interval width (size of each steps)

OMG Pseudocode
~~~~~~~~~~~~~~

1. define :math:`f(x,y)`
2. input :math:`x_0`, :math:`y_0`
3. input :math:`h`, :math:`n`
4. for :math:`j` from :math:`0` to :math:`(n-1)` do
    - :math:`y_{i+1} = y_i + h f(x_i, y_i)`
    - :math:`x_{i+1} = x_i + h`
    - print :math:`x_{i+1}`, :math:`y_{i+1}`
5. end 
