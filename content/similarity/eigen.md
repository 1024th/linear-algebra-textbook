# 特征值与特征向量

## 特征值与特征向量

### 定义

**定义** $A\in\mathbb{F}^{n\times n}$，若存在 $\lambda \in \mathbb{F}, \alpha \in \mathbb{F}^{n}$，且 $\alpha\neq 0$ 使得 $A\alpha=\lambda\alpha$，则称 $\lambda$ 为 $A$ 的特征值，$\alpha$ 为 $A$ 的对应于特征值 $\lambda$ 的特征向量。

利用特征值和特征向量的概念，上面的定理就可以重写为

**定理** $A$ 相似于对角阵 $\iff A$ 有 $n$ 个线性无关的特征向量。此时与 $A$ 相似的对角矩阵的对角线上的元素为都是 $A$ 的特征值。

### 求法

我们同样从结果逆推。

$$
A\alpha=\lambda\alpha \iff (\lambda E-A)\alpha=0
$$

也就是说，$\alpha$ 是齐次线性方程组 $(\lambda E-A)X=0$ 的非零解。所以系数矩阵 $(\lambda E-A)$ 不满秩，行列式为 $0$，即

$$
\lvert \lambda E-A \rvert = 0
$$

上式是以 $\lambda$ 为未知数的代数方程，由此可以求出特征值 $\lambda_1,\lambda_2,\ldots ,\lambda_s$。得到特征值之后代回到方程组，得到 $(\lambda_i E-A)X=0$，改方程组的非零解 $X$ 就是特征值 $\lambda_i$ 对应的特征向量（$i=1,2,\ldots ,s$）。这一步可以用高斯消元法求解。

小结一下，求特征值和特征向量的步骤：

1. 由 $\lvert\lambda E-A\rvert=0$ 求出特征值 $\lambda_1,\lambda_2,\ldots ,\lambda_s$（注：不要直接代入行列式的定义，一般都可以用行列式的性质来化简，参见下面的例题）。
2. 求出齐次线性方程组 $(\lambda_i E-A)X=0$ 的非零解，此即为对应与 $\lambda_i$ 的特征向量（$i=1,\ldots ,s$）。

**例** 求 $A=\begin{pmatrix} 5 & 4 & 4 \\ 4 & 5 & 4 \\ 4 & 5 & 5 \end{pmatrix}$ 的特征向量与特征值。

**解** （1）

$$
\begin{aligned}
\begin{vmatrix} \lambda E-A \end{vmatrix} &= \begin{vmatrix} \lambda-5 & -4 & -4 \\ -4 & \lambda-5 & -4 \\ -4 & -4 & \lambda-5 \end{vmatrix} \\
&= (\lambda-13)\begin{vmatrix} 1 & 1 & 1 \\ -4 & \lambda-5 & -4 \\ -4 & -4 & \lambda-5 \end{vmatrix} \\[15pt]
&= (\lambda-13)\begin{vmatrix} 1 & 1 & 1 \\ 0 & \lambda-1 & 0 \\ 0 & 0 & \lambda-1 \end{vmatrix} \\[15pt]
&= (\lambda-13)(\lambda-1)^2
\end{aligned}
$$

由 $(\lambda-13)(\lambda-1)^2 = 0$ 得特征值 $\lambda=13,1$

（2）对于 $\lambda=13$，$(13E-A) = \begin{pmatrix} 8 & -4 & -4 \\ -4 & 8 & -4 \\ -4 & -4 & 8 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 1 & -2 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$，

得非零解 $k\begin{pmatrix}-1\\ -1\\ -1\end{pmatrix}~(k\neq0)$，即对应于特征值 $13$ 的特征向量为 $k\begin{pmatrix}1\\ 1\\ 1\end{pmatrix}~(k\neq 0)$

（3）对于 $\lambda=1$，$(1E-A) = \begin{pmatrix} -4 & -4 & -4 \\ -4 & -4 & -4 \\ -4 & -4 & -4 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$，非零解 $k_1\begin{pmatrix}1\\ -1\\ 0\end{pmatrix}+k_2\begin{pmatrix}1\\ 0\\ -1\end{pmatrix}$（ $k_1,k_2$ 不全为 $0$ ），此即对应于特征值 $1$ 的特征向量。

**例** 求 $A=\begin{pmatrix} a & b \\ b & a \end{pmatrix}$ 的特征值与特征向量（$b\neq 0$）。

**解** （1）由 $\begin{vmatrix}\lambda E-A\end{vmatrix} =\begin{vmatrix}\lambda-a & -b \\ -b & \lambda-a\end{vmatrix}=(\lambda-a)^2-b^2=0$，求得特征值 $\lambda = a+b, a-b$。

