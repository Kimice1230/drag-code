<template>
	<div class="grey">
		<div class="board">
			<Grid class="grid" />
		</div>
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
		position: relative;
		background-color: #fff;
		overflow:scroll;
			.grid {
				position: absolute;
                height:1200px;
                width:1000px;
			}
		}
	}
	.board::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}
	.board::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: #ddd;
	}
	.board::-webkit-scrollbar-track {
		background-color: transparent;
	}

</style>