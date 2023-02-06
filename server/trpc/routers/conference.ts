import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

export const conferenceRouter = router({
	postConference: publicProcedure
		.input(
			z.object({
				userId: z.string().uuid(),
				title: z.string(),
				date: z.string().datetime(),
				location: z.string(),
				description_points: z.array(z.string()),
				description_full: z.string(),
				seats: z.number(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const conference = await ctx.prisma.conference.create({
				data: {
					...input,
				},
			});

			return conference;
		}),

	getSingleConference: publicProcedure
		.input(
			z.object({
				conferenceId: z.string().uuid(),
			}),
		)
		.query(async ({ input, ctx }) => {
			const isConference = await ctx.prisma.conference.findUnique({
				where: {
					id: input.conferenceId,
				},
				include: {
					organizers: true,
					speakers: {
						include: {
							Schedule: true,
						},
					},
				},
			});

			return isConference;
		}),

	getAllConferences: publicProcedure
		.input(
			z.object({
				userId: z.string().uuid(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const allConferences = await ctx.prisma.conference.findMany({
				where: {
					userId: input.userId,
				},
				include: {
					organizers: true,
					speakers: {
						include: {
							Schedule: true,
						},
					},
				},
			});

			return allConferences;
		}),

	deleteConference: publicProcedure
		.input(
			z.object({
				id: z.string().uuid(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			await ctx.prisma.conference.delete({
				where: {
					id: input.id,
				},
			});

			return true;
		}),

	updateConference: publicProcedure
		.input(
			z.object({
				id: z.string().uuid(),
				title: z.string().optional(),
				date: z.string().datetime().optional(),
				location: z.string().optional(),
				description_points: z.array(z.string()).optional(),
				description_full: z.string().optional(),
				seats: z.number().optional(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const updatedConferece = await ctx.prisma.conference.update({
				where: {
					id: input.id,
				},
				data: {
					title: input.title,
					date: input.date,
					location: input.location,
					description_full: input.description_full,
					description_points: input.description_points,
					seats: input.seats,
				},
			});

			return updatedConferece;
		}),

	addPerson: publicProcedure
		.input(
			z.object({
				id: z.string().uuid(),
				person: z.string().email(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const addedPerson = await ctx.prisma.conference.update({
				where: {
					id: input.id,
				},
				data: {
					people: {
						push: input.person,
					},
				},
			});

			return addedPerson;
		}),

	getAllConferencesWithId: publicProcedure.query(async ({ ctx }) => {
		const allConferences = await ctx.prisma.conference.findMany({
			select: {
				id: true,
			},
		});
		return allConferences;
	}),
});
