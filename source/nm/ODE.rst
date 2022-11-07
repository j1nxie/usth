ODE
====

Overview
--------
* The fundamental laws of physics, mechanics, electricity, and thermoddynamics are usually based on empirical observations that explain variations in physical properties and states of systems. Rather than describing the state of physical systems directly, the laws are usually couched in terms of spatial and temporal changes
* Such equations, which are composed of an unknown function and its derivatives, are called differential equations.

* formula
dv/dt = g - (c/m) v
where 
g is the gravitational constant
m is the mass
c is a drag coefficient
v is the dependent variable
t is the independent variable

------------------------------------------------------------------------

* when the function involves one independent variable, the equation is called an oridnary differential equation (ODE)
* this constrast to a partial differential equation (PDE), which involves more than one independent variable

------------------------------------------------------------------------

* This part is devoted to solving ordinary differential equations of the form
dy/dx = f(x,y)
where x is the independent variable and y is the dependent variable

the method was of the general form

new value = old value + slope x step size
or in mathematical terms
y_n+1 = y_n + (theta) h
where the slope (theta) is called an increment function

------------------------------------------------------------------------
ANYWAY, long story short, here's a summary i'll make the full version later :)

* Euler's method uses the simple formula
y(x+h) = y(x) + h f(x,y)

to construct the tangent at the point x and obtain the value of y(x+h), whose slope is f(x,y) or dy/dx

In Euler’s method, you can approximate the curve of the solution by the tangent in each interval (that is, by a sequence of short line segments), at steps of h.

In general, if you use small step size, the accuracy of approximation increases.

GENERAL FORMULA
---------------
y_i+1 = y_i + h f(x_i, y_i)

where
y_i+1: the next estimated solution value
y_i: the current value
h: the interval between steps
f(x_i, y_i): value of the derivative at the current (x_i,y_i) point

------------------------------------------------------------------------
FUNCTIONAL VALUE AT ANY POINT B GIVIN BY y(b)
------------------------------------------------------------------------
n = (b-x_0)/h

where
n: number of steps
h: interval width (size of each steps)

------------------------------------------------------------------------

OMG Pseudocode
--------------
1. define f(x,y)
2. input x_0, y_0
3. input h, n
4. for j from 0 to (n-1) do
* y_i+1 = y_i + h f(x_i, y_i)
* x_i+1 = x_i + h
* print x_i+1, y_i+1
5. end 


