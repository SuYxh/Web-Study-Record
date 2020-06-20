## 2020-06-19 学习日报

#### 1、今日学习目标

​         开课吧官网练习  、Grid布局、vue ToDoList

#### 2、目标完成情况

- 开课吧官网响应式布局中使用到了Grid布局、flex布局

- 使用vue做ToDoList

#### 3、收获和感悟

在学习Grid布局中的过程中写了一篇博客——[未来布局之星Grid]( [https://ironc.gitee.io/vpreco/view/H5C3/%E6%9C%AA%E6%9D%A5%E5%B8%83%E5%B1%80%E4%B9%8B%E6%98%9FGrid.html#%E6%9C%AF%E8%AF%AD%E7%AE%80%E4%BB%8B](https://ironc.gitee.io/vpreco/view/H5C3/未来布局之星Grid.html#术语简介) ) ，总结了一些Grid常用的一些属性。



对于CSS的一个体会：

在写代码之前，你需要先认真研究一下设计稿，分析哪些页面上的组件完全或者大体相同，那么可以把这些组件的样式通过 class 或者其他方式做成一个独立的整体，再通过组合多个 class 来扩展原有的样式。比如说一个按钮可能有不同的颜色、不同的大小，但是形状和文字大小间距都一样的话，可以通过一个 button class 来定义按钮的通用样式，然后利用 color class 来控制它的颜色。

另外如果你发现大多数情况下都在写重复的 CSS 代码，那么这些代码就很可能可以用于多个组件，这种情况下本着“不编写重复代码的精神”，把它单独抽离出来，作为工具 class（utility)，这样其他使用相同 CSS 属性的元素就可以直接使用它。比如说，使用 flex 布局时，可以定义一个`.flex` class，用于开启 flex，然后定义一个`.column` class 用于按列排布，还可以定义`.center`, `.left` 等 class 控制 flex 子元素的对齐方式。

