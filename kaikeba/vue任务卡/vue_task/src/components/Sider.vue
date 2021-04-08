<template>
  <div>
    <a-card title="README" style="width: 300px">
        <!-- <a slot="extra" href="#">more</a> -->
        <p>1、增删改查</p>
        <p>2、图片上传</p>
        <p>3、模糊查询</p>
      </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: false,
    };
  },
  methods: {
    handleClick() {
      this.reverse = !this.reverse;
    },
  },
};
</script>
