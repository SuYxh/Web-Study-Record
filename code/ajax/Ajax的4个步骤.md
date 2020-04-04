# Ajax的4个步骤

### 一、AJAX如何工作？

![](http://qn.huat.xyz/content/20200403093116.png)

1. 用户从UI发送请求，JavaScript中调用XMLHttpRequest对象。
2. HTTP请求由XMLHttpRequest对象发送到服务器。
3. 服务器使用JSP，PHP，Servlet，ASP.net等与数据库交互。
4. 检索数据。
5. 服务器将XML数据或JSON数据发送到XMLHttpRequest回调函数。
6. HTML和CSS数据显示在浏览器上。



### 二、XHR 创建对象

XMLHttpRequest 术语缩写为XHR，中文可以解释为可扩展超文本传输请求。

XMLHttpRequest 对象可以在不向服务器提交整个页面的情况下，实现局部更新网页。

XMLHttpRequest的对象用于客户端和服务器之间的异步通信。

　它执行以下操作：

1. 在后台从客户端发送数据
2. 从服务器接收数据
3. 更新网页而不重新加载。

```javascript
var xml;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xml = new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xml = new ActiveXObject("Microsoft.XMLHTTP");
  }
```

> 注意做兼容处理，主要兼容IE6以下的浏览器

### 三、准备发送

` open(method,url,async) ` : 规定请求的类型、URL 以及是否异步处理请求。 

- *method*：请求的类型；GET 或 POST
- *url*：文件在服务器上的位置，该文件可以是任何类型的文件，比如`.txt`和`.xml`，或者服务器脚本文件，比如`.asp`和`.php`（在传回响应之前，能够在服务器上执行任务）。
- *async*：true（异步）或 false（同步）

> 　通过 AJAX，JavaScript 无需等待服务器的响应，而是：
>
> - 在等待服务器响应时执行其他脚本
> - 当响应就绪后对响应进行处理
>
> 当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数；
>
> 当使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到send()语句后面即可; JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。 　

```javascript
xmlhttp.send();
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```




```javascript
xhr.open("GET","register.php?username="+username,true);
```



###  四、执行发送

` send(string) `:将请求发送到服务器。

- *string*：仅用于 POST 请求

```javascript
xhr.send(null);
```

#### 1、GET请求

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET","register.php?username="+username,true);
xhr.send(null);
xhr.onreadystatechange = function(){
   if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
       // 业务代码
    }
} 
```

　**注意：**`GET`请求具有以下的几个特点：

- `GET`请求可被缓存
- `GET`请求保留在浏览器历史记录中
- `GET`请求可被收藏为书签
- `GET`请求不应在处理敏感数据时使用
- `GET`请求有长度限制
- `GET`请求只应当用于取回数据

#### 2.POST请求

```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST","register.php",true);
var param = "username="+username;
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send(param);
xhr.onreadystatechange = function(){
   if (xml.readyState==4 && xml.status==200)
    {
       // 业务代码
    }
} 
```

　**注意：**`POST`请求的特点如下：

- `POST`请求不会被缓存
- `POST`请求不会保留在浏览器历史记录中
- `POST`请求不能被收藏为书签
- `POST`请求对数据长度没有要求

### 五、设置回调函数

当发送一个请求后，客户端需要确定这个请求什么时候会完成，因此，XMLHttpRequest对象提供了`onreadystatechange`事件机制来捕获请求的状态，继而实现响应。当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当`readyState`改变时，就会触发`onreadystatechange`事件。`　readyState`属性存有 XMLHttpRequest 的状态信息。

| 属性                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| `onreadystatechange` | 存储函数（或函数名），每当`readyState`属性改变时，就会调用该函数。 |
| `readyState`         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 请求处理中4: 请求已完成，且响应已就绪 |
| `status`             | 200: "OK" 404: 未找到页面  【服务器返回的状态】              |

#### readyState状态说明

　**0：请求未初始化**

　此阶段确认XMLHttpRequest对象是否创建，并为调用`open()`方法进行未初始化作好准备，值为0表示对象已经存在，否则浏览器会报错：对象不存在。

　**1：服务器连接已建立**

　此阶段对XMLHttpRequest对象进行初始化，即调用`open()`方法，根据参数`（*method*,*url*,*true*）`完成对象状态的设置。并调用`send()`方法开始向服务端发送请求。

　值为1表示正在向服务端发送请求。

　**2：请求已接收**

　此阶段接收服务器端的响应数据。但获得的还只是服务端响应的原始数据，并不能直接在客户端使用。

　值为2表示已经接收完全部响应数据，并为下一阶段对数据解析作好准备。

　**3：请求处理中**

　此阶段解析接收到的服务器端响应数据即根据服务器端响应头部返回的MIME类型把数据转换成能通过`responseBody`，`responseText`或`responseXML`的属性存取的格式，为在客户端调用作好准备。

　状态3表示正在解析数据。

　**4：请求已完成，且响应已就绪**

　此阶段确认全部数据都已经解析为客户端可用的格式，解析已经完成。值为4表示数据解析完毕，可以通过的`XMLHttpRequest`对象的属性取得数据。

总的来说，整个XMLHttpRequest对象的生命周期应该包含如下阶段：

1. 创建
2. 初始化请求
3. 发送请求
4. 接收数据
5. 解析数据
6. 完成

　在`onreadystatechange`事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。

　当`readyState`等于 4 且状态为 200 时，表示响应已就绪。

### 六、同步和异步

- **同步**

```javascript
// 1.创建连接
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2.准备发送
xhr.open("GET","register2.php?username="+usernameValue,false);
console.log("--01---readystate----"+xhr.readyState);
// 3.发送
xhr.send(null);
console.log("--02---readystate----"+xhr.readyState);
//.处理
var result = xhr.responseText;
document.getElementById("uname").innerHTML = result;

```

> console.log("--02---readystate----"+xhr.readyState);  这句话执行完毕后， readystate 的值 为4 ，而 4代表：　**4：请求已完成，且响应已就绪**  ，所以不需要再写回调函数，直接写逻辑代码就可以



- **异步**

![](http://qn.huat.xyz/content/20200403175606.png)



**js的单线程和事件队列：** 但是 浏览器并不是单线程的！

![](http://qn.huat.xyz/content/20200403174246.png)