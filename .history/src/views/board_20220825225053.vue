<template>
	<div class="grey">
		<div class="board"></div>
	</div>
</template>
<script lang="ts" scoped></script>
<style lang="scss">
.grey {
	width: 1800px;
	height: 1040px;
	float: left;
	position: relative;
	background-color: #f5f5f5;
	.board {
		width: 1200px;
		height: 740px;
		align-items: center;
		position: abolute;
		left: 50%;
		top: 50%;
		margin-top: -50px;
		margin-left: -50px;
		background-color: #fff;
	}
}
</style>