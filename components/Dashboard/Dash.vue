<template>
	<div class="h-screen">
		<div
			v-if="allConferences && allConferences.length !== 0"
			class="p-6 overflow-auto">
			<table class="table w-full table-zebra">
				<thead>
					<tr>
						<th></th>
						<th>Conference</th>
						<th>Website</th>
						<th>Details</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(conference, index) in allConferences"
						:key="conference.id">
						<th>{{ index + 1 }}</th>
						<td>{{ conference.title }}</td>
						<td
							><RouterLink
								:to="`conference/${conference.id}`"
								target="_blank"
								class="hover:underline hover:cursor-pointer"
								>{{ `${conference.id}` }}</RouterLink
							></td
						>
						<td
							><DetailsIcon
								@click="detailsHandler(conference)"
								class="w-5 h-5 hover:cursor-pointer hover:opacity-75"
						/></td>
						<td
							><EditIcon
								@click="editHandler(conference)"
								class="w-5 h-5 hover:cursor-pointer hover:opacity-75"
						/></td>
						<td
							><DeleteIcon
								class="w-5 h-5 hover:cursor-pointer hover:opacity-75"
								@click="deleteConference(conference)"
						/></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else class="mt-20 text-2xl text-center font-extralight"
			>No Conferences for this user</div
		>
	</div>
</template>

<script setup lang="ts">
	import { useConferenceStore } from '~~/stores/useConferenceStore';
	import { FullConference } from '../../types/index.d';
	import EditIcon from '~~/assets/icons/edit.vue';
	import DeleteIcon from '~~/assets/icons/delete.vue';
	import DetailsIcon from '~~/assets/icons/details.vue';

	const user = useSupabaseUser();
	const client = useSupabaseClient();
	const { $client } = useNuxtApp();

	const emit = defineEmits<{
		(e: 'editConference', value: FullConference): void;
		(e: 'detailConference', value: FullConference): void;
	}>();

	let allConferences = $ref<FullConference[]>();
	const { fetchAllConferences } = useConferenceStore();

	function editHandler(conference: FullConference) {
		emit('editConference', conference);
	}

	function detailsHandler(conference: FullConference) {
		emit('detailConference', conference);
	}

	async function deleteConference(conference: FullConference) {
		const removedConference = await $client.conference.deleteConference.mutate({
			id: conference.id,
		});
		if (removedConference) {
			conference.organizers.forEach(async org => {
				await client.storage.from('conference').remove([org.logo]);
			});
			conference.speakers.forEach(async speaker => {
				await client.storage.from('conference').remove([speaker.image]);
			});
			if (!user.value) {
				return;
			}
			allConferences = await fetchAllConferences(user.value.id);
		}
	}

	onMounted(async () => {
		if (!user.value) {
			return;
		}
		allConferences = await fetchAllConferences(user.value.id);
	});
</script>
