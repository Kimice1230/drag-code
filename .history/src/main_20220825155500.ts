import { createApp } from 'vue'

import { Button, message } from 'ant-design-vue';

import App from './App.vue'

app.use(Button).mount('#app');

app.config.globalProperties.$message = message;


createApp(App).mount('#app')
