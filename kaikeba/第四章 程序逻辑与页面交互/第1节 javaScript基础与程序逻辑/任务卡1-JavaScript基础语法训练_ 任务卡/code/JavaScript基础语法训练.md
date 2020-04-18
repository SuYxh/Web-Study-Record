# JavaScript基础语法训练

### 1.JavaScript 语言中包含哪三个核心?

 JavaScript语⾔中包含三个核⼼：ECMAScript基本语法、DOM、BOM 

![](http://qn.huat.xyz/content/20200418075806.png)

### 2.在HTML中嵌入JavaScript语言的方式都有哪些?请给出样例代码

- 内部JavaScript: 使⽤

  ```js
  	<script type="text/javascript">
  		alert('我是JS脚本！')
  	</script>
  ```

- 外部 JavaScript导入

  ```js
  <script src="./vue.js" type="text/javascript" charset="utf-8"></script>
  ```

- 内联JavaScript

  ```js
  <button type="button" onclick="javascript:alert('我是点击事件!')">弹窗</button>
  ```

- `require`导入

  ```js
  const themeConfig = require('./config/theme/')
  ```

### 3.请描述- -下JavaScript脚本语言中的变量命名规则?

-  由字⺟、数字、下划线、$符号组成，不能以数字开头 
- 不能是关键字和保留字，例如：for、 if、while。
-  区分⼤⼩写 规范 - 建议遵守的 

### 4.JavaScript 语言中有哪几种注释?

- 单⾏注释  //
- 多⾏注释   /* JavaScript脚本 */ 

### 5.请描述一 下JavaScript的数据类型都有哪些?请给出定义样例代码

- **值类型(基本类型)：**字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

- **引用数据类型：** 对象(Object)、数组(Array)、函数(Function)。

 Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。 [javascript]( https://vp.ironc.cn/views/vjs/js_datatype.html )

### 6.请使用样例描述一 下值类型和引用类型的区别? 

```js
// 值类型：Number、string、bollean、undefined
var a = 100
var b = a
a = 200
console.log(b) // 100 保存与复制的是值本身


// 引用类型：对象、数组、函数、null
var a = {age:20}
var b = a
b.age = 21 
console.log(a.age) // 21 
```



### 7.请列出在JavaScript语言中都有哪些类型数据转成布尔值时为false?

```js
var m = Boolean(1);
var a = Boolean(null);
var b = Boolean(undefined);
var c = Boolean(NaN);
var d = Boolean('NaN');
var e = Boolean('');
console.log(m,a,b,c,d,e);  // true false false false true false
```

