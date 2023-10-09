// @ts-nocheck
import { getAllTutorials } from '$lib/db.server';

export const load = async () => {
	const tutorialsList = JSON.parse(JSON.stringify(await getAllTutorials()));
	let tutorialsObject = new Object();
	for (let element of tutorialsList) {
		if (tutorialsObject.hasOwnProperty(element.category)) {
			if (tutorialsObject[element.category].hasOwnProperty(element.subcategory)) {
				tutorialsObject[element.category][element.subcategory].push({
					id: element._id,
					title: element.title
				});
			} else {
				tutorialsObject[element.category][element.subcategory] = [
					{ id: element._id, title: element.title }
				];
			}
		} else {
			tutorialsObject[element.category] = {};
			tutorialsObject[element.category][element.subcategory] = [
				{ id: element._id, title: element.title }
			];
		}
	}
	return { status: 200, body: tutorialsObject };
};
