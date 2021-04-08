# 开卖啦后台管理系统




[TOC]

## 一、项目说明

#### 1.1 项目介绍

开卖啦后台管理系统用于开卖啦商场的后台数据管理。

包含了系统的权限管理和商城管理。

主要有以下几个模块：

* 菜单管理
* 角色管理
* 管理员管理
* 商品分类管理
* 商品规格管理
* 商品管理
* 会员管理
* 轮播图管理
* 秒杀活动管理

九大模块。

项目采用了前后端分离的开发模式。

后端使用 Express + Mysql搭建

前端使用Vue + Element-UI搭建

通过这个项目，学员将掌握一个后台管理系统的完整开发流程。



#### 1.2 项目演示

![image-20201118142913089](https://tva1.sinaimg.cn/large/0081Kckwly1gktb8awbxij31lt0u0avz.jpg)



#### 项目代码：

* 后端接口：https://gitee.com/davie/kml-api

* 前端：https://gitee.com/davie/kml-admin
* 接口文档：https://www.showdoc.com.cn/davie?page_id=5800300474054049



## 二、开发环境准备



* Nodejs
* vue-cli 4.x
* XAMPP



#### Nodejs

下载地址：https://nodejs.org/en/download/



#### vue-cli

安装文档：https://cli.vuejs.org/zh/guide/installation.html

安装命令：

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```



#### XAMPP

下载地址：https://www.apachefriends.org/download.html



启动数据库和Apache服务器

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gktc5rfz3cj31180qkjtr.jpg" alt="image-20201118150122905" style="zoom:50%;" />

修改Apache端口：

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gktc6r2gecj311e0qs103.jpg" alt="image-20201118150219838" style="zoom:50%;" />

创建数据库：

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gktc982r11j31co0u0n5k.jpg" alt="image-20201118150442396" style="zoom:40%;" />





## 三、项目架构搭建

#### 3.1 创建项目

```
vue create kml-admin
```



#### 3.2 项目目录结构

![image-20201118154412424](https://tva1.sinaimg.cn/large/0081Kckwly1gktdebpcgej307i0ns75i.jpg)

在src下的目录：

- assets 静态资源目录
- common 公共模块，这里存放了公共的css和js资源
- components 组件目录
  - pages 页面组件
  - views 其他模块组件，主要存放了左侧菜单组件，以后也可以存放其他公用的组件
- router 路由目录
- store 状态管理
- App.vue 根组件
- main.js 入口文件



#### 3.3 安装Element-UI

**官网**： https://element.eleme.cn/#/zh-CN/component/installation

2. 安装element-ui

   ```
   npm i element-ui -S
   ```

   

2. 在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import App from './App.vue';
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。



#### 3.4 路由配置

```
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

import Layout from '@/components/pages/Layout'
import Login from '@/components/pages/Login'

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect:'/home',  //重定向首页
      children:[
        {
          path:'/home',
          // 动态加载组件，当路径是 "/home"的时候，才回去加载Home 组件
          component: () => import('../components/pages/Home')
        },
        {
          path:'/menu',
          component: () => import('../components/pages/Menu')
        },
        {
          path:'/role',
          component: () => import('../components/pages/Role')
        },
        {
          path:'/user',
          component: () => import('../components/pages/User')
        }
     ]
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})

```



#### 3.5  Layout.vue 布局组件：

```html
<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <NavBar />
      </el-aside>
      <el-main>
        <el-header height="50">
          <header> </header>
        </el-header>
        
        <div class="content">
          <router-view></router-view>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from "@/components/views/NavBar";
export default {
  name: "layout",
  components: { NavBar },
  methods: {}
};
</script>
<style scoped>
</style>

```



#### 3.6 NavMenu: 侧栏菜单：

添加 router属性：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转

```html
<template>
    <div class='nav-menu'>

        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router
            background-color="#001529"
            text-color="#999"
            unique-opened
            active-text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
        >
            <div class="logo">
                <img src="../../assets/kkb.png" alt="">
                开卖啦后台
            </div>
            <el-menu-item index="/home">
                <i class="el-icon-s-home"></i>
                <span>首页</span>
            </el-menu-item>
            <el-submenu index="menu">
                <template slot="title">
                    <i class="el-icon-s-operation"></i>
                    <span>系统设置</span>
                </template>
                <el-menu-item index="/menu">菜单管理</el-menu-item>
                <el-menu-item index="/role">角色管理</el-menu-item>
                <el-menu-item index="/admin">管理员管理</el-menu-item>
            </el-submenu>

        </el-menu>

    </div>
