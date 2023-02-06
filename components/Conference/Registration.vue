<script setup lang="ts">
	let email = $ref<string>('');
	const { $client } = useNuxtApp();
	let isAdded = $ref<boolean>(false);

	const props = defineProps<{
		id: string;
	}>();

	function emailFocus() {
		isAdded = false;
		email = '';
	}

	async function submitPerson() {
		if (props.id) {
			await $client.conference.addPerson.mutate({
				id: props.id,
				person: email,
			});
			isAdded = true;
		}
	}
</script>

<template>
	<div>
		<div class="pb-60">
			<h3
				class="text-4xl font-thin text-center pb-60 md:text-5xl lg:text-6xl xl:text-7xl"
				>Register</h3
			>
			<div>
				<form class="px-10" @submit.prevent="submitPerson">
					<input
						class="block w-full px-5 py-3 text-white bg-transparent border-2 rounded-full md:inline md:w-1/2 border-appRed placeholder:text-textGray"
						type="email"
						@focus="emailFocus"
						v-model="email"
						placeholder="email@address.com" />
					<button
						class="block w-full px-5 py-3 mt-2 font-bold uppercase transition-all border-2 rounded-full md:inline md:mt-0 md:w-1/2 md:-translate-x-16 hover:bg-red-600 bg-appRed border-appRed"
						type="submit"
						>{{ isAdded ? 'Email Added!' : 'Register' }}</button
					>
				</form>
			</div>
		</div>
	</div>
</template>
