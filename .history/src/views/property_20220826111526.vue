<template>
	<div class="board-property">画布属性</div>
	<div class="content">
		<a-form>
			<a-form-item>
				<span></span>
				<!-- <ColorPicker :color="color" /> -->
				<Verte picker="square" model="rgb"></Verte>
			</a-form-item>
			<a-form-item> <a-input v-model:value="opacity" /></a-form-item>
			<a-form-item> <a-input v-model:value="fontsize" /></a-form-item>
		</a-form>
	</div>
</template>
<script lang="ts" setup>
import { Form } from "ant-design-vue";
import Verte from "verte";
import "verte/dist/verte.css";

// import { ColorPicker } from "vue-accessible-color-picker";
</script>
<style lang=""></style>