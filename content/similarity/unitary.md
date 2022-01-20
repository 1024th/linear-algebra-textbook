# 几类特殊的矩阵、Schur 分解

## 关联阵

**定义** 称 $\overline{A}^\mathrm{T}$ 为 $A$ 的关联阵，记为 $A^\star$。也称为共轭转置。

**性质** （1）$(A^\star)^\star=A$

（2）$(A+B)^\star=A^\star+B^\star$

（3）$(kA)^\star=\bar{k}A^\star$

（4）$(A^\mathrm{T})^\star =(A^\star)^\mathrm{T}$

（5）$(AB)^\star = B^\star A^\star$

（6）若 $A$ 可逆，则 $(A^{-1})^\star = (A^\star)^{-1}$ 


**命题** 设 $A$ 为 $n$ 阶方阵，则对任意 $n$ 维列向量 $\alpha,\beta$，均有 $[A\alpha,\beta]=[\alpha,A^\star \beta]$

**证** $[A\alpha,\beta]=(A\alpha)^\star \beta=\alpha^\star A^\star \beta=[\alpha,A^\star \beta]$

## 酉阵

**定义** 若 $n$ 阶方阵 $A$ 满足 $AA^\star = A^\star A=E$，即 $A^{-1}=A^\star$，则称 $A$ 为酉阵。

**性质** （1）若 $A$ 是酉阵，则 $A^\mathrm{T}, \overline A, A^{-1}=A^\star$ 都是酉阵。

（2）若 $A$ 与 $B$ 是两个 $n$ 阶酉阵，则 $AB$ 也是酉阵。

**证** （1）因为 $(A^\mathrm{T})^{-1} = (A^{-1})^\mathrm{T} = (A^\star)^\mathrm{T}=(A^\mathrm{T})^\star$

$(\overline A)^{-1}=\overline{(A^{-1})}=\overline{A^\star}=(\overline A)^\star$

$(A^\star)^{-1}=(A^{-1})^\star=(A^\star)^\star$

（2）$(AB)^{-1} = B^{-1}A^{-1} = B^\star A^\star=(AB)^\star$

**命题** $n$ 阶方阵 $A$ 是酉阵 $\iff A$ 的列向量是标准正交组 $\iff A$ 的行向量是标准正交组。

**证** $A$ 是酉阵 $\iff A^{-1} = A^\star \iff A^\star A=E \iff (A^\star A)(i,j) = \delta_{ij}$，即 $(A(i))^\star\cdot A(j)=\delta_{ij}$，即 $[A(i), A(j)]=\delta_{ij}$，即 $A$ 的列向量组为标准正交组。

又 $A$ 是酉阵 $\iff A^\mathrm{T}$ 是酉阵 $\iff A^\mathrm{T}$ 的列向量组为标准正交组 $\iff A$ 的行向量为标准正交组。

**命题** 若 $\alpha_1,\ldots ,\alpha_t$ 是 $\mathbb{F}^{n}$ 中的标准正交组（$t<n$），则存在 $n$ 维向量 $\alpha_{t+1},\ldots ,\alpha_{n}$ 使 $n$ 阶方阵 $\begin{pmatrix}\alpha_1 & \cdots & \alpha_t & \cdots & \alpha_n\end{pmatrix}$ 为酉阵。

**定义** 实酉阵称为正交阵，即实矩阵 $A\ (\overline{A}=A)$ 为正交阵 $\iff A^{-1}=A^\mathrm{T}$。

## 酉相似

**定义** 设 $A,B$ 为两个 $n$ 阶方阵，若存在酉阵 $U$ 使得 $B=U^{-1}AU=U^\star AU$，则称 $A$ 与 $B$ 酉相似。记成 $A\overset{\overline{U}}{\sim}B$。

**性质** （1）$A\overset{\overline{U}}{\sim}A$；（2）$A\overset{\overline{U}}{\sim}B\implies B\overset{\overline{U}}{\sim}A$；（3）$A\overset{\overline{U}}{\sim}B,B\overset{\overline{U}}{\sim}C\implies A\overset{\overline{U}}{\sim}C$。

**Schur 引理** 设 $A\in M_n(\mathbb{F})$ 的特征根全在 $\mathbb{F}$ 中，则存在酉阵 $U\in M_n(\mathbb{F})$ 使得 $U^{-1}AU$ 是一个上三角阵（即 $A$ 在 $\mathbb{F}$ 上酉相似于上三角阵）。

**证** 对 $A$ 的阶数 $n$ 用归纳法。

