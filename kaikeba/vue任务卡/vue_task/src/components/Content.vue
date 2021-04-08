<template>
  <div>
    <a-card title="王者荣耀--英雄列表">
      <span slot="extra">
        <a-tooltip>
          <template slot="title">
            数据初始化按钮
          </template>
          <a-icon
          @click="initData"
          style="margin-right: 15px; font-size: 22px; cursor: pointer"
          type="smile"
        />
        </a-tooltip>
        
        <a-icon
          @click="showModal"
          style="margin-right: 15px; font-size: 22px; cursor: pointer"
          type="plus"
        />
        <!-- :visible="visible" -->
        <div v-if="visible" >
          <Model @colseModel = colseModel  :index="_id" :fetchAllData="fetchAllData"></Model>
        </div>

        <a-input-search
          placeholder="input search text"
          style="width: 150px"
          @search="onSearch"
          v-model="searchVal"
        />
      </span>

      <!-- Ant Design, a design language for background applications, is refined by Ant UED Team -->
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a slot="actions" @click="editToDo(item)">编辑</a>
          <!-- @click="delToDo(item)" -->
          <a slot="actions" >
             <a-popconfirm
                title="确定要删除嘛?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="confirm(item)"
                @cancel="cancel"
              >
                <a href="#">删除</a>
              </a-popconfirm>
          </a>
          <a-list-item-meta :description="item.content">
            <!-- <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a> -->
            <a-avatar slot="avatar" :src="item.url" />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>


<script>
import { getAllList, deleteItem, addItem, updateItem ,selectOneItem,initShuju ,blurrySearch} from "@/api/todo";
import Model from './Model'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  components: {
    Model,
  },
  data() {
    return {
      data:[],
      _id:'',
      visible: false,
      searchVal:'',
    };
  },

  created() {
    this.fetchAllData();
  },
  methods: {
    confirm(item) {
          deleteItem(item._id)
        .then((res) => {
          console.log(res);
          this.fetchAllData();
        })
        .catch((err) => {
          console.log(err);
        });
      this.$message.success('删除成功！');
    },
    cancel(e) {
      console.log(e);
      this.$message.error('取消成功！');
    },

    async initData(){
      if (this.data.length !== 0) {
        console.log('this.data',this.data)
          this.$message.success("当前存在数据不用初始化啦");
      }else {
        let initData =  await initShuju()
        console.log(initData)
        this.fetchAllData()
        this.$message.success(initData)
      }
    },

      colseModel(){
        console.log('colseModel--窗口已关闭！')
        this.visible = false
      },
    // 测试函数
    dingding() {
      console.log('测试函数')
      // selectOneItem({id:'5f855c3b742ffb70e00f1aaa'}).then(res =>console.log(res)).catch(err => console.log(err))

      selectOneItem('5f855c3b742ffb70e00f1aaa').then(res =>console.log(res)).catch(err => console.log(err))
    },

    // 获取数据
    fetchAllData() {
      getAllList()
        .then((res) => {
          // console.log(res);
          this.data = res;
        })
        .catch((err) => console.log(err));
    },

    // 编辑
    editToDo(item) {
      this.visible = true;

      console.log('编辑',this.visible)
      // console.log('当前行数据',item);
      this._id = item._id
      
    },

    // 删除
    delToDo(item) {
      console.log(item._id);
      deleteItem(item._id)
        .then((res) => {
          console.log(res);
          this.fetchAllData();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    onSearch(value) {
      console.log(value);
      this.searchVal = value
      if (value) {
           blurrySearch(value)
            .then(res => {
              console.log(res)
              this.data = res
              
            } )
            .catch(err => {
              console.log('模糊搜索查询错误信息：',err)
            })
      }else{
          this.fetchAllData()

      }
    },

    showModal() {
      this.visible = true;
      this._id = ''
      console.log('新建：',this.visible)
    },
  },


  watch: {
    searchVal(newValue, oldValue) {
      if (newValue === '') {
        this.fetchAllData()
      }
    }
  },

};
</script>
<style></style>
