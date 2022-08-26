<template>
	<div class="board-property">画布属性</div>
	<div class="content">
		<a-form>
        <a-form-item>
        
        </a-form-item>
			<a-form-item>
				<a-input v-model:value="op"
			/></a-form-item>
			<a-form-item>
				<a-input v-model:value="formState.username"
			/></a-form-item>
		</a-form>
	</div>
</template>
<script lang="ts" setup>
import { Form } from "ant-design-vue";
</script>
<style lang=""></style>