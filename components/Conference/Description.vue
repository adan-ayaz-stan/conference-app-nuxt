<script setup lang="ts">
	const props = defineProps<{
		description_full: string;
	}>();
</script>

<template>
	<div>
		<div
			class="px-20 text-center text-textGray md:px-40 lg:px-60 xl:px-80 py-52"
			>{{ props.description_full }}</div
		>
	</div>
</template>
