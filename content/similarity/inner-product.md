# 向量的内积、正交与 QR 分解

## 引入

仿照平面几何于几何空间中向量的内积，本节引进 $n$ 维向量的内积，从而推导出向量的长度与正交化的概念。

## 共轭矩阵

**定义** 设 $A=(a_{ij})_{s\times n}\in\mathbb{C}^{s\times n}$，称 $\bar{A}=(\overline{a_{ij}})$ 为 $A$ 的共轭矩阵。例如：

$$
\overline{\begin{pmatrix}3 & 3+\mathrm{i} \\ \mathrm{i} & 2-\mathrm{i}\end{pmatrix}} = \begin{pmatrix}3 & 3-\mathrm{i} \\ -\mathrm{i} & 2+\mathrm{i}\end{pmatrix}
$$

由复数运算的性质，易得：

1. $\overline{(\overline A)}$
2. $\overline{kA} = \bar k \overline{A}$
3. $\overline{A^\mathrm{T}} = (\overline{A}) ^\mathrm{T}$
4. $\overline{A+B} = \overline{A}+\overline{B}$
5. $\overline{AB} = \overline{A}\,\overline{B}$
6. 若 $A$ 可逆，则 $\overline{A^{-1}}=(\overline{A})^{-1}$

## 向量的内积

**定义** 设 $\alpha=\begin{pmatrix}a_1 \\ \vdots \\ a_n\end{pmatrix},~ \beta = \begin{pmatrix}b_1 \\ \vdots \\ b_n\end{pmatrix}$ 是两个 $n$ 维列向量，称数 $\overline{\alpha^\mathrm{T}}\cdot\beta=\begin{pmatrix}a_1 & \cdots & a_n\end{pmatrix}\begin{pmatrix}b_1 \\ \vdots \\ b_n\end{pmatrix}=\sum\limits_{i=1}^{n} \overline{a_i}b_i$ 为向量 $\alpha$ 与 $\beta$ 的内积，记成 $[\alpha,\beta]$。例如：

$$
\begin{aligned}
&\left[\begin{pmatrix}1+\mathrm{i} \\ 2 \\ 2-\mathrm{i}\end{pmatrix}, \begin{pmatrix}\mathrm{i} \\ -2 \\ 2-\mathrm{i}\end{pmatrix}\right] = \begin{pmatrix}\overline{1+\mathrm{i}} & \overline{2} & \overline{2-\mathrm{i}}\end{pmatrix}\begin{pmatrix}\mathrm{i} \\ -2 \\ 2-\mathrm{i}\end{pmatrix}  \\
={}&(1-\mathrm{i})\mathrm{i}+2(-2)+(2+\mathrm{i})(2-\mathrm{i})=2+\mathrm{i}
\end{aligned}
$$

**性质**

1. $[\alpha,0]=[0,\beta]=0$
2. $[\beta,\alpha]=\overline{[\alpha,\beta]}$
3. $[\alpha,l_1\beta_1+l_2\beta_2]=l_1[\alpha,\beta_1]+l_2[\alpha,\beta_2]$  
   $[k_1\alpha_1+k_2\alpha_2,\beta]=\overline{k_1}[\alpha_1,\beta]+\overline{k_2}[\alpha_2,\beta]$
4. $[\alpha,\alpha]$ 是非负实数，且 $[\alpha,\alpha]=0\iff \alpha=0$

这些性质都可以由定义计算得到。如 $[\alpha,\alpha]=\sum\limits_{i=1}^{n} \overline{a_i}a_i = \sum\limits_{i=1}^{n} |a_i|^2\ge 0$，且 $[\alpha,\alpha]=0\iff |a_i|=0,~ i=1,\ldots ,n\iff a_i=0,~ i=1,\ldots ,n\iff \alpha=0$。

## 向量的长度

**定义** 称非负实数 $\sqrt{[\alpha,\alpha]}$ 为 $\alpha$ 的长度，记成 $\lVert\alpha\rVert$。

例如，$\alpha=\begin{pmatrix}2+\mathrm{i} \\ 3 \\ -2\mathrm{i}\end{pmatrix}$，则 $\lVert \alpha\rVert=\sqrt{5+9+4}=\sqrt{18}=3\sqrt{2}$

> 注：《大学代数》一书中答案误写为 $2\sqrt{3}$。

**性质**

1. $\lVert\alpha\rVert\ge0$，且 $\lVert\alpha\rVert=0\iff \alpha=0$
2. $\lVert k\alpha\rVert=|k|\cdot\lVert\alpha\rVert$

**定义** 长度为 $1$ 的向量称为单位向量。若 $\alpha\neq 0$，用 $\frac{1}{\lVert \alpha\rVert}$ 乘非零向量 $\alpha$ 的过程称为单位化运算。

例如，把 $\begin{pmatrix}1 \\ -2 \\ 2\end{pmatrix}$ 单位化，得单位向量 $\begin{pmatrix}\frac{1}{3} \\ -\frac{2}{3} \\ \frac{2}{3}\end{pmatrix}$

## 正交

**定义** 若 $[\alpha,\beta]=0$，则称向量 $\alpha$ 与 $\beta$ 正交。显然，零向量与任何向量正交。

**定义** 两两正交的非零向量组称为正交组，由单位向量组成的正交组称为标准正交组。

例如，$\begin{pmatrix}\frac{1}{3} \\[4pt] \frac{2}{3} \\[4pt] \frac{2}{3}\end{pmatrix}, \begin{pmatrix}\frac{2}{3} \\[4pt] \frac{1}{3} \\[4pt] -\frac{2}{3}\end{pmatrix},\begin{pmatrix}\frac{2}{3} \\[4pt] -\frac{2}{3} \\[4pt] \frac{1}{3}\end{pmatrix}$ 是标准正交组。$\varepsilon_1=\begin{pmatrix}1 \\ 0 \\ \vdots \\ 0\end{pmatrix},\ldots ,\varepsilon_n=\begin{pmatrix}0 \\ 0 \\ \vdots \\ 1\end{pmatrix}$ 是标准正交组。

**命题** 向量组 $\alpha_1,\ldots ,\alpha_s$ 是标准正交组 $\iff [a_i,a_j]=\delta_{ij},~ i,j=1,2,\ldots ,s\iff([a_i,a_j])_{s\times s}=E_s$

**命题** 

**命题** 
