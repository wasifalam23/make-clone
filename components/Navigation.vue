<script setup>
	const dropdownVisible = ref({});

	let hideTimer = null;

	const showDropdown = (index) => {
		dropdownVisible.value[index] = true;
	};

	const hideDropdown = (index) => {
		dropdownVisible.value[index] = false;
	};

	const startHideTimer = (index) => {
		hideTimer = setTimeout(() => {
			hideDropdown(index);
		}, 150); // Adjust the delay as needed
	};

	const cancelHideTimer = (index) => {
		clearTimeout(hideTimer);
	};
</script>

<template>
	<nav class="ml-32 max-lg:hidden">
		<ul class="flex gap-12 max-xl:gap-8">
			<li class="relative text-sm cursor-pointer">
				<div
					@mouseover="showDropdown(1)"
					@mouseleave="startHideTimer(1)"
					class="flex items-center gap-1">
					<span :class="{ 'opacity-50': dropdownVisible[1] }">Product</span>
					<UIcon
						v-if="dropdownVisible[1]"
						name="i-heroicons-chevron-up"
						class="mt-.5 opacity-50" />
					<UIcon v-else name="i-heroicons-chevron-down" class="mt-.5" />
				</div>

				<ul
					v-show="dropdownVisible[1]"
					@mouseover="cancelHideTimer(1)"
					@mouseleave="hideDropdown(1)"
					class="absolute shadow-md border border-primary-500 top-14 w-64 py-6 -translate-x-1/2 rounded-md bg-white text-gray-800 px-6 flex flex-col gap-8">
					<li class="flex items-center gap-6">
						<UIcon name="i-heroicons-bolt" class="w-7 h-7" />
						<div class="flex flex-col">
							<span class="font-semibold">Platform</span>
							<span class="font-light text-[.8rem]"
								>Discover how make works.</span
							>
						</div>
					</li>
					<li class="flex items-center gap-6">
						<UIcon name="i-heroicons-plus-circle" class="w-7 h-7" />
						<div class="flex flex-col">
							<span class="font-semibold">Apps & services</span>
							<span class="font-light text-[.8rem]">Connect anything!</span>
						</div>
					</li>
					<li class="flex items-center gap-6">
						<UIcon name="i-heroicons-globe-europe-africa" class="w-10 h-10" />
						<div class="flex flex-col">
							<span class="font-semibold">EnterPrise</span>
							<span class="font-light text-[.8rem]"
								>Ready to scale even faster? Learn more.</span
							>
						</div>
					</li>
				</ul>
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

			<li class="relative text-sm cursor-pointer">
				<div
					@mouseover="showDropdown(4)"
					@mouseleave="startHideTimer(4)"
					class="flex items-center gap-1">
					<span :class="{ 'opacity-50': dropdownVisible[4] }">Partners</span>
					<UIcon
						v-if="dropdownVisible[4]"
						name="i-heroicons-chevron-up"
						class="mt-.5 opacity-50" />
					<UIcon v-else name="i-heroicons-chevron-down" class="mt-.5" />
				</div>

				<ul
					v-show="dropdownVisible[4]"
					@mouseover="cancelHideTimer(4)"
					@mouseleave="hideDropdown(4)"
					class="absolute shadow-md border border-primary-500 top-16 w-64 py-6 -translate-x-1/2 rounded-md bg-white text-gray-800 px-6 flex flex-col gap-8">
					<li class="flex items-center gap-6">
						<UIcon name="i-heroicons-window" class="w-14 h-14" />
						<div class="flex flex-col">
							<span class="font-semibold">Find a partner</span>
							<span class="font-light text-[.8rem]"
								>Find the perfect partner to support your business needs.</span
							>
						</div>
					</li>
					<li class="flex items-center gap-6">
						<UIcon name="i-heroicons-users" class="w-14 h-14" />
						<div class="flex flex-col">
							<span class="font-semibold">Become a partner</span>
							<span class="font-light text-[.8rem]"
								>Help your customers automate anything with Make.</span
							>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>
