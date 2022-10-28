Systems of linear equations
=============

General definition
-----------------------
* Linear equations: Algebraic equation in which each term is either a constant and (the first power of) a single variable. 
    * Ex: ax+b = 0

* Systems of linear equations: collection of two or more linear equations involving the same set of variables

a11x1 + a12x2 + ... + a1nxn = b1
a21x1 + a22x2 + ... + a2nxn = b2
...
am1x1 + am2x2 + ... + amnxn = bm

a's are coefficients, b's are constants, x's are variables

* A linear system may behave in any one of three possible ways: 
    * has a single unique solution
    * has infinitely many solutions
    * has no solution

How to solve
-----------------------
Matrix Notation
~~~~~~~~~~~~~~~~~~
* [A] is the shorthand notation for an m by n Matrix
* a_ij designates an individual element of the Matrix
* a_11, a_22, a_33: the principle or main diagonal of the matrix
* a_ij = a_ji: symmetric matrix
* m = n: square matrix

Special matrices
###################
* Diagonal matrix 
* Upper triangular matrix
* Lower triangular matrix
* Identity matrix
* Banded matrix

Methods
~~~~~~~~~~
.. _naive_gaussian_elimination:
1. Naive Gauss elimination
2. Gauss Elimination: Pivoting
3. Jacobi method
4. Gauss-Seidel method

Naive Gauss elimination
################################
This method can be divided into two steps: 
* Forward elimination
    * Transform the system into an upper triangular matrix
* Backward substitution
    * Solve the system by substituting the values of the variables from the last equation to the first
* Matlab Implementation

.. code-block::Matlab
    function [x] = gauss_elimination(A,b)
    %GAUSS_ELIMINATION Summary of this function goes here
    %   Detailed explanation goes here
    [m,n] = size(A);
    if m ~= n
        error('Matrix A must be square');
    end
    if m ~= length(b)
        error('Matrix A and vector b must have the same number of rows');
    end
    % Forward elimination
    for k = 1:n-1
        for i = k+1:n
            if A(i,k) ~= 0.0
                lam = A(i,k)/A(k,k);
                A(i,k+1:n) = A(i,k+1:n) - lam*A(k,k+1:n);
                b(i) = b(i) - lam*b(k);
            end
        end
    end
    % Backward substitution
    x = zeros(n,1);
    x(n) = b(n)/A(n,n);
    for i = n-1:-1:1
        x(i) = (b(i) - A(i,i+1:n)*x(i+1:n))/A(i,i);
    end
    end

Gauss Elimination: Pivoting
################################
* Basic idea: 
    * determine the coefficient with the largest absolute value in the column below the pivot element
    * the rows can then be switched so that the largest element is the pivot element. This is called partial pivoting.
    * If columns as well as rows are searched for the largest element and then switched, the procedure is called complete pivoting (rarely used)
* Matlab Implementation
.. code-block::Matlab
    function x = GaussPivot(A,B)
    % GaussPivot: Gauss elimination pivoting
    % x = GaussPivot(A,b): Gauss elimination with pivoting. % input:
    % A = coefficient matrix
    % b = right hand side vector
    % output:
    % x = solution vector
    [m,n]=size(A);
    if m~=n, error('Matrix A must be square');
    end
    nb=n+1;
    Aug=[A B];
    % forward elimination
    for k = 1:n-1
                % partial pivoting
        [big,i]=max(abs(Aug(k:n,k))); ipr=i+k-1;
        if ipr~=k
            Aug([k,ipr],:)=Aug([ipr,k],:);
        end
        for i = k+1:n
            factor=Aug(i,k)/Aug(k,k);
            Aug(i,k:nb)=Aug(i,k:nb)-factor*Aug(k,k:nb);
        end
    end
            % back substitution
    x=zeros(n,1); 
    x(n)=Aug(n,nb)/Aug(n,n); 
    for i = n-1:-1:1
        x(i)=(Aug(i,nb)-Aug(i,i+1:n)*x(i+1:n))/Aug(i,i);
    end


Jacobi method
###################
The procedure consisted of steps: 
Step 1: First, solve each of the equations for its unknown on the diagonal.
Step 2: By assuming that x_2=0 and x_3=0, we can solve for x_1.
Step 3: This value x_1, along with the assumed value of x_3=0, can be substitued into the second equation to calculate x_2.
Step 4: The first iteration is completed by substituting the calculated values for x_1 and x_2 into the third equation to calculate x_3.
Step 5: For the second iteration, the same process is repeated to compute the new values of x_1, x_2, and x_3.

* Matlab Implementation
.. code-block::Matlab
    function xnew = jacobi(A, b, xold)
  % This is a sample implementation of the Jacobi method in
  % Octave. 
  
  % We first need to determine how many equations there are
  % that we need to solve
  n = size(A, 1);
  % We create a blank xnew vector to store the final results
  xnew = zeros(n, 1);
  
  for k = 1:n
    % We first get the diagonal value so that we can set it 
    % to null in the matrix
    diagonal_value = A(k,k);
    
    % Set the diagonal value to 0 so it doesn't affect our
    % future calculations
    A(k,k) = 0;
    
    % We then calculate a new xnew value using the xold vector
    xnew(k) = (b(k) - A(k,:)*xold) / diagonal_value;
  endfor
endfunction

Gauss-Seidel method
#######################

* Matlab Implementation
.. code-block::Matlab
    %*************************Eric Douglas*****************************%
%***********************August 30th, 2013**************************%
%This code is used to compute the Jacobi Method of a certain matrix.%
%Input:
%       C_n = convergence criteria value
%       N = number of equations in the matrix
%       Imax = the maximum number of iterations
%Output:
%       S = the solution( M x 1 matrix ; jacobi approximation)
%       j = the number of iterations it took to
%           converge to the user inputed value
%       R = Residual Values

%establishes the variables needed
%B is an M x 1 matrix
%A is an M x M matrix
%P is the initial M x 1 matrix
%Z = remembering matrix

%Ask the user for each input statement required
Imax = input('What do you want the maximum iteration to be? ');
N = input('How many equations do you want? ');
C_n = input('What number do you want to converge to? ');

%Assigns the values inputed by the user into the matrices
for x=1:1:N
    for y=1:1:N
        strA = ['What do you desire your numbers in the matrix to be? ' num2str(x) 'Row: ' num2str(y) 'Column: '];
        A = input(strA);
    end
end

for l=1:1:N
    strB = ('What do you desire the Solution matrix to be? ');
    B = input(strB);
end

n = length(B);
X = zeros(n,1);
e = ones(n,1);

%%Check if the matrix A is diagonally dominant
for i = 1:n
    j = 1:n;
    j(i) = [];
    C = abs(A(i,j));
    Check(i,1) = abs(A(i,i)) - sum(B); % Is the diagonal value greater than the remaining row values combined?
    if Check(i) < 0
        fprintf('The matrix is not strictly diagonally dominant at row %2i\n\n',i)
    end
end