# HTML基础训练



### 1.HTML是什么？

- `HTML `是`HyperText Mark-up Language`  的⾸字母简写，意思是 `超⽂本标记语言 `

- `HTML`不是一种编程语言，而是一种标记语言

- 超⽂本指的是超链接，标记指的是标签，是⼀种⽤来制作网页的语言，这种语言由一个个的标签组成
- ⽤这种语言制作的文件保存的是⼀个⽂本⽂件，⽂件的扩展名为 `.html` 或者` .htm`
- `html`⽂档也叫 `Web⻚⾯` ，其实就是一个⽹页，`html`⽂件用编辑器打开显示的是⽂本 ,可以用⽂本的⽅方式编辑它
- 如果用`浏览器打开` ，浏览器会按照标签描述内容将⽂件渲染成网页 ，显示的网页可以从一个网页链接跳转到另外一个⽹⻚

### 2.HTML基本结构？请给出样例代码

```html
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title></title>
</head>
<body>
	
</body>
</html>
```



### 3.HTML注释？

```html
<!-- 这就是唯一的一种HTML注释了 -->
```



### 4.HTML中`<head></head>`头部标签中都含有哪些标签？

| 标签       | 描述                               | 示例                                                         |
| ---------- | ---------------------------------- | ------------------------------------------------------------ |
| `<title>`  | 定义了文档标题                     | ⽹页标题: `<title>标题</title>`                              |
| `<base>`   | 定义了页面链接标签的默认 链接地址  | `<base href="http://www.****.com/" target="_blank">`         |
| `<link>`   | 定义了一个文档和外部资源之间的关系 | 导⼊CSS文件 `<link type="text/css" rel="stylesheet" href="**.css"/>` |
| `<meta>`   | 定义了HTML文档中的元数 据          | 设置⽹网⻚页编码、关键字、描述,`<meta charset="utf-8"/>`、`<meta name="Keywords" content="关键字" />`、`<meta name="Description" content="简介、 描述" />` |
| `<script>` | 定义了客户端的脚本⽂件             | `<script>JavaScript脚本程序</script>`                        |
| `<style>`  | 定义了HTML⽂档的样式文件           | `<style type="text/css">css样式代码</style>`                 |



### 5.HTML中的常用文本标签都有哪些？请给出说明和样例代码

- `<sub></sub> `下标  `<sup></sup> `上标

- `<cite>《猫和老鼠》</cite>`作品的标题 （引用）

- `<del>del: 删除线</del>`：删除线

- `<strong>strong: 强调加粗标签</strong>`: 强调加粗

- `<b>b: 加粗标签</b>`：加粗

- `<em>em: 强调斜体标签</em>`：强调斜体

- `<i>i: 斜体标签</i>`：斜体

- `<hn>...</hn> `：其中n为1--6的值。 标题标签(加粗、独立⾏)

  ```html
  <!DOCTYPE html>
  <html lang="zh">
  	<head>
  		<meta charset="UTF-8">
  		<meta name="viewport" content="width=device-width, initial-scale=1.0">
  		<meta http-equiv="X-UA-Compatible" content="ie=edge">
  		<title>HTML常用标签</title>
  	</head>
  	<body>
  		<h3>HTML标签实例--⽂本标签</h3>
  		<cite>《猫和老鼠》</cite>
  		<h1>h1标题</h1>
  		<h2>h2标题</h2>
  		<h3>h3标题</h3>
  		<h4>h4标题</h4>
  		<h5>h5标题</h5>
  		<h6>h6标题</h6>
  		<i>i: 斜体标签</i> <br />
  		<em>em: 强调斜体标签</em> <br />
  		<b>b: 加粗标签</b><br /><br />
  		<strong>strong: 强调加粗标签</strong><br />
  		<del>del: 删除线</del><br />
  		<u>u: 下划线</u> <br /><br />
  
  
  		⽔分子:H<sub>2</sub>O <br />
  		4<sup>2</sup>=16	
  	</body>
  </html>
  
  ```

  > **实体编号**--实体名称对⼤⼩写敏感!
  >
  > | 显示结果   | 实体名称  |
  > | ---------- | --------- |
  > | 空格          | `&nbsp;`    |
  > | <          | `&lt;`    |
  > | >          | `&gt;`    |
  > | &          | `&amp`    |
  > | ©️  版权    | `&copy;`  |
  > | ®️ 注册商标 | `&reg;`   |
  > | ™️ 商标     | `&trade;` |
  >
  > 

### 6.HTML中的常用格式化标签都有哪些？请给出说明和样例代码


- `<br/>` 换⾏ 
- `<p>...</p>` 换段 
- `<hr />` ⽔平分割线
- 列表:
  - `<ul>...</ul>` ⽆序列表
  - `<ol>...</ol>` 有序列表 其中type类型值:A a I i 1 start属性表示起始值        
  - `<li>...</li>` 列表项
    - `<dl>...</dl>` 自定义列表
    -  `<dt>...</dt>` 自定义列表头 
    -  `<dd>...</dd>` 自定义列表内容
- `<div>...</div>` 常用于组合块级元素，以便通过 CSS 来对这些元素进行格式化 
- `<span>...</span>` 常用于包含的文本，您可以用 CSS 对它定义样式，或者使用JavaScript对它进行操作。



```html
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>HTML标签实例--格式化标签</title>
</head>
<body>
	<p>相逢的人会在相逢！</p>
	<hr>
	<dl>
		<dt>问：html?</dt>
		<dd>答：超文本标记语言</dd>
		<dt>问：html?</dt>
		<dd>答：超文本标记语言</dd>
		<dt>问：html?</dt>
		<dd>答：超文本标记语言</dd>
	</dl>
	<hr >
	<ul>
		<li>ios</li>
		<li>Android</li>
	</ul>
	<ol type="1">
		<li>type="1"</li>
		<li>烤鸡</li>
		<li>鹅翅</li>
		<li>大虾</li>
	</ol>
	<ol type="A">
		<li>type="A"</li>
		<li>烤鸡</li>
		<li>鹅翅</li>
		<li>大虾</li>
	</ol>
	<ol type=" I">
		<li>type="I"</li>
		<li>烤鸡</li>
		<li>鹅翅</li>
		<li>大虾</li>
	</ol>
	<ol type=" a">
		<li>type="a"</li>
		<li>烤鸡</li>
		<li>鹅翅</li>
		<li>大虾</li>
	</ol>
	<ol type=" i">
		<li>type="i"</li>
		<li>烤鸡</li>
		<li>鹅翅</li>
		<li>大虾</li>
	</ol>
	
</body>
</html>
```

#### 运行截图

![4mq5nF](https://gitee.com/ironc/oss/raw/master/content/4mq5nF.png)