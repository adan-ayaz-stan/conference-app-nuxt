import { router } from '../trpc';
import { conferenceRouter } from './conference';
import { organizerRouter } from './organizer';
import { speakerRouter } from './speaker';

export const appRouter = router({
	conference: conferenceRouter,
	organizer: organizerRouter,
	speaker: speakerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
