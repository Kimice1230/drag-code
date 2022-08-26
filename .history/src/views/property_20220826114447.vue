<template>
	<a-menu
		v-model:selectedKeys="current"
		mode="horizontal"
		triggerSubMenuAction="click"
	
	>
		<a-menu-item >画布属性</a-menu-item>
	</a-menu>
	<div class="content">
		<a-form>
			<a-form-item class="pick-box">
				<span></span>
				<color-picker
					v-model:pureColor="pureColor"
					v-model:gradientColor="gradientColor"
					disableHistory="true"
					disableAlpha="true"
				/>
			</a-form-item>
			<a-form-item><a-input v-model:value="opacity" /></a-form-item>
			<a-form-item> <a-input v-model:value="fontsize" /></a-form-item>
		</a-form>
	</div>
</template>
<script lang="ts" setup>
import { Form, Menu } from "ant-design-vue";
</script>
<style lang="scss">

</style>