<script setup>
	import marketing from '@/assets/Marketing.webp';
	import sales from '@/assets/Sales__2_.webp';
	import operations from '@/assets/Operations__2_.webp';
	import it from '@/assets/IT__2_.webp';
	import hr from '@/assets/image__39_.webp';

	// const scrollSection = ref(null);
	// let showScrollUpAnimation = false;
	// let prevScrollPosition = 0;

	// const handleScroll = () => {
	// 	const currentScrollPosition =
	// 		window.scrollY ||
	// 		window.pageYOffset ||
	// 		document.documentElement.scrollTop;

	// 	if (currentScrollPosition < prevScrollPosition) {
	// 		// User is scrolling up
	// 		showScrollUpAnimation = true;
	// 	} else {
	// 		// User is scrolling down
	// 		showScrollUpAnimation = false;
	// 	}

	// 	prevScrollPosition = currentScrollPosition;
	// };

	// onMounted(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// });

	// onUnmounted(() => {
	// 	window.removeEventListener('scroll', handleScroll);
	// });

	const scrollContainer = ref(null);

	const scrollRight = () => {
		if (scrollContainer.value) {
			scrollContainer.value.scrollLeft += 100; // Adjust the scroll amount as needed
		}
	};
</script>

<template>
	<section
		ref="scrollSection"
		:class="{ 'scroll-up-animation': showScrollUpAnimation }"
		class="scroll-up-section relative bg-primary-800 flex flex-col items-center pt-24 pb-16 transition-opacity duration-500 max-md:pt-20">
		<div class="w-[70%] px-16 max-2xl:w-[85%] max-xl:w-[90%] max-xl:px-0">
			<h2 class="text-gray-50 font-semibold text-5xl max-md:text-3xl">
				One platform. Unlimited possibilities for all.
			</h2>
			<div class="max-w-[50rem] mt-6">
				<p class="text-lg text-gray-300 font-light">
					Boost productivity across every area or team. Anyone can use Make to
					design powerful workflows without relying on developer resources.
				</p>
			</div>
		</div>

		<div class="relative max-w-[70%] max-2xl:max-w-[85%] max-xl:max-w-[90%]">
			<div
				class="grid grid-cols-[18rem_18rem_18rem_18rem_18rem] pb-8 px-16 mt-12 gap-x-6 overflow-x-scroll"
				ref="scrollContainer">
				<div class="bg-primary-700 rounded-md px-6 py-6">
					<img :src="marketing" alt="bulb-logo" />
					<h4 class="text-gray-50 font-light text-lg mt-5">Marketing</h4>
					<p class="text-gray-300 font-light mt-2">
						Drive high-quality leads and more inbound sourced revenue with
						effective lead generation.
					</p>
				</div>
				<div class="bg-primary-700 rounded-md px-6 py-6">
					<img :src="sales" alt="bulb-logo" />
					<h4 class="text-gray-50 font-light text-lg mt-5">Sales</h4>
					<p class="text-gray-300 font-light mt-2">
						Close more deals faster with automated lead routing and contract
						management.
					</p>
				</div>
				<div class="bg-primary-700 rounded-md px-6 py-6">
					<img :src="operations" alt="bulb-logo" />
					<h4 class="text-gray-50 font-light text-lg mt-5">Operations</h4>
					<p class="text-gray-300 font-light mt-2">
						Unify systems and share data across all tools to prevent errors and
						the loss of company data.
					</p>
				</div>
				<div class="bg-primary-700 rounded-md px-6 py-6">
					<img :src="it" alt="bulb-logo" />
					<h4 class="text-gray-50 font-light text-lg mt-5">IT</h4>
					<p class="text-gray-300 font-light mt-2">
						Avoid security breaches and minimize disruptions by identifying
						incidents immediately.
					</p>
				</div>
				<div class="bg-primary-700 rounded-md px-6 py-6">
					<img :src="hr" alt="bulb-logo" />
					<h4 class="text-gray-50 font-light text-lg mt-5">HR</h4>
					<p class="text-gray-300 font-light mt-2">
						Provide a seamless onboarding experience and place skilled
						candidates faster.
					</p>
				</div>
			</div>

			<button
				@click="scrollRight"
				class="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center max-[420px]:hidden">
				<UIcon name="i-heroicons-chevron-right" class="bg-gray-800 text-xl" />
			</button>
		</div>
	</section>
</template>

<style scoped>
	.scroll-up-animation {
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
	}

	.scroll-up-animation.hidden {
		opacity: 0;
	}
</style>
