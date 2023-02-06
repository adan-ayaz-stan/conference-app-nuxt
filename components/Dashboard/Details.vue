<script setup lang="ts">
	import { useDashComponentStore } from '~~/stores/useDashComponentStore';
	import { FullConference } from '~~/types';

	const { setDashComponentValue } = useDashComponentStore();

	defineProps<{
		conference: FullConference | undefined;
	}>();

	const cancelConference = () => {
		setDashComponentValue('dash');
	};

	const emit = defineEmits<{
		(e: 'editConferenceDetailsPage', value: FullConference | undefined): void;
	}>();

	function editHandler(conference: FullConference | undefined) {
		emit('editConferenceDetailsPage', conference);
	}
</script>

<template>
	<div>
		<div v-if="conference">
			<div class="my-10">
				<button
					class="absolute px-10 py-2 text-xs font-bold uppercase transition-all bg-transparent border-2 rounded-full hover:bg-white hover:text-black right-10 md:right-16 lg:right-28 xl:right-40 hover:border-white border-textGray"
					@click="editHandler(conference)"
					>Edit</button
				>
			</div>
			<div class="px-10 pt-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Title</span
				>
				<span class="text-textGray lg:text-lg">{{ conference.title }}</span>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Date</span
				>
				<span class="text-textGray lg:text-lg"
					>{{ conference.date.toDateString() }} |
					{{
						conference.date.toLocaleTimeString('en-US', { timeStyle: 'short' })
					}}</span
				>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Location</span
				>
				<span class="text-textGray lg:text-lg"> {{ conference.location }}</span>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Description</span
				>
				<span class="text-textGray lg:text-lg">
					{{ conference.description_full }}</span
				>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Total Seats</span
				>
				<span class="text-textGray lg:text-lg"> {{ conference.seats }}</span>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Available Seats</span
				>
				<span class="text-textGray lg:text-lg">
					{{ conference.seats - conference.people.length }}</span
				>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Available Seats</span
				>
				<span class="text-textGray lg:text-lg">
					{{ conference.seats - conference.people.length }}</span
				>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Objectives</span
				>
				<span
					v-for="(objective, index) in conference.description_points"
					:key="objective"
					class="text-textGray lg:text-lg">
					<br />
					<span class="pr-4 text-white">{{ index + 1 }})</span> {{ objective }}
				</span>
			</div>
			<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
				<span
					class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
					>Attendees Email</span
				>
				<span
					v-for="(people, index) in conference.people"
					:key="people"
					class="text-textGray lg:text-lg">
					<br />
					<span class="pr-4 text-white">{{ index + 1 }})</span> {{ people }}
				</span>
			</div>

			<div
				class="py-10 text-2xl text-center uppercase lg:py-20 md:text-3xl lg:text-4xl xl:text-5xl font-extralight"
				>Organizers</div
			>
			<div v-for="organizer in conference.organizers" :key="organizer.id">
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Name</span
					>
					<span class="text-textGray lg:text-lg"> {{ organizer.name }}</span>
				</div>
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Website</span
					>
					<span
						class="transition-all text-textGray lg:text-lg hover:cursor-pointer hover:text-white">
						<a target="_blank" :href="organizer.website">{{
							organizer.website
						}}</a>
					</span>
				</div>
				<div class="px-10 pb-20 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Logo</span
					>
					<span class="text-textGray lg:text-lg"
						><img
							class="h-8 grayscale"
							:src="organizer.logoUrl"
							:alt="organizer.name"
					/></span>
				</div>
			</div>
			<div
				class="py-10 text-2xl text-center uppercase lg:py-20 md:text-3xl lg:text-4xl xl:text-5xl font-extralight"
				>Speakers</div
			>
			<div v-for="speaker in conference.speakers" :key="speaker.id">
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Name</span
					>
					<span class="text-textGray lg:text-lg"> {{ speaker.name }}</span>
				</div>
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>About</span
					>
					<span class="text-textGray lg:text-lg"> {{ speaker.about }}</span>
				</div>
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Company</span
					>
					<span class="text-textGray lg:text-lg"> {{ speaker.company }}</span>
				</div>
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Position</span
					>
					<span class="text-textGray lg:text-lg"> {{ speaker.position }}</span>
				</div>
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Topic</span
					>
					<span class="text-textGray lg:text-lg">
						{{ speaker.Schedule?.topic }}</span
					>
				</div>
				<div class="px-10 pb-3 md:pb-4 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Time</span
					>
					<span class="text-textGray lg:text-lg"
						>{{ speaker.Schedule?.time.toDateString() }} |
						{{
							speaker.Schedule?.time.toLocaleTimeString('en-US', {
								timeStyle: 'short',
							})
						}}</span
					>
				</div>
				<div class="px-10 pb-20 md:px-20 lg:px-40 xl:px-60">
					<span
						class="pr-10 text-xs font-bold uppercase md:pr-12 lg:pr-20 xl:pr-28 lg:text-base"
						>Image</span
					>
					<span class="text-textGray lg:text-lg"
						><img
							class="h-40 grayscale"
							:src="speaker.imageUrl"
							:alt="speaker.name"
					/></span>
				</div>
			</div>
			<div class="px-[30%] pb-20 -mt-20">
				<FormKit
					type="button"
					class="mt-5"
					label="Done"
					@click="cancelConference"
					:classes="{
						outer: 'mb-5 mt-20 w-full',
						input: ` bg-appRed hover:bg-appRed/70 font-bold text-white font-inter w-full rounded-lg h-10`,
					}" />
			</div>
		</div>
	</div>
</template>