（2）$\lambda=a+b$，$(a+b)E-A=\begin{pmatrix}b & -b \\ -b & b\end{pmatrix}\longrightarrow \begin{pmatrix}1 & -1 \\ 0 & 0\end{pmatrix}$ 非零解（即对应于 $a+b$ 的特征向量）为 $k\begin{pmatrix}1 \\ 1\end{pmatrix}$（ $k\neq 0$ ）。

（3）$\lambda=a-b$，$(a-b)E-A=\begin{pmatrix}-b & -b \\ -b & -b\end{pmatrix}\longrightarrow \begin{pmatrix}1 & 1 \\ 0 & 0\end{pmatrix}$，对应于 $a-b$ 的特征向量为 $k\begin{pmatrix}1 \\ -1\end{pmatrix}$（ $k\neq 0$ ）。

### 特征多项式

**定义** $f(\lambda)=\begin{vmatrix}\lambda E-A\end{vmatrix}$ 为 $A$ 的特征多项式。

若 $A=(a_{ij})_{n\times n}$，则

$$
\begin{aligned}
\begin{vmatrix}\lambda E-A\end{vmatrix} &= 
\begin{vmatrix}\lambda-a_{11} & -a_{12} & \cdots & -a_{1n} \\  
-a_{21} & \lambda-a_{22} & \cdots & -a_{2n} \\  
\vdots & \vdots &  & \vdots \\  
-a_{n_1} & -a_{n_2} & \cdots & \lambda-a_{nn}
\end{vmatrix} \\
&= (\lambda-a_{11})(\lambda-a_{22})\cdots(\lambda-a_{nn})+(\text{次数不大于 $n-2$ 的单项}) \\
&= \lambda^n - (\sum_{i=1}^{n} a_{ii})\lambda^{n-1}+\cdots+f(0)
\end{aligned}
$$

$f(\lambda)$ 的常数项 $f(0) = \begin{vmatrix}-A\end{vmatrix} = (-1)^n\begin{vmatrix}A\end{vmatrix}$。

注：（来自锁爷）除了最高次项和常数项，其他项的系数也可以算。

设 $f(x)=|xE-A_n|=x_n+a_1x^{n-1}+\cdots+a_n$

韦达定理 $a_1=-\operatorname{tr}(A)=-\sum\limits_{i=1}^{n}a_{ii}$

$a_2=(-1)^2\sum\limits_{\mathrm{C}_n^2}N_2$，其中 $N_2$​ 是二阶主子式

$a_r=(-1)^r\sum\limits_{\mathrm{C}_n^r}N_r$

$a_n=(-1)^n|A|$

**推论** 方阵 $A$ 的特征值是他的特征多项式的零点。

**定义** （来自锁爷）特征根是在 $\mathbb C$ 中的特征值。E.g. $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$，$f(x)=\begin{vmatrix}x&-1\\1&x\end{vmatrix}=x^2+1$，$\mathbb R$ 中无特征值，而特征根为 $\pm \mathrm{i}$。

特征值即 $f(x)=|xE-A|$ 在 $\mathbb F$ 中的所有特征根 $\lambda_1,\dots,\lambda_{r}$。特征向量即 $(\lambda_iE-A)X=0$ 的一个基础解系。


**定理** 相似矩阵有相同的特征多项式，从而有相同的特征值。

**证** 若 $B=T^{-1}AT$，则 

$$
\begin{aligned}
\begin{vmatrix}\lambda E-B\end{vmatrix} &= \begin{vmatrix}\lambda E-T^{-1}AT\end{vmatrix} = \begin{vmatrix}T^{-1}\left(\lambda E-A\right)T\end{vmatrix} \\
&= \begin{vmatrix}T^{-1}\end{vmatrix}\cdot \begin{vmatrix}\lambda E-A\end{vmatrix} \cdot \begin{vmatrix}T\end{vmatrix} = \begin{vmatrix}T^{-1}\end{vmatrix} \cdot \begin{vmatrix}T\end{vmatrix} \cdot \begin{vmatrix}\lambda E-A\end{vmatrix} \\
&= \begin{vmatrix}E\end{vmatrix} \cdot \begin{vmatrix}\lambda E-A\end{vmatrix} = \begin{vmatrix}\lambda E-A\end{vmatrix}
\end{aligned}
$$

**命题** 相似矩阵的秩相同。

**证** 运用矩阵相乘的秩公式即可。$B=T^{-1}AT$，故 $\operatorname{r}(B)\le \operatorname{r}(A)$。又 $A=T^{-1}BT$，所以 $\operatorname{r}(A)\le \operatorname{r}(B)$。于是 $\operatorname{r}(A)=\operatorname{r}(B)$。

