<script setup lang="ts">
	const props = defineProps<{
		title: string;
		date: Date;
		location: string;
	}>();
</script>

<template>
	<div class="min-h-screen text-xs md:text-sm lg:text-base 2xl:text-lg">
		<UICircle />
		<div class="absolute w-full px-10 top-[30%] md:px-12 xl:px-40 md:relative">
			<h1
				class="text-4xl font-thin pt-24 md:text-7xl md:pt-56 lg:text-8xl xl:text-9xl md:ml-[5%] lg:ml-[10%] xl:ml-[10%]"
				>{{ props.title }}</h1
			>
			<h2
				class="mb-8 md:pt-8 text-2xl md:px-20 lg:text-4xl xl:text-5xl text-right md:text-3xl font-extralight xl:mr-[10%] lg:mr-[7%] 2x:mr-[15%]"
				>{{ props.date.getFullYear() }}.{{
					props.date.toLocaleString('en-US', { month: 'long' })
				}}<br />{{
					props.date.toLocaleString('en-US', {
						timeStyle: 'short',
					})
				}}<h3
					class="mt-2 text-base md:mt-4 lg:mt-8 md:text-lg lg:text-xl xl:text-2xl"
					>{{ props.location }}</h3
				></h2
			>
			<!-- <h3
				class="text-base font-light text-center md:ml-96 md:text-xl xl:ml-60 xl:pt-80"
				>{{ props.location }}</h3
			> -->
		</div>
	</div>
</template>
