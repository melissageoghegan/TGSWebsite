import { getTutorial } from "$lib/db.server";

export const load = async({params}) => {
	const tempTutorial = await getTutorial(params.id);
	const tutorial = JSON.parse(JSON.stringify(tempTutorial));
	return {status:200,body:tutorial}
}
