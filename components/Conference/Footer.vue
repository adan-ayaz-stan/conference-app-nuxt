<script setup lang="ts">
	const props = defineProps<{
		name: string;
		year: number;
	}>();
</script>

<template>
	<div>
		<div class="flex justify-between px-10 py-10">
			<span>&#169;{{ props.year }}</span>
			<span>{{ props.name }}</span>
		</div>
	</div>
</template>
