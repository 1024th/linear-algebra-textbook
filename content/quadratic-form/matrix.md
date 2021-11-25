# 二次型的矩阵形式

## 二次型与它的矩阵

**定义** 设 $\mathbb{F}$ 是数域。$\mathbb{F}[x]$ 中的关于 $x_1,x_2,\ldots ,x_n$ 的二次齐次多项式

$$
f\left(x_1,\ldots ,x_n\right)= \sum\limits_{i=1}^{n} a_{ii}x_i^2 + 2\sum\limits_{1\le i<j\le n} a_{ij}x_ix_j
$$

称为数域 $\mathbb{F}$ 上的 **$n$ 元二次型**，简称**二次型**。

例如，$x_1^2+3x_2^2-7x_3^2+4x_1x_2-6x_1x_3+12x_2x_3$ 是有理数域 $\mathbb{Q}$ 上的一个三元二次型。

$i>j$ 时，补充定义 $a_{ij}=a_{ji}$，则 $f(x_1,\ldots ,x_n)$ 可以写成 $\sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} a_{ij}x_ix_j$（这也是二次型的定义中要在 $\sum\limits_{1\le i<j\le n} a_{ij}x_ix_j$ 前面留一个 $2$ 的原因）。

这样，我们就可以用矩阵来表示二次型。令 $X=\begin{pmatrix}x_1 \\ \vdots \\ x_n\end{pmatrix}$，$A=(a_{ij})_{n\times n}$，则

$$
\begin{aligned}
X^\mathrm{T}AX &= \begin{pmatrix}x_1 & \cdots & x_n \end{pmatrix}(a_{ij})_{n\times n} \begin{pmatrix}x_1 \\ \vdots \\ x_n\end{pmatrix} \\
&= \begin{pmatrix}x_1 & \cdots & x_n\end{pmatrix} \begin{pmatrix}\sum\limits_{j=1}^{n} a_{1j}x_j \\ \vdots \\ \sum\limits_{j=1}^{n} a_{nj}x_j \end{pmatrix} \\
&= \sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} a_{ij}x_ix_j = f(x_1,\ldots ,x_n)
\end{aligned}
$$

所以我们称 $A=(a_{ij})_{n\times n}$ 为**二次型 $f$ 的矩阵**。由于 $a_{ij}=a_{ji}$ ，所以 $A^\mathrm{T}=A$ ，即二次型的矩阵 $A$ 为对称阵。

例如， $3x_1^2-4x_1x_2+6x_1x_3+x_2^2+8x_2x_3+7x_3^2 = \begin{pmatrix}x_1 & x_2 & x_3\end{pmatrix}\begin{pmatrix}3 & -2 & 3 \\ -2 & 1 & 4 \\ 3 & 4 & 7\end{pmatrix}\begin{pmatrix}x_1 \\ x_2 \\ x_3\end{pmatrix}$。 

因为二次型 $X^\mathrm{T}AX$ 的矩阵 $A$ 的元素 $a_{ij}$ 在 $i\neq j$ 时是 $x_{ij}$ 项的系数的一半，在 $i=j$ 时是 $x_i^2$ 的系数，所以二次型的矩阵是唯一的，即若二次型 $f(x_1,\ldots ,x_n)=X^\mathrm{T}AX=X^\mathrm{T}BX$ 且 $A^\mathrm{T}=A,B^\mathrm{T}=B$，则有 $A=B$。

## 二次型的满秩线性变换

**定义** 设 $x_1,\ldots ,x_n$ 与 $y_1,\ldots ,y_n$ 是两组字母，系数 $t_{ij}\in\mathbb{F}$，

$$
\left\{\begin{aligned}
x_1 &= t_{11}y_1+\cdots +t_{1n}y_n \\
\vdots \\
x_n &= t_{n1}y_1+\cdots +t_{nn}y_n \\
\end{aligned}
\right.
$$

称为由 $x_1,\ldots ,x_n$ 到 $y_1,\ldots ,y_n$ 的一个线性变换，简称线性变换。如果系数行列式 $|T|\neq 0$，则称为满秩线性变换。此时矩阵 $T$ 可逆，$Y=T^{-1}X$；$x_1,\ldots ,x_n$ 是 $y_1,\ldots ,y_n$ 的一次齐式，$y_1,\ldots ,y_n$ 也是 $x_1,\ldots ,x_n$ 的一次齐式。

若把

**定义**

**推论**

**性质**

**证**

**定义**

**引理**

**证**

**命题**
