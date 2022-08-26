<template>
	<div class="board-property">画布属性</div>
	<div class="content">
		<a-form>
			<a-form-item>
				<span></span>
				<!-- <ColorPicker :color="color" /> -->
			</a-form-item>
			<a-form-item> <a-input v-model:value="opacity" /></a-form-item>
			<a-form-item> <a-input v-model:value="fontsize" /></a-form-item>
		</a-form>
	</div>
</template>
<script lang="ts" setup>
import { Form } from "ant-design-vue";
<color-picker
	v-model:pureColor="pureColor"
	v-model:gradientColor="gradientColor"
/>;
// import { ColorPicker } from "vue-accessible-color-picker";
</script>
<style lang=""></style>