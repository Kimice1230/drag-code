<template>
	<a-layout>
		<div class="sider">
			<a-button
				class="button"
				v-for="button in buttons"
				:key="button.text"
				><template #icon
					><template #icon><SearchOutlined /></template></template
				>{{ button.text }}</a-button
			>
		</div>
	</a-layout>
</template>
<script lang="ts" setup>
//引入组件
import { Button, Layout, Sider } from "ant-design-vue";
//引入图标
import {SearchOutlined }from "@ant-design/icons-vue";

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