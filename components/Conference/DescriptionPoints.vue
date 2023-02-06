<script setup lang="ts">
	const props = defineProps<{
		description_points: string[];
	}>();
</script>

<template>
	<div>
		<div
			class="flex flex-col items-center justify-center px-8 -mt-40 xl:-mt-10">
			<div class="md:flex-row md:flex">
				<div
					v-for="(desc, index) in props.description_points"
					:key="index"
					class="grid grid-cols-5 gap-6 pt-3 md:border md:border-textGray md:mx-5 md:py-6 md:px-10 md:gap-1 md:grid-cols-1 rounded-xl"
					><span class="col-span-1 font-bold">0{{ index + 1 }}</span
					><p class="col-span-4 font-light text-textGray">{{ desc }}</p></div
				>
			</div>
		</div>
	</div>
</template>