**例** 若 $A=(a_{ij})_{n\times n}\sim B=\begin{pmatrix}1 &  &  &  &  &  \\  & \ddots &  &  &  &  \\  &  & 1 &  &  &  \\  &  &  & 0 &  &  \\  &  &  &  & \ddots &  \\  &  &  &  &  & 0\end{pmatrix}$，则  $\operatorname{r}(A) = \sum\limits_{i=1}^n a_{ii}$。

**证** 由 $\begin{vmatrix}\lambda E-A\end{vmatrix}=\begin{vmatrix}\lambda E-B\end{vmatrix}$，比较两边 $x^{n-1}$ 的系数，可知 $\operatorname{tr}(A) = \sum\limits_{i=1}^n a_{ii} = \operatorname{tr}(B) = \operatorname{r}(B)$，又因为 $\operatorname{r}(A)=\operatorname{r}(B)$，所以 $\operatorname{r}(A) = \sum\limits_{i=1}^n a_{ii}$。

**命题** 若 $\lambda$ 是 $A$ 的特征值，则 $f(\lambda)$ 是 $f(A)$ 的特征值。

**证** 设 $A\alpha=\lambda\alpha$，$\alpha\neq 0$，即 $\alpha$ 是 $A$ 的对应于特征值 $\lambda$ 的特征向量。设

$$
f\left(x\right)= a_0+a_1x+\cdots +a_tx^t
$$

则

$$
\begin{aligned}
f(A)\alpha &= [a_0E+a_1A+\cdots +a_tA^t]\alpha \\
&= a_0\alpha+a_1A\alpha+\cdots +a_tA^t\alpha \\
&= a_0\alpha + a_1\lambda\alpha+\cdots +a_t\lambda^t\alpha \\
&= [a_0+a_1\lambda+\cdots +a+t\lambda^t]\alpha \\
&= f(\lambda) \alpha \\
\end{aligned}
$$

故 $f(\lambda)$ 是 $f(A)$ 的特征值。

**例** 求矩阵 $B=\begin{pmatrix}a & b & c \\ c & a & b \\ b & c & a\end{pmatrix}$ 的特征值。

**解** 令 $A=\begin{pmatrix}0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0\end{pmatrix}$，则 $A^2=\begin{pmatrix}0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0\end{pmatrix}$，$A^3=E$，于是

$$
B=aE+bA+cA^2=f(A),~ f(x)=a+bx+cx^2
$$

由 $\begin{vmatrix}\lambda E-A\end{vmatrix}=\begin{vmatrix}\lambda & -1 & 0 \\ 0 & \lambda & -1 \\ -1 & 0 & \lambda\end{vmatrix}=\lambda^3-1=0$，得 $A$ 的三个特征值 $1,\omega, \omega^2$，其中 $\omega = \dfrac{-1+\sqrt{3}\mathrm{i}}{2}$。所以，$B=f(A)$ 的三个特征值为：

$$
\begin{aligned}
f(1) &= a+b+c \\
f(\omega) &= a+b\omega+c\omega^2 \\
f(\omega^2) &= a+b\omega^2+c\omega \\
\end{aligned}
$$

> 与此例题类似的课后习题：P178 8

### 特征向量的性质

**命题** 记 $V_{\lambda}=\{\alpha\in\mathbb{F}^n\mid A\alpha=\lambda\alpha\}$ 表示方阵 $A$ 对应于特征值 $\lambda$ 的所有特征向量的集合（为了保证运算封闭性，再加上一个零向量），那么 $\alpha_1,\ldots ,\alpha_t\in V_{\lambda} \implies \sum\limits_{i=1}^{t} k_i \alpha_i \in V_{\lambda}$。

**证** 直接代入计算即可。这实际上就是齐次线性方程组 $(\lambda E-A)X=0$ 的解向量的性质。

**命题** 方阵 $A$ 的对应于不同特征值的特征向量线性无关。

证法一：归纳法。

设 $\lambda_1,\dots,\lambda_{r}$ 为 $A$ 的两两互异的特征值。设 $A\alpha_i=\lambda_i\alpha_i~(\alpha_i\neq 0)$。

我们需要证明： $\sum\limits_{i=1}^{r}k_i\alpha_i=0 \implies \forall\:i,~k_i=0$。

$\sum\limits_{i=1}^{r}k_i\alpha_i=0 \implies A\left(\sum\limits_{i=1}^{r}k_i\alpha_i\right) = 0 \iff \sum\limits_{i=1}^{r}k_iA\alpha_i=0 \implies \sum\limits_{i=1}^{r}k_i(\lambda_i\alpha_i)= \sum\limits_{i=1}^{r} \lambda_i(k_i\alpha_i)=0$

