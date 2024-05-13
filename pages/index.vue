<script setup>
	import finn from '@/assets/Finn.webp';
	import franklin from '@/assets/FranklinCovey.webp';
	import gojob from '@/assets/GoJob.webp';
	import spotify from '@/assets/Spotify.webp';
	import personio from '@/assets/Personio.webp';
	import meta from '@/assets/Meta.webp';

	import play from '@/assets/play.webp';
</script>

<template>
	<main>
		<Hero />

		<section class="relative bg-white">
			<div class="flex flex-col items-center justify-center pt-16 pb-20 gap-8">
				<p class="text-2xl font-light">
					Trusted by thousands of fast-scaling organizations around the globe
				</p>

				<div class="flex items-center gap-14">
					<img :src="personio" alt="" class="w-16" />
					<img :src="spotify" alt="" class="w-20" />
					<img :src="finn" alt="" class="w-14" />
					<img :src="gojob" alt="" class="w-12" />
					<img :src="meta" alt="" class="w-20" />
					<img :src="franklin" alt="" class="w-24" />
				</div>
			</div>
		</section>

		<section
			class="relative bg-[#f5f0f0] flex flex-col items-center pt-16 pb-20">
			<h2 class="text-gray-800 font-semibold text-5xl">
				More than no-code workflow automation
			</h2>

			<div class="max-w-4xl text-center mt-8">
				<p class="text-lg font-light">
					Traditional no-code iPaaS platforms are linear and non-intuitive. Make
					allows you to visually create, build, and automate without limits.
				</p>
			</div>

			<div class="mt-8">
				<img class="w-[46rem]" :src="play" alt="" />
			</div>

			<div class="flex items-center gap-8 font-light mt-6">
				<span>Replaces:</span>
				<div class="flex gap-2">
					<div class="px-3 py-1.5 bg-white rounded-full">Zapier</div>
					<div class="px-3 py-1.5 bg-white rounded-full">Warkato</div>
					<div class="px-3 py-1.5 bg-white rounded-full">Tray.io</div>
				</div>
			</div>
		</section>
	</main>
</template>
