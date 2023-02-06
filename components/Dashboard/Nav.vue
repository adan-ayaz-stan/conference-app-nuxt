<template>
	<div>
		<nav
			class="sticky flex items-center justify-between px-8 bg-transparent lg:px-28 lg:h-28 h-14">
			<h3
				@click="setDashComponentValue('dash')"
				class="text-sm font-bold lg:text-xl hover:cursor-pointer"
				>Dashboard</h3
			>
			<div>
				<button
					:disabled="isLoading"
					@click="setDashComponentValue('create')"
					class="px-4 py-2 mr-2 text-xs font-bold text-black bg-white rounded-full lg:text-sm hover:cursor-pointer hover:bg-white/80"
					:class="isLoading ? 'hover:cursor-not-allowed bg-white/80' : ''"
					>Create</button
				>
				<button
					@click="logoutUser"
					:disabled="isLoading"
					class="px-4 py-2 text-xs font-bold rounded-full lg:text-sm hover:cursor-pointer hover:bg-appRed/80 bg-appRed"
					:class="isLoading ? 'hover:cursor-not-allowed bg-appRed/80' : ''"
					>Logout</button
				>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
	import { useDashComponentStore } from '~~/stores/useDashComponentStore';

	const client = useSupabaseAuthClient();
	let isLoading = $ref(false);
	let { setDashComponentValue } = $(useDashComponentStore());

	const logoutUser = () => {
		isLoading = true;
		client.auth.signOut();
		isLoading = false;
		navigateTo('/signup');
	};
</script>
