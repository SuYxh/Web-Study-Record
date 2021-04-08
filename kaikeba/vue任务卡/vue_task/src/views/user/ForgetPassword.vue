<template>
  <a-result
    :isSuccess="true"
    :content="false"
    :title="email"
    :sub-title="description">

    <template #extra>
      <a-button size="large" type="primary" @click="goResHandle">返回注册页面</a-button>
      <a-button size="large" style="margin-left: 8px" @click="goHomeHandle">返回首页</a-button>
    </template>

  </a-result>
</template>

<script>
export default {
  name: 'RegisterResult',
  data () {
    return {
      description: '敬请期待！！！',
      form: {}
    }
  },
  computed: {
    email () {
      const v = this.form && this.form.email || 'xxx'
      return `该功能暂未开放！`
    }
  },
  created () {
    this.form = this.$route.params
  },
  methods: {
    goResHandle(){
      this.$router.push({ name: 'register' })
    },
    goHomeHandle () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

</style>
