## 基础-路由-vue-router-嵌套路由

> - 如果存在**`组件嵌套`**,就需要提供多个视图容器<router-view></router-view>
>- 同时,router-link和router-view 都可以添加类名、设定样式
> 
> 
>
> ![路由嵌套](路由嵌套.png)
>
> **`路径:`**
>
> 1. 在原有的一级导航的template里面 配置 二级导航的router-link和router-view
>2. 在相对应的一级导航路由配置选项children里面 配置 二级导航的路由和模板
> 
> ```js
>path: '/music',
> component: Music,
> //子路由配置 在children选项
> children: [{
>     path: 'lx',
>     component: Lx
> },...]
> ```
> 
> **`任务`** 
>
> 1. 实现一个嵌套路由   
>2. 第一级路由为 首页 、音乐、体育
> 3. 音乐下 二级路由为古典、 流行、爵士

## 过度动画

> - 基本用法就是给我们需要动画的标签外面嵌套**`transition`**标签 ,并且设置name属性
> - Vue 提供了 `transition` 的封装组件，列表中更新,移除，新增 情形中，可以给任何元素和组件添加进入/离开过渡
>
> > ```html
> > <transition name="fade"> 
> > 	<div v-show="isShow" class="box"></div>
> > </transition>
> > ```
>
> 6中class状态 ：
>
> 进入:
>
> 1. fade-enter：进入的 初始状态
> 2. fade-enter-to:  进入的 过渡结束状态（2.1.8版及以上）
> 3. fade-enter-active：进入的 过渡效果
>
> 离开:
>
> 1. fade-leave: 离开的 初始状态
> 2. fade-leave-to: 离开的 过渡结束状态（2.1.8版及以上）
> 3. fade-leave-active：离开的 过渡效果
>

## 基础-vue-cli 工具-介绍

> - 介绍: **`vue-cli`**是一个**`辅助开发工具`**=> **`代码编译`** + **`样式`** + 语法校验 + 输出设置 + 其他 ...
>- 作用: 可以为开发者提供一个**`标准的项目开发结构`** 和配置  **开发者**不需要再关注其他
> - vue-cli 一个**`命令行`**工具,最新版本也支持**`图形化`**操作,可快速搭建大型网页应用

## 基础-vue-cli-安装

> **`说明:`**vue-cli本质上是一个npm包,也需要通过npm去安装下载
>
> ```bash 
> npm i -g @vue/cli  // 全局安装脚手架  默认安装的最新版本 4.0+
> ```
>
> 安装完成后  可通过 **`vue命令`**来进行检查 脚手架是否安装成功
>
> 查看版本
>
> ```bash
> vue -V  // 查看脚手架版本号
> or 
> vue --version // 和上面等价 
> ```
>
> **`问题`:** 默认安装的4.0+ 版本,但是企业很多还在用2.0+版本 怎么破?
>
> 执行以下命令就可以 2.0 和 4.0 兼得 
>
> **`2.0和4.0创建项目的命令是不一样的`**
>
> ```bash
> npm install -g @vue/cli-init  // 安装桥接工具 将2.0的功能补齐到目前的脚手架上
> ```
>
> **`注意`:**  vue生成的模板的有难有易 
>
> - 简单业务 => 简易模板 
> - 复杂业务 => 内容丰富模板
>

## 基础-vue-cli-创建项目

> **`注意:`**文件目路径不能有中文
>
> `创建:` 采用 cli 2.0的特性 (生成简易模板)
>
> ```bash
> # 1.heroes 创建的项目名称
> $ vue init webpack-simple heroes //  webpack-simple 为模板名称 固定写法
> # 2.切换到当前目录
> $ cd  heroes 
> # 3.安装依赖
> $ npm install  
> # 4.启动运行项目
> $ npm run dev
> ```
>
> **`创建：`**采用 cli 4.0 特性 (两种 默认 /选填)
>
> ```bash 
> # 4.0下创建项目
> $ vue create heroes // create(创建) 为关键字
> # 切换到当前目录
> $ cd  heroes 
> # 在开发模式下 启动运行项目
> $ npm run serve
> ```
>
> **注意** 4.0 +创建项目时  有两种模式, 一种**`默认模式`**, 一种选择模式,
>
> 默认模式:一种标准的模板
>
> 选择模式: 可以根据自己的需求选择需要的工具和模式
>
> **配置:**
>
> 在vue.config.js中直接配置，例如
>
> ```javascript
> module.exports = {
>   lintOnSave: true,					// 在保存代码的时候开启eslint代码检查机制
>   devServer: {							// 实时保存、编译的配置段
>     open:true,							// 自动开启浏览器
>     port: 12306							// 服务运行端口
>   }
> }
> ```
>

## 基础-vue-cli-项目目录解释

