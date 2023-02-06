<template>
	<div>
		<div class="md:grid md:grid-cols-2">
			<div class="md:container md:h-full md:bg-[#0c0c0c]">
				<FormSignup />
			</div>
			<div
				class="absolute md:container md:h-full md:flex md:justify-center md:items-center top-8 left-2/4 -translate-x-2/4 md:relative md:top-0">
				<div
					@click="$router.push('/')"
					class="relative w-24 h-24 rounded-full cursor-pointer bg-appRed">
					<div
						class="absolute w-28 bg-black/60 filter backdrop-blur-sm h-14 top-2/4"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: 'user-auth',
	});
</script>
