// @ts-nocheck
import { deleteTutorial } from '$lib/db.server';

export const DELETE = async ({ params }) => {
	await deleteTutorial(params.id);
	return Response.redirect('/tutorials', 308);
};
