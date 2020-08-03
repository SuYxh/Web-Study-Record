## RESTful接口API

- 传统请求地址回顾

  ```js
  GET http://www.example.com/getUsers         // 获取用户列表
  GET http://www.example.com/getUser?id=1     // 比如获取某一个用户的信息
  POST http://www.example.com/modifyUser      // 修改用户信息
  GET http://www.example.com/deleteUser?id=1  // 删除用户信息
  ```

- 概述

  > 一套关于设计请求的规范。

  ```js
  GET：     获取数据
  POST：    添加数据
  PUT：     更新数据
  DELETE：  删除数据
  ```

- RESTful API 的实现

  ```js
  GET 	http://www.example.com/users	  获取用户列表数据
  GET   http://www.example.com/users/1	获取用户ID为1的用户信息
  POST  http://www.example.com/users	  创建(添加)用户数据
  PUT   http://www.example.com/users/1	修改用户ID为1的用户信息
  DELETE http://www.example.com/users/1	删除用户ID为1的用户信息
  ```

## json-server

> json-server主要的作用就是搭建本地的数据接口，创建json文件，便于调试调用

安装:

```js
npm i json-server -g
```

使用:

```JS
json-server db.json
```

### Postman

接口测试工具

下载地址https://www.postman.com/downloads/

