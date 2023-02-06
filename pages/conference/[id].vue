<script setup lang="ts">
	import { FullConference } from '~~/types';
	import AOS from 'aos';

	onMounted(() => {
		AOS.init();
	});

	const { $client } = useNuxtApp();
	let conference = $ref<FullConference>();
	const route = useRoute();
	const singleConference = await $client.conference.getSingleConference.query({
		conferenceId: route.params.id as string,
	});
	if (singleConference) {
		conference = singleConference;
	}
</script>

<template>
	<div>
		<div class="min-h-screen md:h-full" v-if="conference">
			<ConferenceHeader
				data-aos="fade-down"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				:title="conference?.title"
				:date="conference?.date"
				:location="conference.location" />
			<ConferenceDescriptionPoints
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				:description_points="conference.description_points" />
			<ConferenceDescription
				data-aos="fade-down"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				:description_full="conference.description_full" />
			<ConferenceSpeakers
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				:speakers="conference.speakers" />
			<ConferenceProgram
				data-aos="fade-down"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				:program="conference.speakers" />
			<ConferenceOrganizers
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				:organizers="conference.organizers" />
			<ConferenceRegistration
				data-aos="fade-down"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				:id="conference.id" />
			<ConferenceFooter
				:name="conference.title"
				:year="conference.date.getFullYear()" />
		</div>
	</div>
</template>
