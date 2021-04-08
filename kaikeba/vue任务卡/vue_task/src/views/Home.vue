<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <Content></Content>
          <!-- <ContentBuk></ContentBuk> -->
        </a-layout-content>
        <a-layout-sider width="30%">
          <Sider />
        </a-layout-sider>
      </a-layout>
      <a-layout-footer>
        <Foot></Foot>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import ContentBuk from "@/components/ContentBuk.vue";

import Sider from "@/components/Sider.vue";
import Foot from "@/components/Foot.vue";


export default {
  name: "Home",
  components: {
    ContentBuk,
    Header,
    Content,
    Sider,
    Foot,
  },
  data() {
    return {
    }
  },

};
</script>


<style>
#components-layout-demo-basic {
  /* text-align: center; */
  height: 100%;
}

#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #ffffff;
  /* color: #fff; */
}
#components-layout-demo-basic .ant-layout-header{
  padding: 0 ;
}
#components-layout-demo-basic .ant-layout-footer {
  /* line-height: 1.5; */
}
#components-layout-demo-basic .ant-layout-sider {
  /* background: #3ba0e9; */
  /* color: #fff; */
  background: #ffffff;
  line-height: 120px;
  padding: 30px;
}
#components-layout-demo-basic .ant-layout-content {
  /* background: rgba(16, 142, 233, 1); */
  /* color: #fff; */
  background: #ffffff;
  min-height: 120px;
  line-height: 120px;
  padding-left: 10px;
  padding-top: 25px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>