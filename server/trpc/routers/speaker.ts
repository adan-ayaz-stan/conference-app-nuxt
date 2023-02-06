import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const speakerRouter = router({
	postSpeaker: publicProcedure
		.input(
			z.object({
				name: z.string(),
				image: z.string(),
				imageUrl: z.string(),
				position: z.string(),
				about: z.string(),
				company: z.string(),
				conferenceId: z.string().uuid(),
				time: z.string().datetime(),
				topic: z.string(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const newSpeaker = ctx.prisma.speaker.create({
				data: {
					name: input.name,
					image: input.image,
					imageUrl: input.imageUrl,
					position: input.position,
					about: input.about,
					company: input.company,
					conferenceId: input.conferenceId,
					Schedule: {
						create: {
							time: input.time,
							topic: input.topic,
						},
					},
				},
			});
			return newSpeaker;
		}),

	getAllSpeaker: publicProcedure
		.input(
			z.object({
				conferenceId: z.string().uuid(),
			}),
		)
		.query(async ({ input, ctx }) => {
			const allSpeakers = await ctx.prisma.speaker.findMany({
				where: {
					conferenceId: input.conferenceId,
				},
				include: {
					Schedule: true,
				},
			});
			return allSpeakers;
		}),

	deleteSpeaker: publicProcedure
		.input(
			z.object({
				id: z.string().uuid(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			await ctx.prisma.speaker.delete({
				where: {
					id: input.id,
				},
			});
			return true;
		}),
});
