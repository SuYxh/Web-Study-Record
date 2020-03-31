#  CSS 选择器

### 1.HTML 标签选择器如何使用？请给出样例代码 

```html
p{font-size: 20px;}

<p>沾衣欲湿杏花雨，吹面不寒杨柳风</p>
```



### 2.Class 类选择器如何定义和使用？请给出样例代码 

`.类名{    样式    }` 

```css
.mc{color:blue;} /* 凡是class属性值为mc的都采⽤此样式 */
p.ps{color:green;} /*只有p标签中class属性值为ps的才采⽤此样式*/
```

```html
.mei{color: aqua;}

<p class="mei">梅花不肯傍春光，自向深冬著艳阳</p>
```



### 3.ID 选择器如何定义和使用？请给出样例代码 

```css
定义： #id名{样式.....}
使⽤：<html标签 id="id名">...</html标签>
注意：id选择符只在⽹⻚中使⽤⼀次.
```

```html
#feng{color: chartreuse;}

<p id="feng"> 风吹梅蕊闹，雨细杏花香</p>
```



### 4.请给出一段关联选择器样例代码  

```html
.two p{font-size: medium;font-weight: bold;background-color: darkgray;}

<div class="two">
		<span> 一寸横波惹春留，何止最宜秋</span><br>
		<p>黄师塔前江水东，春光懒困倚微风</p>
		<p class="mei">豆蔻梢头春色浅，新试纱衣，拂袖东风软</p>
		<p id="feng">  樱桃花，一枝两枝千万朵</p>
</div>
```



### 5.请给出一段组合选择器样例代码 

```html
h4,h5{color: blueviolet;}

<h4>心有猛虎</h4>
<h5>细嗅蔷薇</h5>
```



### 6.CSS 中都有哪些关系选择器？请给出样例代码 

```html
.three>p{  background-color: #00FFFF; }
.three+p{  background-color: blue;    }
.three~p{  color: aqua;               }

<div class="three">
	<p>桃花春水渌，水上鸳鸯浴</p>
	<p> 霜鬓知他从此去，几度春风</p>
	<p> 缃裙罗袜桃花岸，薄衫轻扇杏花楼</p>
	<p>小楼一夜听春雨，深巷明朝卖杏花</p>
</div>
<p>杏花开了燕飞忙，正是好春光</p>
<p>落絮无声春堕泪，行云有影月含羞</p>			
```



### 7.CSS 中都有哪些属性选择器？请给出样例代码 

```html
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>属性选择器</title>
		<style type="text/css">
			[title] {
				color: red;
			}

			[title=blog] {
				border: 5px solid blue;
			}

			[title~=hello] {
				color: aqua;
			}

			[lang|=en] {
				color: red;
			}

			div[class^="test"] {
				background: #ffff00;
			}
			div[class$="txt"]
			{
			background: #FF0000;
			}
			div[class*="tt"]
			{
			background: #0000FF;
			}
		</style>
	</head>
	<body>
		<h1>可以应用样式：</h1>
		<h2 title="Hello world">Hello world</h2>
		<a title="blog" href="https://vp.huat.xyz">vuepress</a>
		<hr>
		<h2 title="hello world">Hello world</h2>
		<p title="student hello">Hello W3School students!</h1>
			<hr>
			<p lang="en">Hello!</p>
			<p lang="en-us">Hi!</p>
			<hr>
			<div class="first_test">第一个 div 元素。</div>
			<div class="test">第三个 div 元素。</div>
			<p class="test">这是段落中的文本。</p>
			<hr >
			<div class="first_txt">第一个 div 元素。</div>
			<div class="txt">第三个 div 元素。</div>
			<p class="txt">这是段落中的文本。</p>
			<hr >
			<div class="first_tt">第一个 div 元素。</div>
			<div class="second">第二个 div 元素。</div>
			<div class="tt">第三个 div 元素。</div>
			<p class="tt">这是段落中的文本。</p>
	</body>
</html>

```



### 8.请列出至少 6 个结构性伪类选择器，并对其说明功能 

 :before设置在对象前（依据对象树的逻辑结构）发⽣的内容。 

:after设置在对象后（依据对象树的逻辑结构）发⽣的内容。 

 ::first-letter设置对象内的第⼀个字符的样式。 

::first-line设置对象内的第⼀⾏的样式。

 :first-of-type匹配同类型中的第⼀个同级兄弟元素 

:last-of-type匹配同类型中的最后⼀个同级兄弟元素 

:only-of-type匹配同类型中的唯⼀的⼀个同级兄弟元素 

:only-child匹配⽗元素仅有的⼀个⼦元素  

### 9.请列出至少 6 个状态性伪类选择器，并对其说明功能 

 :link 设置超链接a在未被访问前的样式。 

:visited 设置超链接a在其链接地址已被访问过时的样式

 :active 设置元素在被⽤户激活（在⿏标点击与释放之间发⽣的事件）时的样式 

*:hover 设置元素在其⿏标悬停时的样式 

*:focus 设置元素在其获取焦点时的样式 

 ::selection 设置对象被选择时的样式 

 :disabled 匹配⽤户界⾯上处于禁⽤状态的元素

 :checked 匹配⽤户界⾯上处于选中状态的元素 