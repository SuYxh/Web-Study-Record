## 基础-组件-局部组件

> 局部组件的实现
>
> ​        1.在实例选项compoents中定义局部组件名字
>
> ​        2.在组件名字相对应的对象中定义选项(template、data()、.....)
>
> ​        3.在实例视图中使用组件
>
> ```js
>// 1.实例选项compoents中定义局部组件名字
> components: {
> // 2.在组件名字相对应的对象中定义选项(template、data()、.....)
>  "z-j": {
>         template: `<div>我是z-j组件--{{msg}}</div>`,
>         data() { 
>             return {
>                 msg: "abc"
>             }
>         }
>     }
>    }
>    // 3.在实例视图中使用组件
> <div id="app">
> <z-j></z-j>
> </div>
>   ```
> 

## 基础-组件-组件嵌套

> 1. 全局组件 嵌套 全局组件
>
> 2. 局部组件 嵌套 全局组件
>
> ```js
> // 全局组件
> Vue.component('child-a', {
> 	template: "<div>我是child-a组件</div>"
> })
> Vue.component('child-b', {
> 	template: "<div>我是child-b组件</div>"
> })
> // 全局嵌套全局（此时 child-a和child-b 是parent-a的子组件）
> Vue.component('parent-a', {
> template: 
>  `<div>
>      <child-a></child-a>
>      <child-b></child-b>
>  </div>`
> })
> // 局部嵌套全局 （此时 child-a和child-b 是com-a的子组件)
> components: {
> "com-a": {
>   template: `
>       <div>
>           <child-a></child-a>
>           <child-b><child-b>
>       </div>
>       `
> }}
> ```
>
> **`注意:`** 组件嵌套和全局及局部组件没关系

## 基础-组件-组件通信的几种情况

> 组件嵌套 => 父子组件 => 父组件传递数据给子组件使用 =>  组件之间的传值 => 也叫组件之间的通信
>
> 组件之间的通信根据关系的可以分为:
>
> 1. 父子组件通信
>   - 父组件到子组件
>    - 子组件到父组件
> 2. 兄弟组件通信

## 基础-组件-父子组件传值-props属性

​	父子组件的传值有多种方法, 兄弟组件的通信也有自己的写法

> 1. 子组件的 props 属性值是一个数组  
>
> 2. 数组中的值 绑定为子组件上的属性 用来接受父组件的传值
>
> 3. 在子组件的template中就可以使用 绑定的属性（msg）拿到父组件传递的值
>
> ```js
>// 调用组件
> <div id="app">
> 	<child-a :msg="msgParent"></child-a>
> </div>
> 
> // 子组件
> Vue.component("child-a", {
>  template: ` <div>
>          我是子组件
>          {{count}}是自己的data中的数据count
>          {{msg}}是来源于外部组件的数据</div>
>          </div>`,
>  data() {
>      return {
>          count: 100
>      }
>  },
>  props: ["msg"]  
> })
> 
> // 父组件(根组件)
> new Vue({
>     el：'#app'
>     data: {
> 			msgParent: "我是父组件"
> 	}
> })
> ```

## 基础-组件-组件和模块的区别

> - 模块：侧重于功能或者数据的封装
> - 组件：包含了 template、style 和 script，而它的 script 可以由各种模块组成

## 基础-单页应用(简称SPA)

> - 传统模式 每个页面及其内容都需要从服务器一次次请求  如果网络差, 体验则会感觉很慢
>- SPA模式, **`第一次`**加载 会将所有的资源都请求到页面 **`模块之间切换`**不会再请求服务器
> 
> SPA优点：
>
> 1. 用户体验好,因为前端操作几乎感受不到网络的延迟
>2. 完全组件化开发 ,由于只有一个页面,所以原来属于一个个页面的工作被归类为一个个**`组件`**.
> 
> SPA缺点:
>
> 1. **`首屏`**加载慢(可以只加载所需部分)
>2. 不利于**`SEO`**（**`服务端渲染`**可以解决）
> 3. **`开发难度高`**(框架) 

## 基础-单页应用 SPA-实现原理

> **`原理:`**
>
> - 可以通过页面地址的锚链接来实现spa
>- hash(锚链接)位于链接地址 **`#`**之后
> - hash值的改变**`不会触发`**页面刷新
> - hash值是url地址的一部分,会存储在页面地址上 我们可以获取到
> - 可以通过**`事件监听`**hash值得改变
> - 拿到了hash值,就可以根据不同的hash值进行不同的**`内容切换`**

## 基础-路由-js 实现路由

