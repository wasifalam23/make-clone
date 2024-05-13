<template>
	<div>
		<div id="typing-text" :class="{ fadeOut: fadingOut, fadeIn: fadingIn }">
			{{ currentText }}
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const texts = ref([
		'First text to type',
		'Second text to type',
		'Third text to type',
	]);
	const currentIndex = ref(0);
	const currentText = ref('');
	let typingTimeout;
	const fadingOut = ref(false);
	const fadingIn = ref(false);

	const type = () => {
		const text = texts.value[currentIndex.value];
		const interval = 200; // Adjust typing speed here (milliseconds)
		let index = 0;

		fadingOut.value = true;
		typingTimeout = setTimeout(() => {
			fadingOut.value = false;
			fadingIn.value = true;

			const typingInterval = setInterval(() => {
				currentText.value = text.slice(0, index);
				index++;

				if (index > text.length) {
					clearInterval(typingInterval);
					setTimeout(() => {
						fadingIn.value = false;
						currentIndex.value = (currentIndex.value + 1) % texts.value.length;
						type();
					}, 1000); // Adjust delay between texts here (milliseconds)
				}
			}, interval);
		}, 1000); // Adjust initial delay before typing the first text here (milliseconds)
	};

	onMounted(() => {
		type();
	});

	// Clear typingTimeout on component unmount
	onUnmounted(() => {
		clearTimeout(typingTimeout);
	});
</script>

<style scoped>
	#typing-text {
		font-family: Arial, sans-serif;
		font-size: 24px;
		border-right: 2px solid black;
		white-space: nowrap;
		overflow: hidden;
	}

	.fadeOut {
		opacity: 0;
	}

	.fadeIn {
		transition: opacity 0.5s ease-in-out;
		opacity: 1;
	}
</style>
