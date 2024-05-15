<script setup>
	import glassdoor from '@/assets/verticalStarRating.png';

	const items = ref([
		{
			id: 1,
			comment:
				'The simplicity, flexibility and ability to build real complex automations without any knowledge of programming makes it the best thing since sliced bread.',
			user_img: 'https://mighty.tools/mockmind-api/content/human/5.jpg',
			user_name: 'Erkki Markus',
			work: 'Product Owner at Smaily',
		},
		{
			id: 2,
			comment:
				'True citizen development in the entire company. Make is present in every department, empowering the company to offer a unique customer experience.',
			user_img: 'https://mighty.tools/mockmind-api/content/human/7.jpg',
			user_name: 'Andreas Stryz',
			work: 'CTO & Co-founder at FINN',
		},
		{
			id: 3,
			comment: `I can't count the number of hours I've saved by using Make. Every single day is simpler because of Make's automation.`,
			user_img: 'https://mighty.tools/mockmind-api/content/human/68.jpg',
			user_name: 'Kimberly D',
			work: 'Owner of Media Production',
		},
		{
			id: 4,
			comment: `Make really helped us to scale our operations, take the friction out of our processes, reduce costs, and relieved our support team. It is difficult to not become a fan.`,
			user_img: 'https://mighty.tools/mockmind-api/content/human/60.jpg',
			user_name: 'Philipp Weidenbach',
			work: 'Head of Operations at Teleclinic',
		},
		{
			id: 5,
			comment: `Make drives unprecedented efficiency within our business in ways we never imagined. It’s having an extra employee (or 10) for a fraction of the cost.`,
			user_img: 'https://mighty.tools/mockmind-api/content/human/41.jpg',
			user_name: 'Cayden Phipps',
			work: 'COO at Shop Accelerator Martech',
		},
	]);

	const scrollContainer = ref(null);

	const scrollRight = () => {
		if (scrollContainer.value) {
			scrollContainer.value.scrollLeft += 300; // Adjust the scroll amount as needed
		}
	};

	const scrollLeft = () => {
		if (scrollContainer.value) {
			scrollContainer.value.scrollLeft -= 300; // Adjust the scroll amount as needed
		}
	};
</script>

<template>
	<section class="relative pt-24 pb-24">
		<div class="flex flex-col items-center">
			<h2 class="text-gray-50 text-5xl font-bold">
				Trusted by 500,000+ Makers
			</h2>

			<div class="relative max-w-[65%]">
				<div
					class="grid grid-cols-[16rem_16rem_16rem_16rem_16rem] pb-8 px-16 mt-12 gap-x-12 overflow-x-hidden scroll-smooth"
					ref="scrollContainer">
					<div
						class="h-40 flex flex-col"
						v-for="(item, index) in items"
						:key="index">
						<p class="text-gray-50 font-light text-sm">"{{ item.comment }}"</p>

						<div class="flex items-center gap-5 mt-auto">
							<img class="w-10 h-10 rounded-full" :src="item.user_img" alt="" />
							<div>
								<p class="text-gray-50 font-light">{{ item.user_name }}</p>
								<p class="font-thin text-sm text-gray-50">{{ item.work }}</p>
							</div>
						</div>
					</div>
				</div>

				<button
					@click="scrollRight"
					class="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center">
					<UIcon name="i-heroicons-chevron-right" class="bg-gray-50 text-xl" />
				</button>
				<button
					@click="scrollLeft"
					class="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center">
					<UIcon name="i-heroicons-chevron-left" class="bg-gray-50 text-xl" />
				</button>
			</div>

			<div class="mt-16 flex flex-col items-center gap-8">
				<h2 class="text-gray-50 text-5xl font-bold">
					Work the way you imagine
				</h2>

				<button
					class="btn-cta px-20 py-4 rounded-md text-sm font-semibold text-gray-50">
					Get started free
				</button>
			</div>

			<div class="max-w-[65%] grid grid-cols-6 justify-items-end gap-x-8 mt-28">
				<div class="col-span-2">
					<p class="text-gray-50 font-light">Subscribe to news updates*</p>
					<input
						type="text"
						placeholder="Your email address"
						class="py-3.5 text-sm mt-2 w-full bg-primary-800 px-3 border border-gray-700 rounded-md" />

					<p class="text-xs text-gray-400 mt-6">
						* By submitting this form, you confirm that you agree to the storing
						and processing of your personal data as described in our Privacy
						Notice.
					</p>

					<button
						class="uppercase text-primary-500 flex items-end gap-1 font-medium mt-6">
						<span>subscribe</span>
						<UIcon name="i-heroicons-arrow-long-right" class="text-xs" />
					</button>
				</div>
				<div class="">
					<p class="text-[.8rem] capitalize text-gray-300 font-light">make</p>
					<ul class="text-gray-200 text-sm font-light mt-4 flex flex-col gap-3">
						<li>Product</li>
						<li>Apps</li>
						<li>Pricing</li>
						<li>Get demo</li>
						<li>Enterprise</li>
						<li>Status</li>
					</ul>
				</div>
				<div class="">
					<p class="text-[.8rem] capitalize text-gray-300 font-light">
						Solutions
					</p>
					<ul class="text-gray-200 text-sm font-light mt-4 flex flex-col gap-3">
						<li>Use cases</li>
						<li>Templates</li>
						<li>Partner directory</li>
						<li>API documentation</li>
						<li>Idea exchange</li>
					</ul>
				</div>
				<div class="">
					<p class="text-[.8rem] capitalize text-gray-300 font-light">
						Resources
					</p>
					<ul class="text-gray-200 text-sm font-light mt-4 flex flex-col gap-3">
						<li>Academy</li>
						<li>Community</li>
						<li>Documentation</li>
						<li>API documentation</li>
						<li>Blog</li>
						<li>Webinars</li>
						<li>Affiliate</li>
						<li>Partners</li>
						<li>Security</li>
						<li>On-prem agents</li>
					</ul>
				</div>
				<div class="">
					<p class="text-[.8rem] capitalize text-gray-300 font-light">
						Company
					</p>
					<ul class="text-gray-200 text-sm font-light mt-4 flex flex-col gap-3">
						<li>About</li>
						<li>Careers</li>
						<li>Contact us</li>
						<li>Press</li>
						<li>Terms & conditions</li>
						<li>Privacy notice</li>
						<li>Cookie notice</li>
						<li>Disclaimer</li>
						<li>Security</li>
						<li>Bug Bounty</li>
					</ul>
				</div>
			</div>

			<div class="w-[65%] flex justify-between items-center mt-20">
				<p class="font-light text-gray-50">
					© 2024 Celonis, Inc. All rights reserved.
				</p>

				<div class="flex items-center gap-8">
					<UIcon name="i-fa6-brands-facebook" class="text-2xl text-gray-50" />
					<UIcon name="i-fa6-brands-instagram" class="text-2xl text-gray-50" />
					<UIcon name="i-fa6-brands-twitter" class="text-2xl text-gray-50" />
					<UIcon name="i-fa6-brands-linkedin" class="text-2xl text-gray-50" />
					<UIcon name="i-fa6-brands-youtube" class="text-2xl text-gray-50" />
				</div>

				<div class="w-52">
					<img :src="glassdoor" alt="glassdoor-logo-with-rating" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.btn-cta {
		background: radial-gradient(
			100.03% 140.18% at 0 85.53%,
			#f0f 0,
			#6d00cc 95.31%
		);
	}
</style>
