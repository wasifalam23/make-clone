<script setup>
	const { inverse } = defineProps(['inverse']);
</script>

<template>
	<div
		class="tooltip py-3 px-4 max-w-[20rem] text-gray-700 text-sm"
		:class="{ 'scale-x-[-1]': inverse }">
		<p class="tooltip-text" :class="{ 'scale-x-[-1]': inverse }">
			<slot></slot>
		</p>
	</div>
</template>

<style scoped>
	.tooltip {
		--r: 30px; /* control the radius */
		--h: 26px; /* control the height of the tail */
		--p: 30%; /* control the position of the tail */

		/* padding: var(--r); */
		border-bottom: var(--h) solid #0000;
		--m:
    /* adjust the angles of the 1st conic-gradient to control the shape */ conic-gradient(
					from 30deg at var(--p) 100%,
					#0000,
					#000 1deg 30deg,
					#0000 31deg
				)
				0 100%/100% calc(100% - var(--r)) no-repeat,
			conic-gradient(
					at calc(var(--r) / 2) calc(var(--r) / 2),
					#000 270deg,
					#0000 0
				)
				0 0 / calc(100% - var(--r) / 2) calc(100% - var(--r) / 2) padding-box,
			radial-gradient(50% 50%, #000 98%, #0000) 0 0 / var(--r) var(--r) space
				padding-box;
		-webkit-mask: var(--m);
		mask: var(--m);

		background: #fff;
	}
</style>