```js
|-- node_modules								// 项目需要的依赖包
|-- public										 // 静态资源存储目录
|   |-- index.html							// 项目主容器文件
|   |-- favicon.ico							// 项目默认索引图片
|-- src
|   |-- assets									// 放置一些静态资源文件，例如图片、图标、字体 
|   |-- components							// 公共组件目录
|   |-- views									  // 业务组件目录
|   |-- App.vue									// 顶层根基路由组件
|   |-- main.js									// 主入口文件
|   |-- router.js								// 路由配置文件
|-- .editorconfig								// 代码规范配置文件
|-- .eslintrc.js								// eslint代码规范检查配置文件
|-- .gitignore									// git上传需要忽略的文件格式
|-- babel.config.js							// babel配置文件
|-- package-lock.json						// 依赖包版本锁定文件
|-- package.json								// 项目基本信息配置文件
|-- postcss.config.js						// css预处理器配置文件
|-- vue.config.js								// webpack 配置文件(与webpack.config.js作用一致)
```

## 基础-回顾-ES6 模块导入和导出

- require 和 Es模块化的区别

## 基础-vue-cli-简化模板代码

> **`介绍:`** 在cli开发模式下, 一个*.vue文件就是一个组件
>
> - template 组件的页面结构 代表它的 html 结构 
>  - 必须在里面放置一个 html 标签来包裹所有的代码 
>   - 我们在其他地方写好了一个组件，然后就可以在当前template中引入
> - script  组件的逻辑结构及数据对象
> 
> - style 组件的样式
>  - 就是针对我们的 template 里内容出现的 html 元素写一些样式 
> 
> **`注意`**: vue-cli的作用就是让我们把精力放在业务编码上,一切准备的工作交给vue-cli去做
>
> **`任务`** 
>
> 1. 新建一个名为 Menu的组件 
>2. 内容为 一个横向菜单   首页 新闻 体育 音乐
> 3. 菜单高60px  水平居中  字体大小为20px  颜色为 red  背景色 为 #CCCCCC
> 4. 实现组件在页面上展示

## 基础-案例-效果演示 

> 项目演示 =>  功能拆分 => 路由 => 增 修改 删除  更新  

## 基础-案例-导入素材

> **`目标`**:将项目所需样式导入到项目中 
>
> - 安装 bootstrap固定版本
>
>   ```js
>   npm i  bootstrap@3.3.7
>   ```
>
> - 安装完成之后 ,在入口处引入js文件
>
>   ```js
>   import "./../node_modules/bootstrap/dist/css/bootstrap.css"; // 引入 
>   import "./assets/index.css"; // 引入index.css
>   ```

## 基础-案例-提取公共组件-头部-侧边栏-列表

> 1. 新建vue文件
>2. 拷贝html静态内容到 template中
> 3. 在app.vue中引入组件
>4. 注册在app.vue的组件中 
> 5. 在app.vue的模板中使用注册组件 

## 基础-案例-路由功能

> **`步骤:`**
>
> 1. 安装路由 
>2. 在main.js中引入 路由模块
> 3. 在vue-cli中使用router 
> 4. 配置router-link
>    - router-link上的tag属性 可以指定渲染成什么html元素
> 5. 实例化router 完善路由表
>    - 路由表需要的组件从外部引入
> 6. 在App.vue中加入路由承载视图（router-view）
> 
> ```bash 
>1. npm i vue-router // 安装路由模块
> ```
> 
> ```js
>2. import VueRouter from 'vue-router' // 引用router
> ```
> 
> ```js 
>3. Vue.use(VueRouter) // 使用router
> ```
> 
> ```html
>4. <router-link tag="li" to="/heroes">
>         <a href="#">英雄列表</a>
>    </router-link>
>     ....
> ```
> 
> ```js
>5.
> import AppList from "./app-list.vue";
> import Foo from "./foo.vue";
> import Bar from "./bar.vue";
> const router = new VueRouter({
>   // 路由表
>  routes: [
>      { path: "/heroes", component: AppList },
>      { path: "/foo", component: Foo },
>      { path: "/bar", component: Bar }
>  ]
> }); 
> // router加入实例
> new Vue({
>   el: '#app',
>   render: h => h(App),
>   router
> })
> ```
> 
> ```html
>6.
> <div>
> <AppHeader></AppHeader>
> <div class="row">
> <AppSilder></AppSilder>
>  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
>      <!--加入承载视图-->
>      <router-view></router-view>
> </div>
> </div>
> </div>
> ```

## 基础- 案例-提取路由模块

> **`路径:`** 
>
> 1. 把路由业务抽取到router.js
>    
> - 注意要引入vue
>    
> 2. 在最后一行把router对象暴露出去
>
>    ```js
>    export default router
>    ```
>
> 3. 在main.js中引入router.js

