<template>
	<a-layout>
		<a-layout-header class="header">
			<a-button
				class="button"
				v-for="button in buttons"
				:key="button.text"
				>{{ button.text }}</a-button
			>
		</a-layout-header>
        <div>
            
        </div>
		<compress-outlined />
	</a-layout>
</template>
<script lang="ts" setup>
import { Button, Layout, Header } from "ant-design-vue";
// import 'ant-design-vue/lib/button/style';
const buttons = [
	{ text: "撤销" },
	{ text: "重做" },
	{ text: "插入图片" },
	{ text: "预览" },
	{ text: "保存" },
	{ text: "清空画布" },
] as const;
</script>

<style>
.header {
	background: #fff;
	padding: 20px;
	border-bottom: 1px solid #dbdbdb;
}
.button {
	margin-right: 10px;
	top: -20px;
	align-items: center;
}
</style>