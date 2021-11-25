# 引入

**注意**：本章中未注明的矩阵均为 $\mathbb{F}^{n\times n}$ 的方阵，未标注范围的 $i$ 均为 $i=1,2,\ldots ,n$。

## 引入：计算矩阵的高次幂

如果 $A,B$ 满足 $B=T^{-1}AT$，那么 $B^k = T^{-1}A^kT$

推广：$f(x)\in \mathbb{F}[x]$，如果 $A,B$ 满足 $B=T^{-1}AT$，那么 $f(B) = T^{-1}f(A)T$

如果 $A$ 很简单，比如是对角阵 $\begin{pmatrix}\lambda_1 \\ & \ddots \\ & & \lambda_n\end{pmatrix}$，那么 $B = T^{-1}\begin{pmatrix}f(\lambda_1) \\ & \ddots \\ & & f(\lambda_n)\end{pmatrix}T$，这大大简化了矩阵高次幂的计算。本章研究矩阵的这种性质，并寻求一个方阵相似于对角阵的条件。
