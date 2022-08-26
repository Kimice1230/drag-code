<template>
	<a-layout>
		<a-layout-header class="header">
			<div class="button-list">
				<a-button class="button">撤销</a-button>
				<a-button class="button">重做</a-button>
				<a-button class="button">插入图片</a-button>
				<a-button class="button">预览</a-button>
				<a-button class="button">保存</a-button>
				<a-button class="button">清空画布</a-button>
			</div>
			<div class="size">
				<span>画布大小</span>
				<a-input
					v-model:value="value"
					size="small"
					placeholder="small size"
				/>
				<span>*</span>
				<a-input
					v-model:value="value"
					size="small"
					placeholder="small size"
				/>
			</div>

			<div class="icon">
				<compress-outlined />
			</div>
		</a-layout-header>
	</a-layout>
</template>
<script lang="ts" setup>
import { Button, Layout, Header,Input } from "ant-design-vue";
</script>

<style>
.header {
	background: #fff;
	padding: 20px;
	border-bottom: 1px solid #dbdbdb;
	.button {
		margin-right: 10px;
		top: -20px;
	a-inpuy
}

}
</style>