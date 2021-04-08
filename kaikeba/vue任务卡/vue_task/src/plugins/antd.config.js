import Antd, {message, notification} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue'

Vue.use(Antd)

Vue.prototype.$message = message
Vue.prototype.$notification = notification



