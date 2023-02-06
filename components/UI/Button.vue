<template>
	<NuxtLink
		to="/signup"
		:class="`px-4 py-1 transition-all md:px-5 lg:px-6 xl:px-8 hover:cursor-pointer hover:opacity-75 ${props.bg}`">
		<slot
	/></NuxtLink>
</template>

<script setup lang="ts">
	const props = defineProps<{
		bg?: string;
	}>();
</script>
