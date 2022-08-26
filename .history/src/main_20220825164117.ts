import { createApp } from 'vue'

import { Button, } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App);



app
.use(Button)
.mount('#app')
