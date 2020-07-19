## 2020-07-18_19  vue_router&tabbar封装

### 一.周末学习总结

> 周末复习整理了一下vue的相关知识，重点是vue_router相关的部分，并封装了一个简单的tabbar组件。

### 二. Vue-Router

#### 2.1. 什么是前端路由

* 后端渲染\后端路由
* 前后端分离
* SPA\前端路由

#### 2.2. 路由的基本配置

* 安装vue-router
* `Vue.use() `-> 创建`VueRouter`对象 -> 挂在到`Vue`实例上
* 配置映射关系: 1.创建组件 2.配置映射关系 3.使用router-link/router-view

#### 2.3. 细节处理

* 默认路由: `redirect`
* `mode: history`
* `router-link -> tag/replace/active-class`

#### 2.4. 动态路由

* `/user/:id`
* `this.$route.params.id`



#### 2.5. 参数的传递

* params
* query -> URL
* URL: 
  * 协议://主机:端口/路径?查询
  * `scheme://host:port/path?query#fragment`

#### 2.6. 路由嵌套

* children: []



#### 2.7. 导航守卫

* 全局导航守卫
* 路由独享守卫
* 组件类守卫



#### 2.8. Keep-alive



#### 三.TabBar的封装过程

#### 3.1 样式

![](http://qn.huat.xyz/content/20200719214110.png)



#### 3.2 思路

1. 封装一个单独的`TabBar`组件

- 自定义`TabBar`组件，在APP中使用

- 让`TabBar`出于底部，并且设置相关的样式

  

   2.`TabBar`中显示的内容由外界决定

- 定义插槽

- flex布局平分`TabBar`

  

  3.自定义`TabBarItem`，可以传入 图片和文字

- 定义`TabBarItem`，并且定义两个插槽：图片、文字。

- 给两个插槽外层包装`div`，用于设置样式。

- 填充插槽，实现底部`TabBar`的效果



   4.传入 高亮图片

- 定义另外一个插槽，插入`active-icon`的数据

- 定义一个变量`isActive`，通过`v-show`来决定是否显示对应的`icon`



   5.`TabBarItem`绑定路由数据

- 安装路由：`npm install vue-router —save`

- 完成`router/index.js`的内容，以及创建对应的组件

- `main.js`中注册`router`

- APP中加入`<router-view>`组件



  6.点击`item`跳转到对应路由，并且动态决定`isActive`

- 监听`item`的点击，通过`this.$router.push()`替换路由路径

- 通过`this.$route.path.indexOf(this.link) !== -1`来判断是否是`active`



   7.动态计算`active`样式

- 封装新的计算属性：`**this**.isActive ? {'color': 'red'} : {}`