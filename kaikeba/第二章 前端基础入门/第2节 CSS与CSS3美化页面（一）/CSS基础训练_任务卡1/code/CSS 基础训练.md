#  CSS 基础训练 

### 1.CSS 是什么？

- CSS 指层叠样式表 (Cascading Style Sheets) 

- 样式定义如何显示控制 HTML 元素,从⽽实现美化HTML⽹⻚。

- 样式通常存储在样式表中，⽬的也是为了解决内容与表现分离的问题 

- 外部样式表(CSS⽂件)可以极⼤提⾼⼯作效率 

- 多个样式定义可层叠为⼀，后者可以覆盖前者样式 

###  2. CSS 的语法结构？请给出样例代码

```css
/* 格式： 选择器{属性:值;属性:值;属性:值;....}  */

p{
 color:red;
 text-align:center;
}

```

###  3. CSS 的注释？ 

```css
格式： /* ... */
```



###  4. HTML 中使用 CSS 的方式有哪几种？并描述一下他们的特点如何？ 

(1). 内联⽅式（⾏内样式） 

- 就是在HTML的标签中使⽤style属性来设置css样式 

```html
<p style="color:blue;font-family:⾪书">在HTML中如何使⽤css样式</p>
<!-- 特点：仅作⽤于本标签。-->
```





(2). 内部⽅式（内嵌样式） 

- 就是在head标签中使⽤` <style type="text/css"></style> `标签来设置css样式

```css
<style type="text/css">
 ....css样式代码
</style>
<!-- 特点：作⽤于当前整个⻚⾯ -->
```



(3). 外部导⼊⽅式（外部链⼊） 

3.1(推荐）就是在head标签中使⽤标签导⼊⼀个css⽂件，在作⽤于本⻚⾯，实现css样式设置 

```html
<link href="⽂件名.css" type="text/css" rel="stylesheet"/>
```



3.2 还可以使⽤import在style标签中导⼊css⽂件。 

```css
<style type="text/css">
 @import "style.css";
</style>
```



**谁离标签近，谁的优先级高！**

