import { createApp } from 'vue'
// import vcolorpicker from 'vcolorpicker';
import { Button,Layout ,Input,Form} from 'ant-design-vue';

import vcolorpicker from 'vcolorpicker';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';


const app = createApp(App);


Vue..mount('#app');
app
use(vcolorpicker)
.use(Button)
.use(Layout)
.use(Input)
.use(Form)
.mount('#app');
