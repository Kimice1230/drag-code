import { createApp } from 'vue'

import { Button,Layout } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App);



app
.use(Button)
.use(Layout)
.use(Layout)
.mount('#app')
