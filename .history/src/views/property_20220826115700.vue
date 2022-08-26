<template>
	<div class="sider">
		<a-menu
			v-model:selectedKeys="current"
			mode="horizontal"
			triggerSubMenuAction="click"
			style="justify-content: center"
		>
			<a-menu-item>画布属性</a-menu-item>
		</a-menu>
		<div class="content">
			<a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
				<a-form-item class="pick-box">
					<span>颜色</span>
					<color-picker
						v-model:pureColor="pureColor"
						v-model:gradientColor="gradientColor"
						disableHistory="true"
						disableAlpha="true"
					/>
				</a-form-item>
				<a-form-item>
					<span>不透明度</span>
					<a-input v-model:value="opacity"
				/></a-form-item>
				<a-form-item class="bgc-pick-box">
					<span>背景色</span>
					<color-picker
						v-model:pureColor="pureColor"
						v-model:gradientColor="gradientColor"
						disableHistory="true"
						disableAlpha="true"
					/>
				</a-form-item>
				<a-form-item
					><span>字体大小</span><a-input v-model:value="fontsize"
				/></a-form-item>
			</a-form>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { Form, Menu } from "ant-design-vue";
</script>
<style lang="scss">
.sider {
	right: 0;
	width: 200px;
	height: 800px;
	background: white;
	float: right;
}
.content {
	margin-top: 20px;
	margin-left: 20px;
}
</style>