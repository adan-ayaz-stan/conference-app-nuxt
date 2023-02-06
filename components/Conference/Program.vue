<script setup lang="ts">
	import { Schedule, Speaker } from '@prisma/client';

	const props = defineProps<{
		program: (Speaker & {
			Schedule: Schedule | null;
		})[];
	}>();
</script>

<template>
	<div>
		<div class="pb-40">
			<h3
				class="pb-40 text-4xl font-thin text-center md:text-5xl lg:text-6xl xl:text-7xl"
				>Program</h3
			>
			<div class="px-10 md:px-20 lg:px-40 xl:px-60">
				<div
					class="grid grid-cols-5 gap-3 py-6 transition-all border-b-2 hover:bg-appRed border-textGray"
					v-for="prog in props.program"
					:key="prog.id">
					<p class="col-span-1 px-4">{{
						prog.Schedule?.time.toLocaleString('en-US', {
							timeStyle: 'short',
						})
					}}</p>
					<div class="col-span-4">
						<h4 class="text-xs font-bold uppercase lg:text-sm">{{
							prog.name
						}}</h4>
						<p class="pt-2 text-textGray">"{{ prog.Schedule?.topic }}"</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
