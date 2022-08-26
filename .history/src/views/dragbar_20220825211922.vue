<template>
	<a-layout>
		<div class="sider">
			<a-button
				class="button"
				v-for="button in buttons"
				:key="button.text"
				>{{ button.text }}</a-button
			>
		</div>
	</a-layout>
</template>
<script lang="ts" setup>
import { Button, Layout, Header, Sider } from "ant-design-vue";
//引入图标
import{}from @ant-design/icons-vue
const buttons = [{ text: "文字" }, { text: "按钮" }, { text: "图片" }] as const;
</script>

<style lang="scss" scoped>
.sider {
	left: 0;
	width: 200px;
	height: 800px;
	background: white;
	.button {
		position: abolute;
		top: 10px;
		left: 20px;
		flex-wrap: wrap;
		margin-right: 10px;
		margin-top: 5px;
	}
}
</style>