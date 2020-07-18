window.addEventListener('load', function(){
    //1.获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    //focus盒子的宽度
    var focusWidth = focus.offsetWidth;
    //2.利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function(){
        index++;
        //每次移动的距离=索引号*宽度
        var translatex = -index * focusWidth;
        ul.style.transition = 'all 0.3s';
        ul.style.transform = 'translateX('+ translatex +'px)'
    }, 2000);
    //等过度完成之后，再去判断，监听过度完成的事件 transitionend
    ul.addEventListener('transitionend', function(){ 
        //无缝滚动,索引号为5，说明走到最后一张图片，要跳到第一张图片
        if (index >= 5) {
            index = 0;
            //去掉过渡效果这样让我们的Ul 快速的跳到目标位置
            ul.style.transition = 'none';
            //利用最新的索引号乘以宽度 去掉滚动图片
            var translatex = index * focusWidth;
            ul.style.transform = 'translateX('+ translatex +'px)';
        } else if ( index < 0){
            index = 4;
            ul.style.transition ='none';
            //利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * focusWidth;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        };
        //把ol里面li
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current');
        
    })

    //4.手指滑动轮播图

    var startX = 0; //手指的x坐标
    var moveX =0; //后面要使用这个值，所以定义全局变量
    var flag = false;
    //获取手指初始坐标    
    ul.addEventListener('touchstart', function(e){
        startX = e.targetTouches[0].pageX;
        //手指触摸,停止定时器
        clearInterval(timer);
    })
    //盒子移动的距离
    ul.addEventListener('touchmove', function(e){
        //计算移动距离 有正负
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * focusWidth + moveX;
        //手指拖动不需要动画效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;  
        e.preventDefault();//阻止滚动屏幕的行为
     
    });
    
    //手指离开的时候，判断
    ul.addEventListener('touchend', function(e){
            if (flag){
                if (Math.abs(moveX) > 50) {
                    //向右边滑动， 数值大于0；
                    if (moveX > 0){
                        index--;
                } else {
                    //向左滑动，数值小于0，播放下一张图片；
                        index++;
                    }
                var translatex = -index * focusWidth;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX('+ translatex +'px)';      
                } else {
                    //距离小于50px，回到原来位置
                    var translatex = -index * focusWidth;
                    ul.style.transition = 'all .1s';
                    ul.style.transform = 'translateX('+ translatex +'px)';      
                }
            }

            //手指离开的时候就重新开启定时器
            clearInterval(timer);
            timer = setInterval(function(){
                index++;
                var translatex = -index * focusWidth;
                ul.style.transition = 'all 0.3s';
                ul.style.transform = 'translateX('+ translatex +'px)'
            }, 2000);
    })
})
