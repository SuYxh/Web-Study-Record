###  Express 完成会员信息管理 

#### 运行

 http://localhost:3005/ 



#### art-template 模板引擎。

- [x] 使用 Express 生成器搭建项目，安装并配置 art-template 模板引擎。 
- [x] 下载模板素材，修改成会员管理界面效果，并将模板融入到项目中。 
- [x] 参考素材定义 `db.json` 数据文件，并将自己整理的数据操作模块放置到项目中。
- [x] 在项目中编写会员管理路由文件，完成会员信息管理的 CURD 操作。 
- [x] （扩展）尝试在浏览页面上完成会员信息的模糊搜索功能。



#### Ajax版

- [x] 打开上节课完成的【会员信息管理】任务，添加会员信息 API 接口路由。
- [x] 下载模板素材，找出带静态表单框的会员管理界面页，并将模板融入到项目中。
- [x] 使用 Ajax 在项目中编写请求 API 接口代码，完成会员的无刷新‘增删改查操作。
- [x] （扩展）尝试在浏览页面上完成会员信息的 ajax 模糊搜索功能。 
- [x] 弹窗插件： jQuery Toast  、 sweetalert2

#### 优化

- [x] 关键字搜索，先过滤，在增加验证
- [x] 添加、删除、搜索信息成功后，弹窗提示
- [x] 搜索信息失败，弹窗提示 
- [ ] 对添加信息的表单、编辑信息的表单做验证



#### API

  <li> 获取所有信息（get）： /api/user</li>

  <li>获取单条信息（get）：/api/user/find?id=?</li>

  <li>添加信息（post）：/api/user/add</li>

  <li>修改信息（post）：/api/user/edit</li>

  <li>删除信息（get）：/api/user/del?id=?</li>

  <li>模糊查询（get）：/api/user/condition?condition=?</li>







