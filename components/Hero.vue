<script setup>
	import vid from '@/assets/make-vid.webm';

	const isMenuOpen = ref(false);

	const isScrolled = ref(false);

	const handleScroll = () => {
		isScrolled.value = window.scrollY > 0;
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	const texts = ref([
		'Bring ideas to life',
		'Connect apps',
		'Design workflows',
		'Align teams',
		'Build systems',
	]);
	const currentIndex = ref(0);
	const currentText = ref('');
	let typingTimeout;
	const fadingOut = ref(false);
	const fadingIn = ref(false);

	const type = () => {
		const text = texts.value[currentIndex.value];
		const interval = 50; // Adjust typing speed here (milliseconds)
		let index = 0;

		fadingOut.value = true;
		// currentText.value = ''; // Reset current text

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
					}, 2000); // Adjust delay between texts here (milliseconds)
				}
			}, interval);
		}, 1000); // Adjust initial delay before typing the first text here (milliseconds)
	};

	onMounted(() => {
		type();
		window.addEventListener('scroll', handleScroll);
	});

	// Clear typingTimeout on component unmount
	onUnmounted(() => {
		clearTimeout(typingTimeout);
		window.removeEventListener('scroll', handleScroll);
	});

	// Prevent scrolling of body content when mobile menu is open
	const disableBodyScroll = () => {
		document.body.style.overflow = 'hidden';
	};

	const enableBodyScroll = () => {
		document.body.style.overflow = '';
	};

	// Watch for changes in the mobile menu state and enable/disable body scrolling accordingly
	watch(isMenuOpen, (newValue) => {
		if (newValue) {
			disableBodyScroll();
		} else {
			enableBodyScroll();
		}
	});
</script>

