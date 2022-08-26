<template>
	<div class="board-property">画布属性</div>
	<div class="content">
		<a-form>
			<a-form-item>
				<span></span>
				<colorPicker
					v-model="configure.FontColor"
					@change="selectColorPicker"
				/>
			</a-form-item>
			<a-form-item> <a-input v-model:value="opacity" /></a-form-item>
			<a-form-item> <a-input v-model:value="font - size" /></a-form-item>
		</a-form>
	</div>
</template>
<script lang="ts" setup>
import { Form } from "ant-design-vue";
import { colorPicker } from "@/common-components/ColorPicker";
</script>
<style lang=""></style>