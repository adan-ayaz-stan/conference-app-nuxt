import { defineStore } from 'pinia';
import { FullConference } from '~~/types';

export const useConferenceStore = defineStore('conference', () => {
	const { $client } = useNuxtApp();
	let allConferences = $ref<FullConference[]>();

	async function fetchAllConferences(userId: string) {
		const conferences = await $client.conference.getAllConferences.query({
			userId,
		});
		allConferences = conferences;
		return conferences;
	}

	const getAllConferences = computed(() => allConferences);

	return $$({
		fetchAllConferences,
		getAllConferences,
	});
});
