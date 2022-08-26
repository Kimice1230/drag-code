import { createApp } from 'vue'
import vcolorpicker from 'vcolorpicker';
import { Button,Layout ,Input,Form} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
[{
	"resource": "/D:/ice/作品/drag-code/src/main.ts",
	"owner": "typescript",
	"code": "7016",
	"severity": 8,
	"message": "无法找到模块“vcolorpicker”的声明文件。“D:/ice/作品/drag-code/node_modules/vcolorpicker/lib/vcolorpicker.umd.min.js”隐式拥有 \"any\" 类型。\n  尝试使用 `npm i --save-dev @types/vcolorpicker` (如果存在)，或者添加一个包含 `declare module 'vcolorpicker';` 的新声明(.d.ts)文件",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 26,
	"endLineNumber": 2,
	"endColumn": 40
}]

const app = createApp(App);



app
.use(vcolorpicker)
.use(Button)
.use(Layout)
.use(Input)
.use(Form)
.mount('#app')
