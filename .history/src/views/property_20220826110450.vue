<template>
	<div class="board-property">画布属性</div>
	<div class="content">
		<a-form>
			<a-form-item>
				<span></span>
				<ColorPicker
  :color="{
    h: 0.08055555555555556,
    s: 1,
    l: 0.5,
    a: 0.54
  }"
>
			</a-form-item>
			<a-form-item> <a-input v-model:value="opacity" /></a-form-item>
			<a-form-item> <a-input v-model:value="fontsize" /></a-form-item>
		</a-form>
	</div>
</template>
<script lang="ts" setup>
import { Form } from "ant-design-vue";

</script>
<style lang=""></style>