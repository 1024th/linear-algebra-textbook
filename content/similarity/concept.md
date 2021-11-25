# 相似的概念

## 相似矩阵

**定义** $A$ 相似于 $B$，记为 $A\sim B \iff \exists~ T, \text{ s.t. } B=T^{-1}AT$

当然，$T$ 得是可逆矩阵。

### 性质

矩阵相似是一种等价关系，这是它作为等价关系所具有的性质

1. 自反性 $A\sim A$
2. 对称性 $A\sim B \implies B\sim A$
3. 传递性 $A\sim B, B\sim C \implies A\sim C$

> 注：（From [Wikipedia](https://zh.wikipedia.org/wiki/%E7%AD%89%E4%BB%B7%E5%85%B3%E7%B3%BB)）**等价关系**（equivalence relation）即设 $R$ 是某个集合 $A$ 上的一个二元关系。若 $R$ 满足以下条件：
> 
> 1. 自反性： $\forall~ x\in A,~xRx$
> 2. 对称性： $\forall~ x,y\in A,~xRy\implies yRx$
> 3. 传递性： $\forall~ x,y,z\in A,~(xRy \wedge yRz) \implies xRz$
> 
> 则称 $R$ 是一个定义在 $A$ 上的等价关系。习惯上会把等价关系的符号由 $R$ 改写为 $\sim$。  

把相似矩阵和准对角矩阵联系起来，还可以得到这样的性质

$$
A_i \sim B_i,~i=1,\ldots,n \implies \begin{pmatrix}A_1 \\ & \ddots \\ & & A_n\end{pmatrix}\sim \begin{pmatrix}B_1 \\ & \ddots \\ & & B_n\end{pmatrix}
$$

以上性质都可以由定义直接推导。

## 相似于对角阵的条件

先从结果出发，看看能推出什么性质。

若 $A$ 相似于对角阵，设 $A\sim \begin{pmatrix}\lambda_1 \\ & \ddots \\ & & \lambda_n\end{pmatrix}$，根据相似矩阵的定义，存在可逆矩阵 $T$ 使得

$$
T^{-1}AT = \begin{pmatrix}\lambda_1 \\ & \ddots \\ & & \lambda_n\end{pmatrix}
$$

那么可以推出

$$
AT = \begin{pmatrix}\lambda_1 \\ & \ddots \\ & & \lambda_n\end{pmatrix}T
$$

设 $T = (\alpha_1,\ldots ,\alpha_n)$，则

$$
\left(A\alpha_1,\ldots ,A\alpha_n\right) = \left(\lambda_1\alpha_1,\ldots ,\lambda_n\alpha_n\right)
$$

$$
A\alpha_i = \lambda \alpha_i, ~i=1,2,\ldots ,n
$$


上述过程逆推也是成立的，所以我们得到相似于对角阵的一个等价表述

**定理** $A$ 相似于对角阵 $\iff$ 存在 $n$ 个线性无关的向量 $\alpha_1,\ldots ,\alpha_n$ 满足 $A\alpha_i = \lambda_i \alpha_i$，且此时与 $A$ 相似的对角矩阵的对角线上的元素为 $\lambda_1,\ldots ,\lambda_n$

**例 5.1** 设 $A=\begin{pmatrix}a & b \\ b & a\end{pmatrix}$，求一个与 $A$ 相似的对角阵，并计算 $A^n$。

注意到 $A$ 满足

$$
A\begin{pmatrix}1 \\ 1\end{pmatrix} = (a+b)\begin{pmatrix}1 \\ 1\end{pmatrix}
,\quad
A\begin{pmatrix}1 \\ -1\end{pmatrix} = (a-b)\begin{pmatrix}1 \\ -1\end{pmatrix}
$$

由于 $\begin{pmatrix}1 \\ 1\end{pmatrix}, \begin{pmatrix}1 \\ -1\end{pmatrix}$ 线性无关，$T=\begin{pmatrix}1 & 1 \\ 1 & -1\end{pmatrix}$ 有逆 ${T}^{-1}=\frac{1}{2}\begin{pmatrix}1 & 1 \\ 1 & -1\end{pmatrix}$，从而

$$
\begin{aligned}
T^{-1} A T &=\frac{1}{2}\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}\begin{pmatrix}
a & b \\
b & a
\end{pmatrix}\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix} \\
&=\frac{1}{2}\begin{pmatrix}
a+b & a+b \\
a-b & b-a
\end{pmatrix}\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}=\begin{pmatrix}
a+b & 0 \\
0 & a-b
\end{pmatrix}
\end{aligned}
$$

故有

$$
A=T\begin{pmatrix}
a+b & 0 \\
0 & a-b
\end{pmatrix} T^{-1}
$$

进而

$$
\begin{aligned}
A^{n} &=T\begin{pmatrix}
a+b & 0 \\
0 & a-b
\end{pmatrix}^{n} T^{-1} \\
&=\frac{1}{2}\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}\begin{pmatrix}
(a+b)^{n} & 0 \\
0 & (a-b)^{n}
\end{pmatrix}\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix} \\
&=\begin{pmatrix}
x & y \\
y & x
\end{pmatrix}
\end{aligned}
$$

其中 $x=\dfrac{(a+b)^{n}+(a-b)^{n}}{2}$，$y=\dfrac{(a+b)^{n}-(a-b)^{n}}{2}$。

> 与此例题类似的课后习题：P178 10, P179 21
