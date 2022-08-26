import { createApp } from 'vue'
import vcolorpicker from 'vcolorpicker'
Vue.
import { Button,Layout ,Input,Form} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App);



app
.use(vcolorpicker)
.use(Button)
.use(Layout)
.use(Input)
.use(Form)
.mount('#app')
