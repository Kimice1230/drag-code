import { createApp } from 'vue'
// import vcolorpicker from 'vcolorpicker';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { Button,Layout ,Input,Form} from 'ant-design-vue';


import 'ant-design-vue/dist/antd.css';
import App from './App.vue';


const app = createApp(App);


app
.use(Button)
.use(Layout)
.use(Input)
.use(Form)
.mount('#app');
