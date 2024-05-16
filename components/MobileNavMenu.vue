<script setup></script>

<template>
	<nav
		class="fixed top-20 hidden max-lg:block inset-0 w-full h-full bg-white overflow-y-scroll text-gray-800 pt-14 px-10 pb-24">
		<div class="">
			<ul class="flex flex-col gap-6">
				<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
					<div class="font-thin uppercase text-sm">Product</div>
					<ul class="flex flex-col gap-3">
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-bolt" class="text-2xl" />
							<span class="font-light">Platform</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-plus-circle" class="text-2xl" />
							<span class="font-light">Apps & services</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-globe-europe-africa" class="text-2xl" />
							<span class="font-light">EnterPrise</span>
						</li>
					</ul>
				</li>
				<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
					<div class="font-thin uppercase text-sm">solutions</div>
					<h4 class="font-semibold">Make across your business</h4>
					<ul class="grid grid-cols-2 gap-y-4 max-sm:grid-cols-1">
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-megaphone" class="text-2xl" />
							<span class="font-light capitalize">Marketing</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon
								name="i-heroicons-presentation-chart-line"
								class="text-2xl" />
							<span class="font-light capitalize">Sales</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon
								name="i-heroicons-check-badge

"
								class="text-2xl" />
							<span class="font-light capitalize">Operations</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-microphone" class="text-2xl" />
							<span class="font-light capitalize">customer experience</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-beaker" class="text-2xl" />
							<span class="font-light capitalize">Finance</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon
								name="i-heroicons-adjustments-horizontal"
								class="text-2xl" />
							<span class="font-light capitalize">Information technology</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-user-group" class="text-2xl" />
							<span class="font-light capitalize">People</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-pencil" class="text-2xl" />
							<span class="font-light capitalize">Workplace productivity</span>
						</li>
					</ul>
					<h4 class="font-semibold mt-2">Inspiration</h4>
					<ul class="grid grid-cols-2 gap-y-4 max-sm:grid-cols-1">
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-view-columns" class="text-2xl" />
							<span class="font-light capitalize">Templates</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-book-open" class="text-2xl" />
							<span class="font-light capitalize">Blog</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-academic-cap" class="text-2xl" />
							<span class="font-light capitalize">Make Academy</span>
						</li>
					</ul>
				</li>

				<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
					<div class="font-thin uppercase text-sm">pricing</div>
					<ul class="flex flex-col gap-3">
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-credit-card" class="text-2xl" />
							<span class="font-light capitalize">pricing</span>
						</li>
					</ul>
				</li>

				<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
					<div class="font-thin uppercase text-sm">pricing</div>
					<ul class="flex flex-col gap-3">
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-book-open" class="text-2xl" />
							<span class="font-light capitalize">blog</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon
								name="i-heroicons-chat-bubble-oval-left"
								class="text-2xl" />
							<span class="font-light capitalize">community</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon
								name="i-heroicons-chat-bubble-bottom-center-text"
								class="text-2xl" />
							<span class="font-light capitalize">help</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-academic-cap" class="text-2xl" />
							<span class="font-light capitalize">make academy</span>
						</li>
					</ul>
				</li>
				<li class="flex flex-col gap-4 border-b pb-6 border-b-gray-400">
					<div class="font-thin uppercase text-sm">partners</div>
					<ul class="flex flex-col gap-3">
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-window" class="text-2xl" />
							<span class="font-light">Find a partner</span>
						</li>
						<li class="flex items-center gap-4">
							<UIcon name="i-heroicons-users" class="text-2xl" />
							<span class="font-light">Become a partner</span>
						</li>
					</ul>
				</li>
			</ul>

			<div class="mt-8 flex flex-col gap-5">
				<button
					class="py-3 border border-primary-500 rounded-md w-full text-primary-500 font-medium">
					Log in
				</button>
				<button
					class="btn-cta text-white py-3.5 border rounded-md w-full font-medium">
					Get started free
				</button>
				<button class="underline text-sm font-light">
					Legacy (Integromat)
				</button>
			</div>
		</div>
	</nav>
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
