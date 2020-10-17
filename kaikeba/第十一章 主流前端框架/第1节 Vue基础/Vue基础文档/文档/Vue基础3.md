## 基础-实例选项-计算属性-文档分析

> - 场景:当表达式过于复杂的情况下 可以采用计算属性 对于任何复杂逻辑都可以采用计算属性
>
> **`参考:`**[https://cn.vuejs.org/v2/guide/computed.html#基础例子](https://cn.vuejs.org/v2/guide/computed.html#%E5%9F%BA%E7%A1%80%E4%BE%8B%E5%AD%90)

## 基础-实例选项-计算属性-基本使用

> **`使用: `**   在Vue实例选项中 定义 computed:{ 计算属性名: **`带返回值`**的函数 }
>
> **`示例:`**  通过计算属性实现字符串的翻转
>
> 1. 定义数据对象 	
>
> 2. 实现计算属性方法
>3. 使用计算属性
> 
> ```js	
>data: {
>  	message: 'hello'
> },
> computed: {
>     reverseMessage: function () {
>         // this指向 vm 实例
>         return this.message.split('').reverse().join('')
>     }
> }
> // computed里的函数直接用 不加() 但是必须得return
> <p>{{ message }}</p>
> <p>{{ reversedMessage }}</p>
> ```
> 
> **计算属性 和 methods方法的区别:** 
>
> 1. 计算属性不需要调用形式的写法  而methods方法必须采用 方法() 调用的形式
>2. 计算属性依赖data中的数据变化,如果data并没有发生变化,则计算属性则会取缓存的结果,
> 3. methods不论data变化与否 只要调用 都会重新计算
> 
> **`注意:`**当数据对象中 message发生变化时  计算属性也会重新计算计算=> 改变页面视图

## 表格案例-用计算属性实现商品搜索

> **`效果`**搜索框内容变化=> 列表内容变化
>
> 使用计算属性实现品牌搜索
>
> ​      1.定义品牌搜索的内容
>
> ​      2.定义计算属性 
>
> ​      3.实现计算属性的筛选功能（筛选列表）
>
> ​      4.计算属性替换原有的列表数据
>
> ```js
>computed: {
> // 实现计算属性
> // 用到了 数组的filter筛选功能  和 字符串的 startsWith 校验功能
> newList() {
>  return this.list.filter(item => {
>      return item.name.startsWith(this.searchValue);
>     });
>     }
>    }
>    ```
> 

## 在Vue中实现发送网络请求

> **`原理`**:  Vue.js中发送网络请求本质还是ajax，我们可以使用插件方便操作。
>
> 1. vue-resource: Vue.js的插件，已经不维护，不推荐使用
>2. [axios](https://www.kancloud.cn/yunye/axios/234845) :**`不是vue的插件`**，可以在任何地方使用，推荐
> 
> **`说明`**: 既可以在`浏览器端`又可以在**`node.js`**中使用的发送http请求的库，**支持Promise** ，**不支持jsonp**
>
>  如果遇到jsonp请求, 可以使用插件 `jsonp` 实现

## 基础-axios-介绍-及基本使用

> **`用法:`**
>
> ```js
>// 基本用法
> axios.get(url).then((res) => {
> // 请求成功 会来到这  res响应体
> }).catch((err) => {
> // 请求失败 会来到这  处理err对象
> })
> ```
> 
> ```js
>// 获取
> axios.get('http://localhost:3000/brands').then().catch()
> // 删除
> axios.delete('http://localhost:3000/brands/1').then().catch()
> // 添加
> axios.post('http://localhost:3000/brands', {name: '小米', date: new Date()}).then().catch()
> // 修改
> axios.put('http://localhost:3000/brands/1', {name: '小米', date: new Date()}).then().catch()
> // get模糊搜索
> axios.get("http://localhost:3000/brands?name_like=" + "aaa").then().catch()
> ```
> 

## 基础-表格案例-axios-列表

> **`目标:`**   将表格案例中列表数据实现用axios请求
>
> **`路径:`**   使用axios请求列表
>
> 1. 引入axios
> 2. 在mounted（相当于window.onload）函数中 发送请求获取数据
> 3. 获取的数据赋值给list列表
>
> ```js
> //  mounted函数 加载完DOM再执行的函数 相当于window.onload
> mounted() {
>     axios.get("http://localhost:3000/brands").then(result => {
>         this.list = result.data;
>     });
> }
> ```
>
> **`注意`**:mounted函数相当于window.onload,后面会详细的讲到

## 基础-表格案例-axios-删除商品

> **`路径:`** 使用axios删除商品
>
> ​       1.删除方法中传入ID 
>
> ​       2.删除方法中调用删除接口
>
> ​       3.删除完成后重新调用获取数据
>
> **`代码:`**
>
> ```js
>delItem(id) {
>    if (confirm("确定删除此条记录")) {
>      axios
>           .delete("http://localhost:3000/brands/" + id)
>           .then(result => {
>             this.getList(); // 重新调用拉取数据
>           });
>       }
>    }
>    ```

## 基础-表格案例-axios-添加商品

> **`路径:`** 使用axios添加商品
>
> ​      1. 添加方法中调用新增接口
>
> ​      2. 添加成功后重新拉取数据
>
> ​      3. 清空输入框
>
> ```js
>addItem() {
> // 添加商品
> axios.post("http://localhost:3000/brands", {
>      name: this.name,
>     date: new Date()
>     })
>     .then(res => {
>       if (res.status == 201) {
>         this.getList(); // 重新拉取数据
>         this.name = ""; // 清空文本框
>     }
>    });
>    ```

## 基础-表格案例-axios-搜索功能-分析

> **`目标:`** 通过分析得出 计算属性中不能进行搜索功能的结论
>
> ​	计算属性=> 异步操作搜索=>返回结果 XXXXX 走不通
>
> **`结论:`** 搜索功能不能采用 **`计算属性`** 进行解决
>
> **`注意：`** 计算属性中一定是**`同步操作`**,如果有**`异步`**操作,则该业务逻辑就会失败
>
> **`新知识:`** 当需要根据数据变化 进行相应业务操作,且该操作是**`异步操作`**时,计算属性不能再使用,可以使用侦听属性watch

## 基础-实例选项-watch-基本使用

> **`特性:`**  监听data数据变化时 自动触发函数
>
> 计算属性和watch区别：
>
> - 计算属性 必须要有返回值 所以说不能写异步请求 因为有人用它的返回值(插值表达式)
>- watch选项中可以写很多逻辑 不需要返回值  因为没有人用它的返回值
> 
> ```js
>// 基本用法
> data: {
> 	msg: 'abc'
> },
> watch: {
> // data中的属性msg发生改变时 自动触发该函数
>    msg(newV, oldV) {
>      console.log(newV, oldV)
>    }
> }
> ```

## 基础-表格案例-axios-搜索功能-实现

> 1. 监听搜索内容
>2. 在监听函数中 发送axios请求实现模糊搜索
> 3. 把返回值赋值给list列表
> 
> ```js
>// 实例代码
> watch: {
>     searchval(newV, oldV) {
>         axios.get("http://localhost:3000/brands?name_like=" + newV)
>           .then((res) => {
>             this.list = res.data
>         }).catch(err => {
>             console.log(err)
>         })
>     }
> }
> ```

## 基础-组件-组件体验

> **`场景:`** 重复的页面结构,数据,逻辑 都可以抽提成一个组件  
>
> **`特点`**   简单 高效 不重复

## 基础-组件-组件特点

> 组件和实例相似之处:   data/methods/computed/watch  等一应俱全 
>
> **注意：**
>
> - data和Vue实例的区别为
>  - 组件中data为一个函数且需要返回一个对象
>   - 组件没有el选项 
>   - template 代表其**`页面结构`** (有且只要一个根元素)
> 
> 每个组件都是**`独立`**的 运行作用域、数据、逻辑没有任何关联

## 基础-组件-全局组件

> 全局和局部: 注册方式不同 应用范围不同
>
> **`注意:`** 注意命名规范
>
> **`路径:`** 实现一个全局组件
>
> 1. 定义一个全局组件
>
> 2. 写入组件选项
>3. 使用组件

```js
 // 注册组件名称 推荐 小写字母 加横向的结构
      Vue.component("content-a", {
        template: `<div>
        {{count}} 
        </div>`,
        data() {
          return {
            count: 1
          };
        }
      });
		<content-a></content-a>
// 注意  data中必须为一个返回对象的函数
// template必须有且只有一个根元素
```

> **`任务`** 实现一个全局组件 完成 加减步进器

