# 侧边栏横幅效果

演示： [https://kkb.huat.xyz/Animation/%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%A8%AA%E5%B9%85%E6%95%88%E6%9E%9C/](https://kkb.huat.xyz/Animation/侧边栏横幅效果/) 

源码：



## 实现方法

#### 分析

![](http://qn.huat.xyz/content/20200427123557.png)



当前的黑色盒子就是侧边栏的横幅，则  横幅的Top = 页面滚动的高度 +  横幅的偏移量  ，即

Top = document.documentElement.scrollTop +  aside.offsetTop   【注意兼容性】

#### 页面滚动高度的计算

var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

> 注意兼容性！

#### 横幅的偏移量

横幅的偏移量 =  aside.offsetTop

## 核心代码

```js
    window.onload = function() {
        // 1.获取标签
        var aside = document.getElementById('aside');
        // 2.获取广告的偏移量
        var aside_top = aside.offsetTop;
        window.onscroll = function() {
            // 3.获取页面滚动的高度
            var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            startAnimation(aside, { "top": docScrollTop + aside_top });
        }
    }
```

