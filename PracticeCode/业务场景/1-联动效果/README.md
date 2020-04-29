# 联动效果

演示： [https://kkb.huat.xyz/Animation/%E8%81%94%E5%8A%A8%E6%95%88%E6%9E%9C/](https://kkb.huat.xyz/Animation/联动效果/) 

源码： [https://github.com/SuYxh/Web-Study-Record/tree/master/%E6%A1%88%E4%BE%8B/1-%E8%81%94%E5%8A%A8%E6%95%88%E6%9E%9C](https://github.com/SuYxh/Web-Study-Record/tree/master/案例/1-联动效果) 



## 实现方法

>  当鼠标点击 “ X ” 以后，图片 先向 下移动，在向左移动隐藏.

```js
var ad = document.getElementById('ad');
var close = document.getElementById('close');
close.onclick = function (){
    startAnimation(ad,{"height": 260},function(){
        startAnimation(ad,{"width": 0},function(){
            ad.style.display = 'none';
        })
    })
}
```