$n=1$ 时，$A$ 已是上三角阵。

若 $n-1$ 时结论成立，设 $A\in M_n(\mathbb{F})$ 的特征根全在 $\mathbb{F}$ 中，此时至少有一个特征根 $\lambda_1\in\mathbb{F}$ 使得 $A\alpha_1=\lambda_1\alpha_1$（$0\neq \alpha_1\in \mathbb{F}^{n\times 1}$）。

可设 $\lVert \alpha_1\rVert = 1$。考虑 $\alpha_1^\star X=0$ 的一个基础解系（含有 $n-1$ 个向量），用 Schmidt 正交化、单位化过程，得到 $\alpha_2,\ldots ,\alpha_n$，那么 $\alpha_1,\alpha_2,\ldots ,\alpha_n$ 成为一组标准正交基。

命 $U_1=(\alpha_1 ,\cdots , \alpha_n)$，则 $U_1$ 是酉阵，且

$$
\begin{aligned}
AU_1 &= \left(A\alpha_1, A\alpha_2, \cdots , A\alpha_n\right)  \\
&= (\lambda_1\alpha_1, A\alpha_2, \cdots, A\alpha_n) \\
&= (\alpha_1,\cdots ,\alpha_n)\begin{pmatrix}\lambda_1 & \beta^\mathrm{T} \\ \bm 0 & \large A_1 \end{pmatrix} \\
\end{aligned}
$$

所以 $U_1^{-1}AU_1=\begin{pmatrix}\lambda_1 & \beta^\mathrm{T} \\ \bm 0 & \large A_1 \end{pmatrix}$，其中 $A_1\in M_{n-1}(\mathbb{F}), \beta\in\mathbb{F}^{n\times 1}$

因为 $|xE_{n}-A|=|xE_{n}-U^{-1}AU|=\left|x\begin{pmatrix}1 & 0 \\ 0 & E_{n-1}\end{pmatrix}-\begin{pmatrix}\lambda_1 & \beta^\mathrm{T} \\ 0 & A_1\end{pmatrix}\right|=(x-\lambda_1)|xE_{n-1}-A_1|$

且 $A$ 的特征根全在 $\mathbb{F}$ 中，

所以 $A_1$ 的特征根全在 $\mathbb{F}$ 中。由归纳假设，存在 $n-1$ 阶酉阵 $T$ 使得 $T^{-1}A_1T=\begin{pmatrix}\lambda_2 &   & * \\  & \ddots &  \\ 0 &  & \lambda_n\end{pmatrix}$。

命 $U_2=\begin{pmatrix}1 & \bm 0^\mathrm{T} \\ \bm 0 & T\end{pmatrix}$，则 $U_2$ 是酉阵。

命 $U=U_1U_2$，则 $U\in M_n(\mathbb{F})$ 是酉阵，且

$$
\begin{aligned}
U^{-1}AU &= U_2^{-1} U_1^{-1} AU_1U_2 = U_2^{-1} \begin{pmatrix}\lambda_1 & \beta^\mathrm{T} \\ \bm 0 & \large A_1 \end{pmatrix} U_2 \\
&= \begin{pmatrix}1 & \bm 0^\mathrm{T} \\ \bm 0 & T^{-1} \end{pmatrix}\begin{pmatrix}\lambda_1 & \beta^\mathrm{T} \\ \bm 0 & \large A_1 \end{pmatrix}\begin{pmatrix}1 & \bm 0^\mathrm{T} \\ \bm 0 & T\end{pmatrix} \\
&= \begin{pmatrix}\lambda_1 & \beta^\mathrm{T}T \\ \bm 0 & T^{-1}A_1T\end{pmatrix} = \begin{pmatrix}\lambda_1 & & * \\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}\\
\end{aligned}
$$

即 $A$ 在 $\mathbb{F}$ 上酉相似于上三角阵，所以阶数为 $n$ 时也成立。

## 正规阵

**定义** 若 $A\in M_n(\mathbb{F})$ 满足 $A^\star =A$，则称 $A$ 为 Hermite 阵。

**定义** 若 $A\in M_n(\mathbb{F})$ 满足 $A^\star A=AA^\star$，则称 $A$ 为正规阵。

### 小结：几类特殊的矩阵

**正规阵**：$A^\star A=AA^\star$。下面这些矩阵都是正规阵：

- **酉阵**：$A^\star A=AA^\star=E \iff A^\star=A^{-1}$
  - 实的酉阵为**正交阵**：$\overline A = A$，$A^\mathrm{T}A=AA^\mathrm{T}=E\iff A^\mathrm{T}=A^{-1}$
