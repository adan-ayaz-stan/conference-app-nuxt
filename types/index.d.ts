import { Conference, Organizer, Speaker, Schedule } from '.prisma/client';

export interface OrganizerData {
	website: string;
	name: string;
	logo: string;
}

export interface ConferenceData {
	title: string;
	date: Date;
	location: string;
	description_points: string;
	description_full: string;
	seats: number;
}

export type FullConference = Conference & {
	organizers: Organizer[];
	speakers: (Speaker & {
		Schedule: Schedule | null;
	})[];
};
