import { createApp } from 'vue'
import Vue from 'vue';
// import vcolorpicker from 'vcolorpicker';
import { Button,Layout ,Input,Form} from 'ant-design-vue';
类型“typeof import("D:/ice/\u4F5C\u54C1/drag-code/node_modules/vue/dist/vue")”上不存在属性“use”。
import vcolorpicker from 'vcolorpicker';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';


const app = createApp(App);


Vue.use(vcolorpicker).mount('#app');
app

.use(Button)
.use(Layout)
.use(Input)
.use(Form)
.mount('#app');
