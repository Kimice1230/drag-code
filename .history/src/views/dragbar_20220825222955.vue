<template>
		<div class="sider">
			<a-button class="button"
				><template #icon><font-size-outlined /></template>文字</a-button
			>
			<a-button class="button"
				><template #icon><plus-square-outlined /></template
				>按钮</a-button
			>
			<a-button class="button"
				><template #icon><picture-outlined /></template>图片</a-button
			>
		</div>
</template>
<script lang="ts" setup>
//引入组件
import { Button, Layout, Sider } from "ant-design-vue";
//引入图标
import {
	FontSizeOutlined,
	PictureOutlined,
	PlusSquareOutlined,
} from "@ant-design/icons-vue";
</script>

<style lang="scss" scoped>
.sider {
	left:0 ;
	width: 200px;
	height: 800px;
	background: white;
	float: left;
	.button {
		position: abolute;
		top: 10px;
		left: 8px;	
		flex-wrap: wrap;
		margin-right: 10px;
		margin-top: 5px;
	}
}
</style>