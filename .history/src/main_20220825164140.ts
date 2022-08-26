import { createApp } from 'vue'

import { Button,Header,Layout } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App);



app
.use(Button)
.use(Button)
.use(Button)
.mount('#app')
