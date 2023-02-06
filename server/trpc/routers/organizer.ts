import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

export const organizerRouter = router({
	postOrganizer: publicProcedure
		.input(
			z.object({
				logo: z.string(),
				logoUrl: z.string(),
				name: z.string(),
				website: z.string().url(),
				conferenceId: z.string().uuid(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const newOrganizer = ctx.prisma.organizer.create({
				data: {
					...input,
				},
			});
			return newOrganizer;
		}),

	getAllOrganizers: publicProcedure
		.input(
			z.object({
				conferenceId: z.string().uuid(),
			}),
		)
		.query(async ({ input, ctx }) => {
			const allOrganizers = ctx.prisma.organizer.findMany({
				where: {
					conferenceId: input.conferenceId,
				},
			});
			return allOrganizers;
		}),

	deleteOrganizer: publicProcedure
		.input(
			z.object({
				id: z.string().uuid(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			await ctx.prisma.organizer.delete({
				where: {
					id: input.id,
				},
			});
			return true;
		}),
});