又因为 $\sum\limits_{i=1}^{r}k_i\alpha_i=0 \implies \lambda_1\sum\limits_{i=1}^{r}k_i\alpha_i=0$

所以 $\sum\limits_{i=2}^{r}(\lambda_1-\lambda_i)(k_i\alpha_i) = 0$

所以 $\sum\limits_{i=2}^{r}k_i[(\lambda_1-\lambda_i)\alpha_i]=0$，其中 $(\lambda_1-\lambda_i)\neq0\implies(\lambda_1-\lambda_i)\alpha\neq 0$，且满足 $A[(\lambda_1-\lambda_i)\alpha_i]=\lambda_i[(\lambda_1-\lambda_i)\alpha_i]$。

这样就把 $r$ 个特征值 $\lambda_1,\lambda_2,\ldots ,\lambda_r$ 的问题化归为 $r-1$ 个特征值 $\lambda_2,\ldots ,\lambda_r$ 的问题，由归纳假设知 $\lambda_2,\ldots ,\lambda_r$ 对应的特征向量线性无关，于是 $\sum\limits_{i=2}^{r}k_i[(\lambda_1-\lambda_i)\alpha_i]=0\implies k_2=\cdots=k_r=0$

代回到 $\sum\limits_{i=1}^{r}k_i\alpha_i=0$，得到 $k_1=0$。证毕。

证法二：Vandermonde 行列式。

设 $k_1\alpha_1+\cdots +k_r\alpha_r$，两边逐次左乘 $A$，利用 $A\alpha_i=\lambda_i\alpha_i$，可得

$$
\begin{array}{c}
\lambda_1k_1\alpha_1+\cdots +\lambda_rk_r\alpha_r=0 \\
\lambda_1^2k_1\alpha_1+\cdots +\lambda_r^2k_r\alpha_r=0 \\
\vdots \\
\lambda_1^{r-1}k_1\alpha_1+\cdots +\lambda_r^{r-1}k_r\alpha_r=0 \\
\end{array}
$$

写成矩阵形式

$$
\begin{pmatrix}k_1\alpha_1&k_2\alpha_2&\cdots&k_r\alpha_r\end{pmatrix}
\begin{pmatrix}
1&\lambda_1&\cdots&\lambda_1^{r-1}\\
1&\lambda_2&\cdots&\lambda_2^{r-1}\\
\vdots & \vdots & & \vdots \\
1&\lambda_r&\cdots&\lambda_r^{r-1}\\
\end{pmatrix}
=0
$$

$r$ 阶方阵 $B=\begin{pmatrix}1&\lambda_1&\cdots&\lambda_1^{r-1}\\1&\lambda_2&\cdots&\lambda_2^{r-1}\\ \vdots & \vdots & & \vdots \\1&\lambda_r&\cdots&\lambda_r^{r-1}\\\end{pmatrix}$，它的行列式为 Vandermonde 行列式 $\prod\limits_{1\le i<j\le r}^r(\lambda_j-\lambda_i)$，由于 $\lambda_1,\ldots ,\lambda_r$ 两两互异，所以 $B$ 的行列式不等于零，所以 $B$ 可逆。上式两边右乘 $B^{-1}$ 得

$$
\begin{pmatrix}k_1\alpha_1&k_2\alpha_2&\cdots&k_r\alpha_r\end{pmatrix} = 0
$$

所以 $k_i\alpha_i=0,~i=1,2,\ldots ,r$，又因为 $\alpha_i\neq 0$，所以 $k_i=0,~i=1,2,\ldots ,r$。这就说明了 $\alpha_1,\alpha_2,\ldots ,\alpha_r$ 线性无关。

**推论** 若 $n$ 阶方阵有 $n$ 个不同的特征值，则相似于对角阵。

**证** 对应于每个特征值至少有一个特征向量，所以有 $n$ 个特征向量，它们对应于不同的特征值，因此线性无关。所以这个 $n$ 阶方阵有 $n$ 个线性无关的特征向量，故相似于对角阵。

