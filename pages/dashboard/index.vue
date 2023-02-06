<template>
	<div>
		<div>
			<DashboardNav />
			<h1 class="mt-10 text-2xl font-bold text-center">{{ title }}</h1>
			<Transition name="fade">
				<div v-if="getDashComponentValue === 'create'">
					<DashboardCreate />
				</div>
				<div v-else-if="getDashComponentValue === 'edit'"
					><DashboardEdit :conference="conferenceEditValue"
				/></div>
				<div v-else-if="getDashComponentValue === 'details'"
					><DashboardDetails
						@edit-conference-details-page="editConferenceHandler"
						:conference="conferenceEditValue"
				/></div>
				<div v-else>
					<DashboardDash
						@edit-conference="editConferenceHandler"
						@detail-conference="detailConferenceHandler" />
				</div>
			</Transition>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useDashComponentStore } from '~~/stores/useDashComponentStore';
	import { FullConference } from '~~/types';

	const { getDashComponentValue, setDashComponentValue } = $(
		useDashComponentStore(),
	);
	let conferenceEditValue = $ref<FullConference>();

	const title = $computed(() => {
		if (getDashComponentValue === 'create') {
			return 'Create Conference';
		} else if (getDashComponentValue === 'edit') {
			return 'Edit Conference';
		} else if (getDashComponentValue === 'details') {
			return 'Conference Details';
		} else {
			return 'All Conferences';
		}
	});

	function editConferenceHandler(value: FullConference | undefined) {
		conferenceEditValue = value;
		setDashComponentValue('edit');
	}

	function detailConferenceHandler(value: FullConference | undefined) {
		conferenceEditValue = value;
		setDashComponentValue('details');
	}

	definePageMeta({
		middleware: 'user-auth',
	});
</script>