- **Hermite 阵**：$A^\star=A$
  - 实的 Hermite 阵为**实对称阵**：$\overline A=A$，$A^\mathrm{T}=A$

**引理** 设 $A$ 是正规阵，$\alpha$ 是 $A$ 的对应于特征值 $\lambda$ 的特征向量，则 $\alpha$ 也是 $A^\star$ 的对应于特征值 $\overline\lambda$ 的特征向量。

**证** 因为 $A$ 是正规阵，$A^{\star} A=A A^{\star}$，从而

$$
\begin{aligned}
(A-\lambda E)^{\star}(A-\lambda E) &=\left(A^{\star}-\bar\lambda E\right)(A-\lambda E) \\
&=A^{\star} A-(\lambda+\bar{\lambda}) A+\bar\lambda \lambda E \\
&=A A^{\star}-(\bar\lambda+\lambda) A+\lambda\bar\lambda E \\
&=(A-\lambda E)(A-\lambda E)^{\star}
\end{aligned}
$$

由于 $A \alpha=\lambda \alpha$，因而 $(A-\lambda E) \alpha=0$，所以

$$
\begin{aligned}
&\phantom{=} \left[(A-\lambda E)^{\star} \alpha,(A-\lambda E)^{\star} \alpha\right] \\
&= \left[\alpha,(A-\lambda E)(A-\lambda E)^{\star} \alpha\right] \\
&= \left[\alpha,(A-\lambda E)^{\star}(A-\lambda E) \alpha\right] \\
&= \left[(A-\lambda E) \alpha,(A-\lambda E) \alpha\right] \\
&= 0
\end{aligned}
$$

于是 $A^\star\alpha-\bar\lambda\alpha=(A-\lambda E)^\star\alpha=0$，即 $A^\star\alpha=\bar\lambda\alpha$。引理得证。

**定理** 正规阵 $A$ 的对应于不同特征值的特征向量是正交的。

**证** 设 $\lambda_1,\lambda_2$ 是 $A$ 的不同特征值，对应的特征向量分别是 $\alpha,\beta$，则

$$
A\alpha=\lambda_1\alpha,\ A^\star\beta=\bar\lambda_2\beta
$$

又因为 $[A\alpha,\beta]=[\alpha,A^\star\beta]$，所以 $[\lambda_1\alpha,\beta]=[\alpha, \bar \lambda_2 \beta]$，

于是 $\bar\lambda_1[\alpha,\beta]=\bar\lambda_2[\alpha,\beta]$

因为 $\lambda_1\neq \lambda_2$，所以 $\bar\lambda_1\neq \bar\lambda_2$，故必有 $[\alpha,\beta]=0$。

**正规阵基本定理** 设 $A\in M_n(\mathbb{F})$ 的特征根全在 $\mathbb{F}$ 中，且 $\mathbb{F}$ 具有性质“$\forall a,b\in\mathbb{R}, a+b\mathrm{i}\in\mathbb{F}\iff a-b\mathrm{i}\in\mathbb{F}$”，则 $A$ 在 $\mathbb{F}$ 上酉相似于一个对角阵 $\iff A$ 是一个正规阵。

**证** “$\implies$”：设酉阵 $U\in M_n(\mathbb{F})$ 使得 $U^{-1}AU=\begin{pmatrix}\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}$，则

$$
A=U\begin{pmatrix}\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}U^{-1},\quad A^\star=U\begin{pmatrix}\bar\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \bar\lambda_n\end{pmatrix}U^{-1}
$$

所以

$$
\begin{aligned}
AA^\star &= U\begin{pmatrix}\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}U^{-1}U\begin{pmatrix}\bar\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \bar\lambda_n\end{pmatrix}U^{-1} \\
&= U\begin{pmatrix}\lambda_1\bar\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n\bar\lambda_n\end{pmatrix}U^{-1} \\
&= U\begin{pmatrix}\bar\lambda_1\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \bar\lambda_n\lambda_n\end{pmatrix}U^{-1} = A^\star A\\
\end{aligned}
$$

“$\impliedby$”：设 $A^\star A=AA^\star$，由 Schur 引理，存在酉阵 $U\in M_n(\mathbb{F})$ 使得

$$
U^\star AU=\begin{pmatrix}b_{11} & \cdots & b_{1n} \\ & \ddots & \vdots \\ 0 & & b_{nn} \end{pmatrix}=:B
$$

