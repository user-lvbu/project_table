import { createApp } from 'vue'
import App from './App.vue'

// 导入bootstrap样式表
import './assets/css/bootstrap.css'
import './index.css'

// 1.导入 axios
import axios from 'axios'
// 2.将axios挂载到全局，每个组件都可以直接通过 this.$http 代替axios 发起ajax 请求
const app = createApp(App)
app.config.globalProperties.$http = axios
// 3.配置请求的根路径
axios.defaults.baseURL = 'https://www.escook.cn'

app.mount('#app')
