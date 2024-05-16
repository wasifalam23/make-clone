<script setup>
	import finn from '@/assets/Finn.webp';
	import franklin from '@/assets/FranklinCovey.webp';
	import gojob from '@/assets/GoJob.webp';
	import spotify from '@/assets/Spotify.webp';
	import personio from '@/assets/Personio.webp';
	import meta from '@/assets/Meta.webp';
	import play from '@/assets/play.webp';
	import webinar from '@/assets/image__20_.webp';
	import template from '@/assets/image__23_.webp';
</script>

<template>
	<main>
		<Hero />

		<section class="relative bg-white">
			<div
				class="flex flex-col items-center justify-center pt-16 pb-20 px-8 gap-8">
				<p class="text-2xl font-light max-md:text-xl text-center">
					Trusted by thousands of fast-scaling organizations around the globe
				</p>

				<div
					class="flex items-center gap-14 flex-wrap content-center justify-center">
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
			class="relative bg-primary-100 flex flex-col items-center pt-16 pb-20 px-8">
			<h2
				class="text-gray-800 font-semibold text-5xl max-md:text-3xl text-center">
				More than no-code workflow automation
			</h2>

			<div class="max-w-4xl text-center mt-8 max-md:mt-6">
				<p class="text-lg font-light max-md:text-base">
					Traditional no-code iPaaS platforms are linear and non-intuitive. Make
					allows you to visually create, build, and automate without limits.
				</p>
			</div>

			<div class="mt-8">
				<img class="w-[46rem]" :src="play" alt="" />
			</div>

			<div
				class="flex items-center gap-2 font-light mt-6 max-md:justify-between max-md:w-full">
				<span class="mr-4">Replaces:</span>

				<div class="px-3 py-1.5 bg-white rounded-full">Zapier</div>
				<div class="px-3 py-1.5 bg-white rounded-full">Warkato</div>
				<div class="px-3 py-1.5 bg-white rounded-full">Tray.io</div>
			</div>
		</section>

		<Features />

		<section
			class="relative bg-primary-100 pt-16 pb-20 px-8 max-md:pt-20 max-md:pb-14">
			<div
				class="grid grid-cols-[55fr_45fr] max-md:grid-cols-1 gap-x-14 max-md:gap-y-10 items-center max-w-[75rem] mx-auto">
				<div class="max-md:order-last">
					<img :src="webinar" alt="webinar" />
				</div>

				<div class="flex flex-col gap-6 max-md:order-first">
					<h2 class="text-5xl font-bold max-md:text-3xl">
						Automate your work. Build something new.
					</h2>
					<p class="text-lg font-light pr-8">
						Just drag and drop apps to automate existing workflows or build new
						complex processes. Solve problems across all areas and teams.
					</p>

					<button
						class="uppercase text-primary-500 flex items-end gap-1 font-medium">
						<span>get started</span>
						<UIcon name="i-heroicons-arrow-long-right" class="text-xs" />
					</button>
				</div>
			</div>
		</section>

		<section class="relative bg-white pt-16 pb-20 px-8 max-md:pb-14">
			<div
				class="grid grid-cols-[45fr_55fr] max-md:grid-cols-1 gap-x-14 max-md:gap-y-10 items-center max-w-[75rem] mx-auto">
				<div class="flex flex-col gap-6">
					<h2 class="text-5xl font-bold max-md:text-3xl">
						Start with a template
					</h2>
					<p class="text-lg font-light pr-8 w-[95%]">
						Get inspired by thousands of free workflow automation templates.
						Customize them to match your ideal workflows.
					</p>

					<button
						class="uppercase text-primary-500 flex items-end gap-1 font-medium">
						<span>choose a template</span>
						<UIcon name="i-heroicons-arrow-long-right" class="text-xs" />
					</button>
				</div>

				<div>
					<img :src="template" alt="webinar" />
				</div>
			</div>
		</section>

		<Footer />
	</main>
</template>
