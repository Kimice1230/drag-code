import { createApp } from 'vue'
// import vcolorpicker from 'vcolorpicker';
import { Button,Layout ,Input,Form} from 'ant-design-vue';

import { ColorPicker } from 'vue-accessible-color-picker'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';


const app = createApp(App);


app
// .use(ColorPicker)
.use(Button)
.use(Layout)
.use(Input)
.use(Form)
.mount('#app');
