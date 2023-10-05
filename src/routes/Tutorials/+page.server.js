import {getAllTutorials} from "$lib/db.server";

export const load = async() => {
	const tutorials = await getAllTutorials();
	const tutorialsList = JSON.parse(JSON.stringify(tutorials))
	return {status:200,body:tutorialsList}
}
