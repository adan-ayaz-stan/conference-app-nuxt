<script setup lang="ts">
	import { Speaker } from '.prisma/client';

	const props = defineProps<{
		speakers: Speaker[];
	}>();
</script>

<template>
	<div>
		<div class="pb-40">
			<h3
				class="pb-40 text-4xl font-thin text-center md:text-5xl lg:text-6xl xl:text-7xl"
				>Speakers</h3
			>
			<div
				class="flex flex-col flex-wrap items-center justify-center md:flex-row md:justify-start md:px-20">
				<div v-for="speaker in props.speakers" :key="speaker.id">
					<div class="group pb-5 h-96 w-72 [perspective:1000px] md:px-2">
						<div
							class="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
							<div class="absolute inset-0">
								<img
									class="object-cover w-full h-full"
									:src="speaker.imageUrl"
									:alt="speaker.name" />
							</div>
							<div
								class="absolute p-5 inset-0 h-full w-full bg-appRed text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
								<div class="min-h-full">
									<h1 class="text-xs font-bold uppercase">{{
										speaker.name
									}}</h1>
									<p class="pt-2 text-sm font-extralight">{{
										speaker.position
									}}</p>
									<p class="text-sm font-extralight"
										>at {{ speaker.company }}</p
									>
									<p class="pt-6 text-base">"{{ speaker.about }}"</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
