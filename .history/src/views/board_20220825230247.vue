<template>
	<div class="grey">
		<div class="board">
			<Grid />
		</div>
	</div>
</template>
<script lang="ts" setup>
import Grid from "@/Components/Editor/Grid"
</script>
<style lang="scss">
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
	}
}
</style>