**例** 在上文中，$A=\begin{pmatrix} 5 & 4 & 4 \\ 4 & 5 & 4 \\ 4 & 5 & 5 \end{pmatrix}$，对应于特征值 $13$，$A$ 有特征向量 $\begin{pmatrix} 1\\1\\1\end{pmatrix}$，对应于特征值 $1$，$A$ 有线性无关的特征向量 $\begin{pmatrix}1 \\ -1 \\ 0\end{pmatrix},~ \begin{pmatrix}1 \\ 0 \\ -1\end{pmatrix}$。所以 $\begin{pmatrix} 1\\1\\1\end{pmatrix},~ \begin{pmatrix}1 \\ -1 \\ 0\end{pmatrix},~ \begin{pmatrix}1 \\ 0 \\ -1\end{pmatrix}$ 是 $A$ 的三个线性无关的特征向量。

**定理** $A$ 相似于对角阵 $\iff n=\sum\limits_{i=1}^{r}[n-r(\lambda_iE-A)].$

**证** 设 $\lambda_1,\dots,\lambda_{r}$ 为 $A$ 的两两互异的特征值，根据基础解系基本定理，$V_{\lambda_i}$ 有极大无关组 $\alpha_{i1},\dots,\alpha_{is_i}$，其中 $s_i=n-\operatorname{r}(\lambda_iE-A)$。

只需证 $\alpha_{11},\dots,\alpha_{1s_1},\dots,\alpha_{r1},\dots,\alpha_{rs_r}$ 线性无关。

设 $\sum\limits_{j=1}^{s_1}k_{1j}\alpha_{1j}=\beta_1\in V_{\lambda_1},~\dots,~\sum_{j=1}^{s_r}k_{rj}\alpha_{rj}=\beta_r\in V_{\lambda_r}$，

需证：$\beta_1+\cdots+\beta_s=0\implies k_{ij}=0$。

用反证法，假设 $k_{ij}\neq0$，那么有 $\beta_i\neq0$（因为 $\beta_i=0\implies k_{i1}=k_{i2}=\cdots =k_{is_i}=0$），这与不同特征值对应的特征向量线性无关矛盾，所以原命题得证。

**锁爷说：每年都考一个类似例 1 的题**

**例 1** $A=\begin{pmatrix}1&2&3\\2&3&1\\3&1&2\end{pmatrix}$ 在 $\mathbb R$ 上是否相似于一个对角阵？在 $\mathbb Q$ 上呢？若相似，则求可逆矩阵 $P$ 使得 $P^{-1}AP$ 为对角阵，并计算 $A^{-1},A^{-100}$。

**解** $|XE-A|=\begin{vmatrix}x-1&-2&-3\\-2&x-3&-1\\-3&-1&x-2\end{vmatrix}=\begin{vmatrix}x-6&x-6&x-6\\-2&x-3&-1\\-3&-1&x-2\end{vmatrix}=(x-6)\begin{vmatrix}1&1&1\\-2&x-3&-1\\-3&-1&x-2\end{vmatrix}=(x-6)\begin{vmatrix}1&0&0\\-2&x-1&1\\-3&2&x+1\end{vmatrix}=(x-6)(x^2-3)$

**Note**. 处理这种行列式一般不直接展开成 $x^n$，而是利用行列式性质直接求根。

$x_1=6,x_2=\sqrt3,x_3=-\sqrt3$。

$\therefore \mathbb R$ 上相似，$\mathbb Q$ 上不相似。

$\lambda_1=6,\alpha=\begin{pmatrix}1\\1\\1\end{pmatrix}$

$\lambda_2=\sqrt{3},\alpha=\begin{pmatrix}\frac{-1-\sqrt{3}}{2}\\ \frac{-1+\sqrt{3}}{2}\\1\end{pmatrix}$

$\lambda_2=-\sqrt{3},\alpha=\begin{pmatrix}\frac{-1+\sqrt{3}}{2}\\ \frac{-1-\sqrt{3}}{2}\\1\end{pmatrix}$

$$
\Lambda = \begin{pmatrix}6 & 0 & 0 \\ 0 & \sqrt{3} & 0 \\ 0 & 0 & -\sqrt{3} \end{pmatrix},\quad P = \begin{pmatrix}1 & \frac{-1-\sqrt{3}}{2} & \frac{-1+\sqrt{3}}{2} \\ 1 & \frac{-1+\sqrt{3}}{2} & \frac{-1-\sqrt{3}}{2} \\ 1 & 1 & 1\end{pmatrix}
$$

$P^{-1}AP=\begin{pmatrix}6\\&\sqrt3\\&&-\sqrt3\end{pmatrix},\quad A=P\Lambda P^{-1}$

$A^{-1}=P\Lambda^{-1}P^{-1}$

$A^{-100}=P\Lambda^{-100}P^{-1}=P\begin{pmatrix}\frac1{6^{100}}\\&\frac1{(\sqrt3)^{100}}\\&&\frac1{(-\sqrt3)^{100}}\end{pmatrix}P^{-1}$