</template>

```





## 四、axios安装和配置

**github**: https://github.com/axios/axios



#### 4.1 安装

```
npm i axios -S
```



#### 4.2 引入

```
import axios from 'axios'
```

或者在main.js 全局引入：

```
// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;

```



#### 4.3 get请求：

```javascript
// 1. 把参数写在url上
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

```javascript
//把参数写在 params上
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
```

#### 4.4 post 请求

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

#### 4.5 axios

```
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})
.then((res)=>{})
```

#### 4.6 配置代理

1. jsonp

2. CORS 跨域资源共享（需要在服务器设置）

3. 代理

   ![image-20200731145559979](https://tva1.sinaimg.cn/large/007S8ZIlly1gha5uak6m3j315s0ck0tf.jpg)

在项目根目录添加vue.config.js,

配置代理：

```
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'//目标域名地址
      },
      '/uploads': {
        target: 'http://localhost:3000'  //图片上传
      }
    }
  }
}
```



## 五、菜单管理



#### 5.1 启动后端

先启动Mysql数据库

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkuarupj0dj31180qkacf.jpg" alt="image-20201119105856143" style="zoom:50%;" />

然后启动后端接口服务

```
cd kml-api

npm install

npm start
```



#### 5.2 测试接口

**接口文档：https://www.showdoc.com.cn/davie?page_id=5800300474054049**

在浏览器地址栏访问接口地址：

```
http://localhost:3000/api/menulist
```

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkvrsmvo2wj30pm0v0jtw.jpg" alt="image-20201120173326320" style="zoom:40%;" />

可以返回数据，说明接口没有问题。



#### 5.3 菜单列表页

在菜单也使用axios请求列表接口，获取数据，然后使用`<el-table>`组件展示数据

```
<template>
  <div class='k-menu'>

    <el-table
      stripe
      border
      :data="menuList"
      row-key="id"
      style="width: 100%"
      :tree-props="{children:'children'}"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="名称"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="icon"
        label="图标"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="url"
        label="地址"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status == '1' ? 'primary' : 'danger'">
            {{ scope.row.status == '1' ? '启用' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="edit(scope.row.id)"
          > 编辑 </el-button>
          <el-button type="danger" @click="dialogVisible = true"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteMenu"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "k-menu",
  data() {
    return {
      dialogVisible:false, //控制对话框是否显示
      menuList: []
    };
  },
  mounted() {
    this.getMenuList();
  },
  methods: {
    getMenuList() {
      this.$axios
        .get("/api/menulist",{params:{istree:1}})
        .then(result => {
          console.log(result);
          this.menuList = result.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 编辑菜案
    edit(id) {
      console.log(id);
    },
    // 删除菜单
    deleteMenu(){
      console.log('删除菜单')
      this.dialogVisible = false;
    }
  }
};
</script>
<style scoped>
</style>

```

#### 5.4 添加菜单

```
<template>
    <div class="menu-edit">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/menu' }">菜单管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加菜单</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 菜单添加的表单 -->
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="菜单名称" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="上级菜单" prop="pid">
                <el-select v-model="form.pid" placeholder="请选择上级菜单">
                    <el-option label="顶级菜单" value="0"></el-option>
                    <el-option
                        v-for="menu in menuList"
                        :key="menu.id"
                        :label="menu.title"
                        :value="menu.id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group v-model="form.type">
                    <el-radio label="1">目录</el-radio>
                    <el-radio label="2">菜单</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单地址" v-if="form.type == 2">
                <el-input v-model="form.url"></el-input>
            </el-form-item>
            <el-form-item label="目录图标" v-if="form.type == 1">
                <el-input v-model="form.url"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-switch active-value="1" inactive-value="2" v-model="form.status"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "menu-edit",
  data() {
    return {
      form: {
        pid: "", //上级菜单编号
        title: "", //菜单名称
        icon: "", // 图标
        type: "1", //类型 默认是1，目录  2：菜单
        url: "", // 菜单地址
        status: 1 //菜单状态
      },
      rules: {
        title: [
          { required: true, message: "请输入表单名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pid: [{ required: true, message: "请选择上级菜单", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState(["menuList"])
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$refs["form"].validate(valid => {
        if (valid) {
          console.log("验证通过", this.form);

          this.$axios
            .post(this.$apis.menuadd, this.form)
            .then(result => {
              console.log(result);
              if (result.data.code == 200) {
                this.$router.push("/menu");
              }
            })
            .catch(err => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.el-input {
  width: 300px;
}
</style>

```



#### 5.5 编辑菜单

编辑菜单，需要先请求到菜单的详情数据：

```
    getMenuInfo(id){
        this.$axios.get('/api/menuinfo',{params:{id}})
        .then((result) => {
          this.form = result.data.list
        }).catch((err) => {
          console.log(err)
        });
    },
```

把菜单数据展示到表单上。

在提交数据的时候，判断如果有id，则url地址要改为修改的i地址：

```
 let url = "/api/menuadd";
 if(this.type === "编辑"){
     data.id = this.$route.params.id
     url = "/api/menuedit"
 }
```



#### 5.6 删除菜单

根据id删除菜单：

```
    // 删除菜单
    deleteMenu() {
      this.dialogVisible = false;

      this.$axios.post('/api/menudelete',{id: this.delId})
      .then((result) => {
        console.log(result)
        if(result.data.code === 200){
          this.menuList = result.data.list
        }
      }).catch((err) => {
        console.log(err)
      });
    }
```



#### 5.7 store

```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import apis from '../common/js/api'
const store = new Vuex.Store({

    state: {
        // 菜单列表
        menuList: []
    },

    mutations: {
        // 保存菜单列表
        saveMenuList(state, list) {
            state.menuList = list;
        }
    },

    actions: {
        // 获得菜单列表
        getMenuList(store,params) {

            return new Promise((resolve,reject)=>{
                axios
                .get(apis.menulist, { params: { istree: 1 } })
                .then(result => {
                    store.commit('saveMenuList',result.data.list)
                    resolve(result)
                })
                .catch(err => { });
            })
           
        }
    },

    getters: {

    }
})

export default store;
```





## 六、角色管理



#### 6.1 角色列表

```
<template>
  <div class='k-menu'>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary" style="margin-top:10px;margin-bottom:10px;"
      @click="$router.push('/role/add')"
    >添加</el-button>

    <el-table
      stripe
      border
      :data="roleList"
      row-key="id"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="rolename"
        label="名称"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status == '1' ? 'primary' : 'danger'">
            {{ scope.row.status == '1' ? '启用' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="edit(scope.row.id)"
          > 编辑 </el-button>
          <el-button
            type="danger"
            @click="dialogVisible = true;delId = scope.row.id"
          > 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>是否确定删除</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteMenu"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
  name: "k-menu",
  data() {
    return {
      dialogVisible: false, //控制对话框是否显示
      roleList: [],
      delId:''
    };
  },
  mounted() {
    this.getRoleList()
  },
  methods: {
    getRoleList(){
      this.$axios.get('/api/rolelist')
      .then((result) => {
        console.log(result)
         this.roleList = result.data.list
      }).catch((err) => {
          console.log(err)
      });
    },
    // 编辑菜案
    edit(id) {
      console.log(id);
      this.$router.push("/role/" + id)
    },
    // 删除菜单
    deleteMenu() {
      console.log("删除菜单",this.delId);
      this.dialogVisible = false;

      this.$axios.post('/api/menudelete',{id: this.delId})
      .then((result) => {
        console.log(result)
        if(result.data.code === 200){
          this.menuList = result.data.list
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  }
};
</script>
<style scoped>
</style>

```



#### 6.2 添加和编辑角色

```
<template>
  <div class='edit'>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/role' }">角色管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色{{type}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      style="margin-top:20px;"
    >
      <el-form-item
        label="角色名称"
        style="width:400px;"
      >
        <el-input v-model="form.rolename"></el-input>
      </el-form-item>

      <el-form-item  label="角色权限">
        <el-tree
          ref="menu-tree"
          :data="menuList"
          :props="defaultProps"
          show-checkbox
          default-expand-all
          highlight-current
          node-key="id"
          check-strictly
          :default-checked-keys="defaultChecked"
        ></el-tree>
      </el-form-item>

       <el-form-item label="状态">
        <el-switch
          v-model="form.status"
          :active-value="1"
          :inactive-value="0"
          active-color="green"
          inactive-color="red"
        ></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "edit",
  data() {
    return {
      type: "添加",
      menuList:[],
      defaultProps:{
        label:"title",
        children:"children"
      },
      form: {
        rolename: "",
        menus:"",
        status:''
      },
      defaultChecked:[]
    };
  },
  mounted() {
    this.getMenuList({istree:1})
    .then((result) => {
        console.log(result)
        this.menuList = result.data.list
    }).catch((err) => {
        console.log(err)
    });

    let id = this.$route.params.id;
    if(id){
      this.getRoleInfo(id)
    }
  },
  methods: {
    ...mapActions(["getMenuList"]),
    getRoleInfo(id){
      this.$axios.get('/api/roleinfo',{params:{id}})
      .then((result) => {
        this.form = result.data.list

        this.defaultChecked = this.form.menus.split(',')
        console.log(this.form)
      }).catch((err) => {
        console.log(err)
      });
    },
    onSubmit(){
       let nodes =  this.$refs['menu-tree'].getCheckedNodes()
       console.log(nodes)
       let menus = []
       nodes.forEach(node =>{
         menus.push(node.id)
       })
       this.form.menus = menus.toString()

      let url = "/api/roleadd"
      let id = this.$route.params.id
      if(id){
        this.form.id = id
        url = "/api/roleedit"
      }

      this.$axios.post(url,this.form)
      .then((result) => {
        console.log(result)
        if(result.data.code === 200){
          this.$router.push('/role')
        }
      }).catch((err) => {
        console.log(err)
      });

    }
  }
};
</script>
<style scoped>
</style>

```





## 七、管理员管理



#### 7.1 管理员列表

```
<template>
  <div class='k-menu'>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary" style="margin-top:10px;margin-bottom:10px;"
      @click="$router.push('/admin/add')"
    >添加</el-button>

    <el-table
      stripe
      border
      :data="userList"
      row-key="id"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="username"
        label="名称"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="rolename"
        label="角色"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status == '1' ? 'primary' : 'danger'">
            {{ scope.row.status == '1' ? '启用' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="edit(scope.row.id)"
          > 编辑 </el-button>
          <el-button
            type="danger"
            @click="dialogVisible = true;delId = scope.row.id"
          > 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>是否确定删除</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteMenu"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
  name: "k-menu",
  data() {
    return {
      dialogVisible: false, //控制对话框是否显示
      userList: [],
      delId:''
    };
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    getUserList(){
      this.$axios.get('/api/userlist',{params:{
        size:10,
        page:1
      }})
      .then((result) => {
        console.log(result)
         this.userList = result.data.list
      }).catch((err) => {
          console.log(err)
      });
    },
    // 编辑菜案
    edit(id) {
      console.log(id);
      this.$router.push("/role/" + id)
    },
    // 删除菜单
    deleteMenu() {
      console.log("删除菜单",this.delId);
      this.dialogVisible = false;

      this.$axios.post('/api/menudelete',{id: this.delId})
      .then((result) => {
        console.log(result)
        if(result.data.code === 200){
          this.menuList = result.data.list
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  }
};
</script>
<style scoped>
</style>

```





#### 7.2 添加管理员

```
<template>
  <div class='edit'>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/menu' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户{{type}}</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 添加/修改表单 -->
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      style="margin-top:20px;"
    >
      <el-form-item
        label="名称"
        style="width:400px;"
      >
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item
        label="所属角色"
        prop="roleid"
      >
        <el-select
          v-model="form.roleid"
          placeholder="请选择角色"
        >

          <el-option
            v-for="r in roleList"
            :key="r.id"
            :label="r.rolename"
            :value="r.id"
          ></el-option>

        </el-select>
      </el-form-item>

      <el-form-item
        label="密码"
        style="width:400px;"
      >
        <el-input
          show-password
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-switch
          v-model="form.status"
          :active-value="1"
          :inactive-value="0"
          active-color="green"
          inactive-color="red"
        ></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "edit",
  data() {
    return {
      type: "添加",
      form: {
        roleid: "", //角色id
        username: "",
        passsword: "",
        status: "" //状态
      },
      roleList: []
    };
  },
  computed: {
    ...mapState(["menuList"])
  },
  mounted() {
    let id = this.$route.params.id;
    if (id) {
      this.type = "编辑";
      this.getMenuInfo(id);
    }

    this.getRoleList();
  },
  methods: {
    getRoleList() {
      this.$axios
        .get("/api/rolelist")
        .then(result => {
       
          this.roleList = result.data.list;
             console.log(this.roleList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getMenuInfo(id) {
      this.$axios
        .get("/api/menuinfo", { params: { id } })
        .then(result => {
          this.form = result.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },

    onSubmit() {
      //获得form表单，然后进行验证
      this.$refs["form"].validate(valid => {
        if (valid) {
          // 深拷贝
          let str = JSON.stringify(this.form);
          let data = JSON.parse(str);

          // 如果type是编辑，则把接口地址改为编辑的接口
          let url = "/api/useradd";
          if (this.type === "编辑") {
            data.id = this.$route.params.id;
            url = "/api/useredit";
          }

          this.$axios
            .post(url, data)
            .then(result => {
              console.log(result);
              if (result.data.code === 200) {
                this.$router.push("/admin");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
</style>

```





## 八、登录



#### 8.1 登录页面

```
<template>
  <div class='login'>
      
      <div class="login-content">
        <el-form  :rules="rules"  :model="form" ref="form">
            <h1> 登录 </h1>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">登录</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'login',
  data(){
    return {
      form:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {required: true,message:"请输入用户名",trigger:"blur"},
          {min:3,max:10,message:"长度在3到10个字符",trigger:"blur"},
        ],
        password:[
          {required: true,message:"请输入密码",trigger:"blur"},
          {min:3,max:10,message:"长度在3到10个字符",trigger:"blur"},
        ]
      }
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    submitForm(){
      this.$refs['form'].validate( valid =>{
        if(valid){
          this.userLogin(this.form)
          .then((result) => {
            if(result.data.code === 200){
              this.$router.push('/home')
            }
          }).catch((err) => {
            console.log(err)
          });
        }
      })
    },
    ...mapActions(["userLogin"])
  }
}
</script>
<style scoped>
.login-content{
  width: 500px;
  margin:100px auto;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
}
</style>

```





#### 8.2 导航守卫拦截



![image-20200609153914018](https://tva1.sinaimg.cn/large/0081Kckwly1gkvgwryyxyj313a0r4dih.jpg)



```
// 验证是否登录
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.adminUser.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }else{
    next()
  }
})
```



#### 8.3 根据用户权限生成菜单

安装 ： vuex-persistedstate 数据持久化

```
npm i  vuex-persistedstate -S
```

然后在store中引入：

```
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
    
    state:{
        menuList: [],
        userInfo:{}
    },


    mutations:{
    },


    actions:{
    },


    // 插件  createPersistedState 可以把store中的数据保存在localStrage
    plugins:[ createPersistedState()]


})

export default store;
```



在NavMenu中根据userInfo中的menus生成左侧菜单：

```
<el-submenu 
		:index="i.toString()"
		v-for="(m,i) in userInfo.menus" 
		:key="m.id"
>
    <template slot="title">
    <i class="el-icon-s-operation"></i>
    <span>{{m.title}}</span>
    </template>

    <el-menu-item 
      v-for="item in m.children" 
      :key="item.id"
    	:index="item.url">
    		{{item.title}}
    </el-menu-item>

</el-submenu>
```



#### 8.4 用户登出

登出主要有两个操作，是一个是清空store中userInfo中的数据：

修改mutations，添加：

```
 userLogout(state){
 		state.userInfo = {}
 }
```

然后调用：

```
this.userLogout()
```

在一个是跳转到登录页面：

```
this.$router.push('/login')
```





## 九、分类管理

#### 9.1 分类列表

```
<template>
  <div class='k-menu'>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分类管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary" style="margin-top:10px;margin-bottom:10px;"
      @click="$router.push('/cate/add')"
    >添加</el-button>

    <el-table
      stripe
      border
      :data="cateList"
      row-key="id"
      style="width: 100%"
      :tree-props="{children:'children'}"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="catename"
        label="名称"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="img"
        label="图标"
        width="120"
      >
        <template slot-scope="scope">
            <div>
                <img class="cate-img" :src="scope.row.img"/>
            </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status == '1' ? 'primary' : 'danger'">
            {{ scope.row.status == '1' ? '启用' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="edit(scope.row.id)"
          > 编辑 </el-button>
          <el-button
            type="danger"
            @click="dialogVisible = true;delId = scope.row.id"
          > 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>是否确定删除</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteCate"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "k-menu",
  data() {
    return {
      dialogVisible: false, //控制对话框是否显示
      cateList: [],
      delId:''
    };
  },
  mounted() {
      this.getCateList()
  },
  methods: {
    getCateList(){
        this.$axios.get('/api/catelist',{params:{istree:1}})
        .then((result) => {
            console.log(result)
            this.cateList = result.data.list
        }).catch((err) => {
            console.log(err)
        });
    },
    // 编辑菜案
    edit(id) {
      console.log(id);
      this.$router.push("/cate/" + id)
    },
    // 删除菜单
    deleteCate() {
      this.dialogVisible = false;

      this.$axios.post('/api/catedelete',{id: this.delId})
      .then((result) => {
        console.log(result)
        if(result.data.code === 200){
          this.menuList = result.data.list
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  }
};
</script>
<style scoped>

.cate-img{
    height: 80px;
}
</style>

```



#### 9.2 分类添加

```
<template>
    <div class='edit'>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/menu' }">分类管理</el-breadcrumb-item>
            <el-breadcrumb-item>分类{{type}}</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 添加/修改表单 -->
        <el-form
            ref="form"
            :model="form"
            label-width="80px"
            style="margin-top:20px;"
        >
            <el-form-item
                label="名称"
                style="width:400px;"
            >
                <el-input v-model="form.catename"></el-input>
            </el-form-item>
            <el-form-item
                label="上级分类"
                prop="roleid"
            >
                <el-select
                    v-model="form.pid"
                    placeholder="请选择分类"
                >

                    <el-option
                        v-for="c in cateList"
                        :key="c.id"
                        :label="c.catename"
                        :value="c.id"
                    ></el-option>

                </el-select>
            </el-form-item>

            <el-form-item
                label="图片"
                style="width:400px;"
            >
                <el-upload
                    action="#"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :auto-upload="false"
                    :on-change="handleChange"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img
                        width="100%"
                        :src="dialogImageUrl"
                        alt=""
                    >
                </el-dialog>
            </el-form-item>

            <el-form-item label="状态">
                <el-switch
                    v-model="form.status"
                    :active-value="1"
                    :inactive-value="0"
                    active-color="green"
                    inactive-color="red"
                ></el-switch>
            </el-form-item>

            <el-form-item>
                <el-button
                    type="primary"
                    @click="onSubmit"
                >立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      type: "添加",
      form: {
        pid: "", //上级分类的id
        catename: "", //分类名称
        status: "" //状态
      },
      img: "", //分类图标
      cateList: [],
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  mounted() {
    let id = this.$route.params.id;
    if (id) {
      this.type = "编辑";
    }

    this.getCateList();
  },
  methods: {
    getCateList() {
      this.$axios
        .get("/api/catelist")
        .then(result => {
          this.cateList = result.data.list;
          console.log(this.cateList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSubmit() {
      //获得form表单，然后进行验证
      this.$refs["form"].validate(valid => {
        if (valid) {
          // 深拷贝
          let str = JSON.stringify(this.form);
          let data = JSON.parse(str);

          // 如果type是编辑，则把接口地址改为编辑的接口
          let url = "/api/cateadd";
          if (this.type === "编辑") {
            data.id = this.$route.params.id;
            url = "/api/cateedit";
          }

            // 把要上传的数据转成formDate
            let formData = new FormData()
            for(let key in data){
                formData.append(key,data[key])
            }
            formData.append('img',this.img)


          this.$axios
            .post(url, formData)
            .then(result => {
              console.log(result);
              if (result.data.code === 200) {
                this.$router.push("/cate");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChange(file){
        console.log(file)
        this.img = file.raw;
    }
  }
};
</script>
<style scoped>
</style>

```



## 十、商品规格管理



#### 10.1 规格列表

```
<template>
  <div class='k-menu'>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>规格管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary" style="margin-top:10px;margin-bottom:10px;"
      @click="$router.push('/specs/add')"
    >添加</el-button>

    <el-table
      stripe
      border
      :data="specsList"
      row-key="id"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      >
      </el-table-column>
    
      <el-table-column
        prop="specsname"
        label="规格"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="rolename"
        label="规格属性"
        width="300"
      >
        <template slot-scope="scope">
            <div>
                <el-tag v-for="a in scope.row.attrs" :key="a">{{a}}</el-tag>
            </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status == '1' ? 'primary' : 'danger'">
            {{ scope.row.status == '1' ? '启用' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="edit(scope.row.id)"
          > 编辑 </el-button>
          <el-button
            type="danger"
            @click="dialogVisible = true;delId = scope.row.id"
          > 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>是否确定删除</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteMenu"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
  name: "k-menu",
  data() {
    return {
      dialogVisible: false, //控制对话框是否显示
      specsList: [],
      delId:''
    };
  },
  mounted() {
    this.getSpecsList()
  },
  methods: {
    getSpecsList(){
      this.$axios.get('/api/specslist',{params:{
        size:10,
        page:1
      }})
      .then((result) => {
        console.log(result)
         this.specsList = result.data.list
      }).catch((err) => {
          console.log(err)
      });
    },
    // 编辑菜案
    edit(id) {
      console.log(id);
      this.$router.push("/specs/" + id)
    },
    // 删除菜单
    deleteMenu() {
      console.log("删除菜单",this.delId);
    }
  }
};
</script>
<style scoped>
</style>

```



#### 10.2 规格添加

```
<template>
    <div class='edit'>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/menu' }">规格管理</el-breadcrumb-item>
            <el-breadcrumb-item>规格{{type}}</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 添加/修改表单 -->
        <el-form
            ref="form"
            :model="form"
            label-width="80px"
            style="margin-top:20px;"
        >
            <el-form-item
                label="规格名称"
                style="width:400px;"
            >
                <el-input v-model="form.specsname"></el-input>
            </el-form-item>

            <el-form-item
                label="规格属性"
                style="width:400px;"
            >
                <el-input 
                v-for="(attr,i) in attrs" :key="i"
                v-model="attr.value"></el-input>

            </el-form-item>

            <el-button @click="attrs.push({value:''})"> 添加规格 </el-button>

            <el-form-item label="状态">
                <el-switch
                    v-model="form.status"
                    :active-value="1"
                    :inactive-value="0"
                    active-color="green"
                    inactive-color="red"
                ></el-switch>
            </el-form-item>

            <el-form-item>
                <el-button
                    type="primary"
                    @click="onSubmit"
                >立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "edit",
  data() {
    return {
      type: "添加",
      form: {
        specsname: "",
        status: "" //状态
      },
      attrs: [{value:""}]
    };
  },
  computed: {
    ...mapState(["menuList"])
  },
  mounted() {
    let id = this.$route.params.id;
    if (id) {
      this.type = "编辑";
    }

  },
  methods: {

    onSubmit() {
      //获得form表单，然后进行验证
      this.$refs["form"].validate(valid => {
        if (valid) {
          // 深拷贝
          let str = JSON.stringify(this.form);
          let data = JSON.parse(str);

          data.attrs = this.attrs.map(item => item.value).toString()

          // 如果type是编辑，则把接口地址改为编辑的接口
          let url = "/api/specsadd";
     
          this.$axios
            .post(url, data)
            .then(result => {
              console.log(result);
              if (result.data.code === 200) {
                this.$router.push("/specs");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
</style>

```



## 十一、商品管理



#### 11.1 商品列表

```
<template>
  <div class='k-menu'>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary" style="margin-top:10px;margin-bottom:10px;"
      @click="$router.push('/goods/add')"
    >添加</el-button>

    <el-table
      stripe
      border
      :data="goodsList"
      row-key="id"
      style="width: 100%"
      :tree-props="{children:'children'}"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="goodsname"
        label="名称"
        width="120"
      >
      </el-table-column>
       <el-table-column
        prop="price"
        label="价格"
        width="120"
      >
      </el-table-column>
       <el-table-column
        prop="market_price"
        label="市场价格"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="img"
        label="封面"
        width="120"
      >
        <template slot-scope="scope">
            <div>
                <img class="cate-img" :src="scope.row.img"/>
            </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="status"
        label="是否新品"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.isnew == '1' ? 'primary' : 'danger'">
            {{ scope.row.isnew == '1' ? '新品' : '否' }}
          </el-tag>
        </template>
      </el-table-column>

        <el-table-column
        prop="status"
        label="是否热卖"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.ishot == '1' ? 'primary' : 'danger'">
            {{ scope.row.ishot == '1' ? '热卖' : '否' }}
          </el-tag>
        </template>
      </el-table-column>


      <el-table-column
        prop="status"
        label="状态"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status == '1' ? 'primary' : 'danger'">
            {{ scope.row.status == '1' ? '启用' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="edit(scope.row.id)"
          > 编辑 </el-button>
          <el-button
            type="danger"
            @click="dialogVisible = true;delId = scope.row.id"
          > 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>是否确定删除</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="deleteCate"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "k-menu",
  data() {
    return {
      dialogVisible: false, //控制对话框是否显示
      goodsList: [],
      delId:''
    };
  },
  mounted() {
      this.getGoodsList()
  },
  methods: {
    getGoodsList(){
        this.$axios.get('/api/goodslist')
        .then((result) => {
            console.log(result)
            this.goodsList = result.data.list
        }).catch((err) => {
            console.log(err)
        });
    },
    // 编辑菜案
    edit(id) {
      console.log(id);
      this.$router.push("/cate/" + id)
    },
    // 删除菜单
    deleteCate() {
      this.dialogVisible = false;

      this.$axios.post('/api/catedelete',{id: this.delId})
      .then((result) => {
        console.log(result)
        if(result.data.code === 200){
          this.menuList = result.data.list
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  }
};
</script>
<style scoped>

.cate-img{
    height: 80px;
}
</style>

```



#### 11.2 添加商品

添加商品模块稍微复杂



**商品分裂**

包括商品一级分类和二级分类的联动，二级分类可以采用在一级分类上绑定change事件，或者使用计算属性来解决：

一计算属性为例：

```
  computed:{
      sec_cateList(){
          if(this.cateList.length > 0){
              let arr = this.cateList.filter( item => item.id == this.form.first_cateid)
              if(arr[0]){
                return arr[0].children
              }else{
                  return []
              }
              
          }else{
              return []
          }
          
      }
  },
```

当一级分类选择后，自动产生二级分类



**规格属性**

还有一个是规格属性也是类似，这里我使用了事件的方式：

```
 <el-form-item
                label="商品规格"
                prop="roleid"
            >
                <el-select
                    v-model="form.specsid"
                    @change="specsChange(form.specsid)"
                    placeholder="请选择规格"
                >

                    <el-option
                        v-for="s in specsList"
                        :key="s.id"
                        :label="s.specsname"
                        :value="s.id"
                    ></el-option>

                </el-select>
            </el-form-item>
```

当选择了商品规格后，触发change事件，函数specsChange里调用接口，获取规格属性：

```
    specsChange(id){
        this.$axios.get("/api/specsinfo",{params:{id}})
        .then((result) => {
            this.attrsList = result.data.list[0].attrs
        }).catch((err) => {
            console.log(err)
        });
    },
```



**商品描述**

商品描述使用了wangeditor这个富文本编辑器。

使用方法：

1. 首先安装： `npm i wangeditor -S`

2. 然后引入`import E from 'wangeditor'`

3. 之后在mounted中初始化：

   ```
    // 初始化 富文本编辑器
       this.editor = new E("#editor")
       this.editor.create()
   ```

4. 获取富文本编辑器的值：

   ```
   //   获取商品描述
   data.description = this.editor.txt.html()
   ```

   