> - 通过上一个小节内容可以得出 采用**`hash值改变`**的特性来进行前端路由切换
>
> **`路径`**: 
>
> 1. 实现导航结构（'#/aaa'） 
>2. onhashchange事件监听hash值的改变
> 3. 获取hash值  根据值的不同  改变视图内容
> 

## 基础-路由-vue-router-文档

> - Vue-Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。
>- 它和 Vue.js 的核心深度集成，让构建**单页面**应用变得简单
> - 实现根据不同的请求地址 而**`显示不同的内容`**
> - 如果要使用 vue开发项目,前端路由功能**`必须使用`**vue-router来实现
> 
> **`用法:`**
>
> 1. CDN
>2. 本地文件
> 3. npm 
> 
> **`注意:`** 本地文件引入vue-router ，一定要先引入vue.js，再引入vue-router

## 基础-路由-vue-router的基本用法

> 1. 导入vue和vue-router
> 2. 设置HTML中的内容
> 3. 实例化路由对象,配置路由规则
> 4. 创建路由对应的组件
> 5. 把router实例挂载到vue实例上
>
> ```html
> 2.设置HTML中的内容
> <!-- router-link 最终会被渲染成a标签，to指定路由的跳转地址 -->
> <router-link to="/users">用户管理</router-link>
> <router-link to="/home">首页展示</router-link>
> <!-- 路由匹配到的组件将渲染在这里 -->
> <router-view></router-view>
> ```
>
> ```js
> // 3.配置路由规则
> var router = new VueRouter({
>     routes: [
>         {  path: '/users', component: Users }
>         {  path: '/home', component: Home }
>     ]
> });
> ```
>
> ```js
> 
> // 4.创建组件
> let Home = {
>   template: '<div>这是Home内容</div>'
> };
> let Users = {
>   template: '<div>这是用户管理内容</div>'
> };
> ```
>
> ```js
> // 5.把router实例挂载到vue实例上
> var vm = new Vue({
> 	el: '#app',
> 	router
> });
> ```
>

## 基础-路由-vue-router-动态路由

> - 点击**`列表页`** 跳转到**`详情页`**时,跳转的链接需要携带参数,会导致**`path`**不同
>- 当path不同却需要对应同一个组件时,需要用到动态路由这一概念
> 
> **`步骤：`**
>
> 1.  <router-link>标签上传入不同的值
>
>    ```js
>   <router-link to="/item/8">小米电视</router-link>
>    <router-link to="/item/9">华为电视</router-link>
>    <router-view> </router-view>
>    ```
> 
> 2. 路由规则中 **尾部** 添加动态参数 id
>
>    ```js
>   { path: '/item/:id', component: Items }
>    ```
> 
> 3. 在组件内部可以使用**$route.params** 获取当前路由对象的动态参数
>
>    ```js
>   let Items = {
>      template: '<div>我是商品详情页 {{ $route.params.id }}</div>',
>      mounted： {
>          console.log(this.$route.params.id);
>      }
>    }
>    ```

## 基础-路由-vue-router-to 属性赋值

> - to 有多种赋值方式  
>
> ```html
><!-- 常规跳转 -->
> <!-- <router-link to="/aaa">aaa</router-link> -->
> <!-- 变量 -->
> <!-- <router-link :to="bbb">bbb</router-link> -->
> <!-- 根据对象name跳转 --> （注意:name值是字符串）
> <!-- <router-link :to="{name:'ccc'}">ccc</router-link> -->
> <!-- 根据对象path跳转 -->（注意：必须得加上/ 不然容易错乱）
> <!-- <router-link :to="{path:'/ddd'}">ddd</router-link> -->
> <!-- 带参数的跳转 --> （注意获取参数route 不要写成router）
> <!--<router-link :to="{name:'eee',params:{id:1}}">体育</router-link> -->
> <router-view></router-view>
> ```
> 

## 基础-路由-vue-router-重定向

> **场景:** 当希望某个页面被强制中转时  可采用redirect 进行路由重定向设置
>
> ```json
> path: "/bj",
> redirect: "/sh", // 强制跳转上海
> component: {
> 	template: `<div>体育</div>`
> }
> ```
>

## 基础-路由-vue-router-编程式导航

> **`场景:`**点击的时候路由实现跳转
>
> ```js
>methods: {
>  goPage() {
>   // 跳转到新闻页面
>      this.$router.push({
>          path: "/news"
>      });
>    }}
>    ```

## 基础-路由的激活样式

> - 当前路由在导航中是拥有激活class样式的
>
> 审查导航元素,可以发现 激活样式
>
> ```html
> <a href="#/bj" class="router-link-exact-active router-link-active">北京</a>
> ```
>
> 设置激活class样式即可
>