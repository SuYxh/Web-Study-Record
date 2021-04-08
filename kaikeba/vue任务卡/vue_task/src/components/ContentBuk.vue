<template>
  <div>
    <a-card title="Default size card">
      <!-- <a slot="extra" href="#" @click="fetchAllData">more</a> -->
      <span slot="extra">
        <a-icon
          @click="dingding"
          style="margin-right: 15px; font-size: 22px; cursor: pointer"
          type="dingding"
        />
        <a-icon
          @click="showModal"
          style="margin-right: 15px; font-size: 22px; cursor: pointer"
          type="plus"
        />
        <a-modal
          title="Title"
          :visible="visible"
          :confirm-loading="confirmLoading"
          :destroyOnClose="true"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <!-- biaoge -->
          <a-form
            id="components-form-demo-validate-other"
            :form="form"
            v-bind="formItemLayout"
            @submit="handleOk"
          >
            <!-- 文字 -->
            <a-form-item label="Plain Text">
              <a-textarea
                v-decorator="[
                  'content',
                  {
                    initialValue: initData,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your content!',
                        whitespace: true,
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>

            <!-- 图片上传 -->
            <a-form-item label="Dragger">
              <div class="dropbox">
                <a-upload
                  name="file"
                  list-type="picture-card"
                  class="avatar-uploader"
                  :show-upload-list="false"
                  :action="uploadUrl"
                  :before-upload="beforeUpload"
                  @change="handleChange"
                >
                  <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                  <div v-else>
                    <a-icon :type="loading ? 'loading' : 'plus'" />
                    <div class="ant-upload-text">Upload</div>
                  </div>
                </a-upload>
              </div>
            </a-form-item>

            <!-- <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
              <a-button type="primary" html-type="submit"> Submit </a-button>
            </a-form-item> -->
          </a-form>
        </a-modal>
        <a-input-search
          placeholder="input search text"
          style="width: 150px"
          @search="onSearch"
        />
      </span>

      <!-- Ant Design, a design language for background applications, is refined by Ant UED Team -->
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a slot="actions" @click="editToDo(item)">edit</a>
          <a slot="actions" @click="delToDo(item)">delete</a>
          <a-list-item-meta :description="item.content">
            <!-- <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a> -->
            <a-avatar
              slot="avatar"
              :src="item.url"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>


<script>
import { getAllList, deleteItem, addItem, updateItem } from "@/api/todo";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  data() {
    return {
      loading: false,
      imageUrl: "",
      uploadUrl:'http://localhost:3000/api/upload/aliyun',
      id: "",
      initData: "",
      formdata: {},
      data: [],
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "validate_other" });
  },
  created() {
    this.fetchAllData();
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        this.imageUrl = info.file.response.url;
        // getBase64(info.file.originFileObj, imageUrl => {
        //   this.imageUrl = imageUrl;
        //   this.loading = false;
        // });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },

    // 测试函数
    dingding() {
      let id = "5f856c839690107578f092c4";
      let parameter = { content: "yxhyxh" };
      updateItem(id, parameter)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },

    // 获取数据
    fetchAllData() {
      getAllList()
        .then((res) => {
          console.log(res);
          this.data = res;
        })
        .catch((err) => console.log(err));
    },

    // 编辑
    editToDo(item) {
      console.log(item);
      this.initData = item.content;
      this.id = item._id;
      this.visible = true;
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
    },

    showModal() {
      this.visible = true;
    },

    handleOk(e) {
      console.log(this.form.content);

      e.preventDefault();
      this.confirmLoading = true;

      this.form.validateFields((err, values) => {
        console.log("表单错误信息：", err);
        if (!err) {
          console.log("Received values of form: ", values);
          if (this.imageUrl) {
            values.url = this.imageUrl
          }
          if (this.initData === "") {
            addItem(values)
              .then((res) => {
                console.log(res);
                this.$message.success("添加成功！");
                this.visible = false;
                this.confirmLoading = false;
                this.fetchAllData();
              })
              .catch((err) => {
                console.log(err);
                // this.visible = false;
                this.confirmLoading = false;
              });
          } else {
            console.log("正在编辑！！！");
            updateItem(this.id, values)
              .then((res) => {
                console.log("更新成功！：", res);
                this.$message.success("更新成功！");
                this.visible = false;
                this.confirmLoading = false;
                this.fetchAllData();
              })
              .catch((err) => console.log(err));
          }
        }
      });
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    },

    // 表单函数
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log("表单错误信息：", err);
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    normFile(e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>
<style></style>
