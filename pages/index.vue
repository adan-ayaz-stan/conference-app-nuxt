<template>
	<div>
		<div class="min-h-screen text-xs md:text-sm lg:text-base 2xl:text-lg -z-40">
			<div>
				<HomeNav class="pt-6" />
			</div>
			<UICircle />
			<div class="absolute w-full px-8 top-[30%] md:px-12 xl:px-40 md:relative">
				<h1
					class="text-4xl font-thin md:text-7xl md:mt-56 md:ml-[5%] lg:ml-[10%] xl:ml-[10%]"
					>ORGANIZING<br />CONFERENCES<br />MADE EASY.</h1
				>
				<h2
					class="mt-8 mb-8 text-2xl text-right md:-mt-80 md:text-3xl font-extralight xl:mr-[10%] lg:mr-[7%] 2x:mr-[15%]"
					>Create And Organize<br />
					Your Conferences<br />
					In Minutes.</h2
				>
				<h3
					class="text-base font-light text-center md:ml-52 md:mt-72 md:text-xl xl:ml-60 xl:mt-80"
					>Personalized Theme,<br />
					Custom Homepage<br />
					And More.</h3
				>
				<div
					class="mt-8 text-center md:ml-96 md:text-xl md:-mt-36 xl:ml-[450px]">
					<UIButton bg="text-appRed font-bold text-base"
						>REGISTER <ArrowRight class="inline w-6 h-6 ml-2"
					/></UIButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import ArrowRight from '@/assets/icons/arrow-right.vue';

	definePageMeta({
		middleware: 'user-auth',
	});
</script>
