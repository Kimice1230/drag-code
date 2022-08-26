<template>
	<div class="grey">
			<Grid />
	</div>
</template>
<script lang="ts" setup>
import Grid from "@/components/Editor/Grid";
</script>
<style lang="scss" scoped>
.grey {
	width: 800px;
	height: 800px;
	float: left;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5f5f5;
	.board {
		width: 700px;
		height: 700px;

		background-color: #fff;
		grid {
			
			width: 700px;
			height: 700px;
		}
	}
}
</style>