<template>
  <div id="header">
    <div class="logo">
      <!-- <img src="../assets/logo.png" height="100%" alt=""> -->
    </div>
    <a-menu
      theme="light"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
      @click="handleRouter"
    >
      <a-menu-item key="1"> 开 </a-menu-item>
      <a-menu-item key="2"> 课 </a-menu-item>
      <a-menu-item key="3"> 吧 </a-menu-item>
      
   
      
    </a-menu>
        <a-button class="buttona"  @click="showConfirm"> 退出 </a-button>

  </div>
</template>

<script>
export default {
  methods: {
     showConfirm() {
       let _this = this
      this.$confirm({
        title: '提示',
        content: h => <div>确定要退出登录吗？</div>,
        onOk() {
          console.log('OK');
          _this.logout()
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      })
    },
    logout(){
      this.$router.push({name:'login'});
      localStorage.removeItem('tokenTest')
    },
    handleRouter(e) {
        console.log(typeof e.key)
        if (e.key === '1' || e.key === '2' || e.key === '3') {
            this.$message.success('This is a success message');
            return
        }
      this.$router.push(e.key);
    },
  },
};
</script>

<style scoped>
/* .header{
    width: 100%;
} */
.logo {
  width: 32px;
  height: 32px;
  margin: 16px 28px 16px 36px;
  float: left;
  background-image: url("../assets/logo.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
}
.buttona{
  /* display: inline-block; */
  float: right;
  margin-top: -40px;
  margin-right: 50px;
  z-index: 99;
}
</style>