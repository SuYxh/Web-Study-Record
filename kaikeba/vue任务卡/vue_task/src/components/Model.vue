<template>
  <a-modal
    title="Title"
    :visible="visibleComponents"
    :confirm-loading="confirmLoading"
    :destroyOnClose="true"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form
      id="components-form-demo-validate-other"
      :form="form"
      v-bind="formItemLayout"
      @submit="handleOk"
    >
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
    </a-form>
  </a-modal>
</template>

<script>
import { getAllList, deleteItem, addItem, updateItem ,selectOneItem} from "@/api/todo";

export default {
  props: {
    index: {
      type: String,
      default: "",
    },
    fetchAllData: {
      type: Function,
    },
  },
  data() {
    return {
      recordSonzujian: {},
      visibleComponents: true,
      loading: false,
      imageUrl: "",
      uploadUrl: "http://localhost:3002/api/upload/aliyun",
      id: "",
      initData: "",
      ModalText: "Content of the modal",
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
  mounted() {
    console.log("传递的数据--id", this.index);
    console.log(this.visibleComponents)
     if (this.index) {
        this.searchOne()
      }
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

    // 根据id查询信息
    searchOne() {
      selectOneItem(this.index)
        .then((res) => {
          this.form.setFieldsValue({
            content: res.content
          });
          this.imageUrl = res.url
        })
        .catch((err) => console.log(err));
    },

    handleOk(e) {
      e.preventDefault();
      this.confirmLoading = true;

      this.form.validateFields((err, values) => {
        // console.log("表单错误信息：", err);
        if (!err) {
          // console.log("Received values of form: ", values);
          if (this.imageUrl) {
            values.url = this.imageUrl;
          }
          if (!this.index) {
            console.log('新建----保存')
            addItem(values)
              .then((res) => {
                // console.log(res);
                this.$message.success("添加成功！");
                this.visibleComponents = false;
                this.confirmLoading = false;
                this.$emit('colseModel')

                this.fetchAllData();
              })
              .catch((err) => {
                console.log(err);
                // this.visible = false;
                this.confirmLoading = false;
              });
          } else {
            console.log("编辑----保存");
            updateItem(this.index, values)
              .then((res) => {
                console.log("更新成功！：", res);
                this.$message.success("更新成功！");
                this.visibleComponents = false;
                this.confirmLoading = false;
                this.$emit('colseModel')

                this.fetchAllData();
              })
              .catch((err) => console.log(err));
          }
        }
      });
    },
    handleCancel(e) {

      // console.log("Clicked cancel button");
    if (this.index) {
            console.log('编辑----取消')

    } else {
            console.log('新建----取消')

      
    }

      this.visibleComponents = false;
      this.$emit('colseModel')

    },
  },
  watch: {
    index(newValue, oldValue) {
      console.log("父组件传递的id发生了改变：", oldValue + "---->" + newValue);
      // this.visibleComponents = newValue
     
    },
    visibleComponents:function(val,old){
      console.log('change'+val)
    }
  },
};
</script>

<style>
</style>