
<template>
	<div id="content"> 
		<div class="scale">BS 404</div>
	</div>
</template>
<style>
	.scale {
		background: red;
		width: 100px;
		height: 100px;
		transition: all 1s;
		animation: scale 1s ease;
		animation-fill-mode: forwards;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		margin: 100px auto;
	}
	.scale:hover {

	}
	@keyframes scale {
		30%{
			transform: rotate(90deg);
		}
		63%{
			transform: rotate(-90deg);
		}
		100% {
			transform: scale(1.2);
		}
	}
</style>