而由 $A^\star A=AA^\star$，得 $U^\star A^\star U\cdot U^\star AU=U^\star A^\star AU=U^\star AA^\star U=U^\star A U\cdot U^\star A^\star U$，所以

$$
\begin{pmatrix}\overline{b_{11}} & & 0 \\ \vdots & \ddots & \\ \overline{b_{1n}} & \cdots & \overline{b_{nn}} \end{pmatrix}\begin{pmatrix}b_{11} & \cdots & b_{1n} \\ & \ddots & \vdots \\ 0 & & b_{nn} \end{pmatrix}=\begin{pmatrix}b_{11} & \cdots & b_{1n} \\ & \ddots & \vdots \\ 0 & & b_{nn} \end{pmatrix}\begin{pmatrix}\overline{b_{11}} & & 0 \\ \vdots & \ddots & \\ \overline{b_{1n}} & \cdots & \overline{b_{nn}} \end{pmatrix}
$$

依次比较两边对角线上元素，得

$$
\begin{array}{c}
|b_{11}|^2=|b_{11}|^2+|b_{12}|^2+\cdots +|b_{1n}|^2 \implies b_{12}=\cdots =b_{1n}=0 \\
|b_{22}|^2=|b_{22}|^2+|b_{23}|^2+\cdots +|b_{2n}|^2 \implies b_{23}=\cdots =b_{2n}=0 \\
\cdots
\end{array}
$$

故有 $i<j$ 时，$b_{ij}=0$，即 $B$ 为对角阵。所以 $A$ 在 $\mathbb{F}$ 上酉相似于一个对角阵。

**推论** 酉阵、Hermite 阵必酉相似于对角阵。

## Hermite 阵

**命题** Hermite 阵的特征根均为实数。

**证** 设 $A$ 是 Hermite 阵（$A^\star=A$），$\lambda\in\mathbb{C}$ 是 $A$ 的一个特征根，于是存在 $0\neq \alpha\in\mathbb{C}^{n\times 1}$ 使 $A\alpha=\lambda\alpha$。那么有

$$
[A\alpha,\alpha]=[\alpha, A^\star\alpha]=[\alpha,A\alpha]
$$

于是 $[\lambda\alpha,\alpha]=[\alpha,\lambda\alpha]$，即 $\bar\lambda[\alpha,\alpha]=\lambda[\alpha,\alpha]$。

因为 $\alpha\neq 0\implies[\alpha,\alpha]\neq 0$，故必有 $\bar\lambda=\lambda$，即 $A$ 的特征根为实数。

---

一些性质：

$\forall A\in M_n(\mathbb{R})$，$A=\underbrace{\frac{1}{2}(A+A^\mathrm{T})}_{\text{实对称}}+\underbrace{\frac{1}{2}(A-A^\mathrm{T})}_{\text{实反对称}}$。

$\forall B_{m\times n}$，$BB^\star$ 与 $B^\star B$ 均为 Hermite 阵。

**命题** $\operatorname{r}(BB^\star)=\operatorname{r}(B)=\operatorname{r}(B^\star B)$。

**证** 由于 $BX=0\implies B^\star BX=0$，故 $BX=0$ 的解均为 $B^\star BX=0$ 的解。

反过来，如果 $\alpha\in \mathbb{C}^{n\times 1}$ 使 $B^\star B\alpha=0$，则有 $\alpha^\star B^\star B\alpha=0$，即 $[B\alpha,B\alpha]=0\implies B\alpha=0$，所以 $B^\star BX=0$ 的解也是 $BX=0$ 的解。

所以 $BX=0$ 与 $B^\star BX=0$ 在 $\mathbb{C}$ 中同解。由基础解系基本定理，$n-\operatorname{r}(B)=n-\operatorname{r}(B^\star B)\implies \operatorname{r}(B)=\operatorname{r}(B^\star B)$。

同理，$\operatorname{r}(B)=\operatorname{r}(B^\star)=\operatorname{r}(BB^\star)$。

### 实对称阵

设 $A$ 是实对称阵，由正规阵基本定理，存在酉阵 $U$ 使得 $U^{-1}AU=\begin{pmatrix}\lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n\end{pmatrix}$。

实对称阵是 Hermite 阵，故其特征值全是实数，特征向量是实系数线性方程组 $(\lambda_i E-A)X=0$ 的非零解向量，因而可取实向量。这样，在酉相似于实对角阵时可取实酉阵，即正交阵作为过渡矩阵。

**定理** 实对称阵必正交相似于实对角阵。