<template>
	<div class="pb-24">
		<div class="hero-bg"></div>

		<section class="relative z-[10]">
			<CommentBox class="absolute left-32 top-20" :inverse="true"
				>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
				sunt?</CommentBox
			>
			<CommentBox class="absolute left-44 top-[15rem]" :inverse="true">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis
				amet expedita?</CommentBox
			>

			<CommentBox class="absolute right-44 top-40"
				>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quia
				vitae delectus?</CommentBox
			>
			<CommentBox class="absolute right-64 top-72"
				>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
				perspiciatis aliquam voluptatibus omnis possimus vitae similique, nam
				placeat mollitia laudantium?</CommentBox
			>

			<header
				class="fixed w-full top-0 flex justify-between items-center text-gray-50 h-20 px-6"
				:class="[
					{
						'bg-white text-gray-700 transition-all duration-500 ease-linear':
							isScrolled,
					},
					{ 'bg-white text-gray-700': isMenuOpen },
				]">
				<div>Logo</div>
				<button
					@click="isMenuOpen = !isMenuOpen"
					class="bg-primary-800 text-gray-50 w-14 h-14 rounded-full items-center justify-center hidden max-lg:flex">
					<UIcon name="i-heroicons-squares-plus-solid" class="text-xl" />
				</button>

				<nav
					v-show="isMenuOpen"
					class="fixed top-20 hidden max-lg:block inset-0 w-full h-full bg-white overflow-y-scroll text-gray-800 pt-14 px-6 pb-14">
					<div class="">
						<ul class="flex flex-col gap-6">
							<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
								<div class="font-thin uppercase text-sm">Product</div>
								<ul class="flex flex-col gap-2">
									<li class="flex items-center gap-5">
										<UIcon name="i-heroicons-bolt" class="text-2xl" />
										<span class="text-lg font-light">Platform</span>
									</li>
									<li class="flex items-center gap-5">
										<UIcon name="i-heroicons-plus-circle" class="text-2xl" />
										<span class="text-lg font-light">Apps & services</span>
									</li>
									<li class="flex items-center gap-5">
										<UIcon
											name="i-heroicons-globe-europe-africa"
											class="text-2xl" />
										<span class="text-lg font-light">EnterPrise</span>
									</li>
								</ul>
							</li>

							<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
								<div class="font-thin uppercase text-sm">solutions</div>
								<ul class="flex flex-col gap-2">
									<li class="flex items-center gap-5">
										<UIcon name="i-heroicons-bolt" class="text-2xl" />
										<span class="text-lg font-light">Platform</span>
									</li>
									<li class="flex items-center gap-5">
										<UIcon name="i-heroicons-plus-circle" class="text-2xl" />
										<span class="text-lg font-light">Apps & services</span>
									</li>
									<li class="flex items-center gap-5">
										<UIcon
											name="i-heroicons-globe-europe-africa"
											class="text-2xl" />
										<span class="text-lg font-light">EnterPrise</span>
									</li>
								</ul>
							</li>
							<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
								<div class="font-thin uppercase text-sm">solutions</div>
								<ul class="flex flex-col gap-2">
									<li class="flex items-center gap-5">
										<UIcon name="i-heroicons-bolt" class="text-2xl" />
										<span class="text-lg font-light">Platform</span>
									</li>
									<li class="flex items-center gap-5">
										<UIcon name="i-heroicons-plus-circle" class="text-2xl" />
										<span class="text-lg font-light">Apps & services</span>
									</li>
									<li class="flex items-center gap-5">
										<UIcon
											name="i-heroicons-globe-europe-africa"
											class="text-2xl" />
										<span class="text-lg font-light">EnterPrise</span>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>

				<nav class="ml-32 max-lg:hidden">
					<ul class="flex gap-12 max-xl:gap-8">
						<li class="flex items-center gap-1 text-sm cursor-pointer">
							<span>Product</span>
							<UIcon name="i-heroicons-chevron-down" class="mt-.5" />
						</li>
						<li class="flex items-center gap-1 text-sm cursor-pointer">
							<span>Solutions</span>
							<UIcon name="i-heroicons-chevron-down" class="mt-.5" />
						</li>
						<li class="flex items-center gap-1 text-sm cursor-pointer">
							<span>Pricing</span>
						</li>
						<li class="flex items-center gap-1 text-sm cursor-pointer">
							<span>Resources</span>
							<UIcon name="i-heroicons-chevron-down" class="mt-.5" />
						</li>
						<li class="flex items-center gap-1 text-sm cursor-pointer">
							<span>Partners</span>
							<UIcon name="i-heroicons-chevron-down" class="mt-.5" />
						</li>
					</ul>
				</nav>
				<div class="flex gap-6 max-lg:hidden">
					<button
						class="py-2 px-3 border text-sm font-semibold rounded-md border-primary-500 text-primary-500">
						Log in
					</button>
					<button
						class="btn-cta px-3 py-2 text-gray-50 rounded-md text-sm font-semibold">
						Get started free
					</button>
				</div>
			</header>

			<div class="flex justify-center mt-40">
				<div
					id="typing-text"
					class="text-7xl text-gray-50 font-semibold text-nowrap z-[-1]"
					:class="{ fadeOut: fadingOut, fadeIn: fadingIn }">
					<span>
						{{ currentText }}
						<br />
					</span>
				</div>
			</div>
			<div class="flex items-center flex-col">
				<h1 class="text-primary-600 text-7xl font-semibold mt-4">#withMake</h1>
				<div class="max-w-[44rem] text-center mt-8">
					<p class="text-gray-50 text-lg font-light">
						From tasks and workflows to apps and systems, build and automate
						anything in one powerful visual platform.
					</p>
				</div>

				<button
					class="btn-cta px-20 py-4 rounded-md text-sm font-semibold mt-12 text-gray-50">
					Get started free
				</button>

				<div class="flex items-center gap-6 mt-6 text-gray-50">
					<div class="flex items-center gap-2">
						<UIcon name="i-heroicons-check" class="mt-.5" />
						<p>No credit card required</p>
					</div>
					<div class="flex items-center gap-2">
						<UIcon name="i-heroicons-check" class="mt-.5" />
						<p>No time limit on free plan</p>
					</div>
				</div>

				<div class="max-w-6xl">
					<video class="w-full h-full" autoplay loop muted playsinline>
						<source :src="vid" type="video/webm" />
					</video>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
	@keyframes gradientBGd {
		0% {
			background-position: 0 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0 50%;
		}
	}

	.hero-bg {
		position: fixed;
		inset: 0;
		z-index: 0;
		width: 100%;
		height: 100vh;
		background: #240342;
		background: linear-gradient(-250deg, #240342, #7c038e, #240342, #fe00fe);
		background-size: 400% 400%;
		animation: gradientBG 35s linear infinite;
		animation-direction: alternate;
	}

	.btn-cta {
		background: radial-gradient(
			100.03% 140.18% at 0 85.53%,
			#f0f 0,
			#6d00cc 95.31%
		);
	}

	/* #typing-text {
		font-family: Arial, sans-serif;
		font-size: 24px;
		border-right: 2px solid black;
		white-space: nowrap;
		overflow: hidden;
	} */

	.fadeOut {
		transition: opacity 0.2s ease-in-out;
		opacity: 0;
	}

	.fadeIn {
		transition: opacity 1s ease-in-out;
		opacity: 1;
	}
</style>
