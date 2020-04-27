# 滚动监听

演示：  [https://kkb.huat.xyz/Animation/%E6%BB%9A%E5%8A%A8%E7%9B%91%E5%90%AC/](https://kkb.huat.xyz/Animation/滚动监听/) 

源码：



## 实现方法

#### 先分析结构，做好布局

```html
<div class="container" id="box">
        <div class="current">爱逛好货</div>
        <div>好店主播</div>
        <div>品质特色</div>
        <div>猜你喜欢</div>
    </div>
    <ul class="aside" id="aside">
        <li class="current">
            <a href="javascript:void(0)">爱逛好货</a>
        </li>
        <li>
            <a href="javascript:void(0)">好店主播</a>
        </li>
        <li>
            <a href="javascript:void(0)">品质特色</a>
        </li>
        <li>
            <a href="javascript:void(0)">猜你喜欢</a>
        </li>
    </ul>
```

> javascript:void(0)  与 #  有什么区别



#### 获取事件源

```js
var box = document.getElementById('box');
var allBoxs = box.children;
var aside = document.getElementById('aside');
var lis = aside.children;
var isClick = false; //默认没有被点击
```



#### 上色

先将颜色放在一个数组中，通过遍历来进行上色

```js
 var colors = ['red', 'pink', 'purple', 'blue'];
for (let i = 0; i < allBoxs.length; i++) {
    allBoxs[i].style.backgroundColor  =   colors[i];

}
```

#### 监听侧边栏按钮点击

1、点击某一个按钮的时候，其样式改变 ，为选中样式，其他按钮则恢复常态

```js
for (let j = 0; j < lis.length; j++) {
    lis[j].onclick = function () { 
        // 在点击之前先清除一下
        for (let k = 0; k < lis.length; k++) {
           lis[k].className = ''
        }
        // 当被点击的时候添加 current类
        this.className = 'current';
}
```

2、点击按钮跳转至对应的div部分

- 点击所有的按钮跳转到最后一个div

  ```html
  document.documentElement.scrollTop = 3 * document.body.clientHeight
  // console.log(document.body.clientHeight)  这值是多少？表示什么？为一个页面的高度 即 <div>好店主播</div>的高度
  ```

- 点击按钮跳转到相应的div

  > 核心是改变  document.documentElement.scrollTop 的高度

  ```
  document.documentElement.scrollTop = j * document.body.clientHeight
  ```

  > 如果只是使用 j , 则在 for循环中则应用 let 声明 ；如果是用 var 声明 则需要 ` lis[j].index = j;`
  >
  > ```
  > lis[j].index = j;
  > document.documentElement.scrollTop = this.index * document.body.clientHeight
  > ```

- 加入动画 

  ```js
  startAnimation(document.documentElement, {
      "scrollTop": j * (document.body.clientHeight)
  })
  ```

  

#### 监听页面滚动

- 页面监听事件是什么？

  ```js
    window.onscroll = function () {   }
  ```

- 当用户点击的时候也在发生滚动 ，如何分辨？ 

  > 通过添加一个 标记，来判断用户是否有点击行为

  ```
  var isClick = false; //默认没有被点击
  ```

- 当页面滚动的时候i切换右边对应的内容： 滚动多少的时候进行切换？怎么去切换？

  ```js
  // 获取页面滚动的高度
  var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
  //当docScrollTop > allBoxs[i].offsetTop 时候进行切换
  for (var i = 0; i < lis.length; i++) {
      if (docScrollTop > allBoxs[i].offsetTop) {
          lis[i].className = 'current';
      }
  }
  ```

- 在切换的时候应该注意什么,注意先清理一下

  ```js
  for (var j = 0; j < allBoxs.length; j++) {
      lis[j].className = '';
  }
  ```

  