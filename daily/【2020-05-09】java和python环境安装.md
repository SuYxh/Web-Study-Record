## 2020-05-09 学习日报

#### 1、今日学习目标

sql 注入-post、java和python环境安装

#### 2、目标完成情况

sql 注入-post、完成java环境的安装、破解Burp Suite、python3环境安装

#### 3、收获和感悟

今天正在学习sql注入--POST注入，使用到了Burp Suite这款工具，由于电脑没有Java环境，安装了一个Java环境，后面也会使用到sqlmap ，因为sqlmap 是基于python的，所有又安装了一下python3；由于原来安装 和使用过所以基本上没有浪费太多的时间在安装、破解的过程中。但是Burp Suite这款工具有半年没有碰过了，而且还是全英文，捡起来有点困难，得学习一下了，同时这款工具也可以帮我们分析HTTP协议和抓包，所以学习一下对于以后的前端开发也会有一定的帮助；关键的问题就是GitHub上找的基于python的 SQL scanner ，这款工具不会使用，问题出在  `pip install -r requirements.txt` 会出错误

![](http://qn.huat.xyz/content/20200510002045.png)



![](http://qn.huat.xyz/content/20200510002026.png)



再次运行相同的命令  报错

![](http://qn.huat.xyz/content/20200510002235.png)



由于对python了解很少，所以困难比较大