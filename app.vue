<template>
	<NuxtPage
		:transition="{
			name: 'fade',
			mode: 'out-in',
		}" />
</template>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
