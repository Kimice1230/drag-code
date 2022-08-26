<template>
	<div class="board">
		<div class="grey"></div>
		<canvas width="1200" height="740"></canvas>
	</div>
</template>
<script lang="ts" scoped></script>
<style lang="scss">
.board {
	width: 1200px;
	height: 740px;
	float: left;
	position: abolute;
	left: 400px;
	top: 400px;
	.grey {
		width: 1800px;
		height: 740px;
		float: left;
		position: abolute;
		left: 400px;
		top: 400px;
		background: #dddddd;
	}
}
</style>