<script setup lang="ts">
	import { Organizer } from '.prisma/client';

	const props = defineProps<{
		organizers: Organizer[];
	}>();
</script>

<template>
	<div>
		<div class="pb-40">
			<h3
				class="pb-40 text-4xl font-thin text-center md:text-5xl lg:text-6xl xl:text-7xl"
				>Organizers</h3
			>
			<div
				class="grid grid-cols-2 gap-20 px-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
				<div v-for="org in props.organizers" :key="org.id">
					<img
						class="h-8 bg-cover grayscale"
						:src="org.logoUrl"
						:alt="org.name" />
				</div>
			</div>
		</div>
	</div>
</template>
