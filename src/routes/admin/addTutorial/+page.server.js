// @ts-nocheck
import { addTutorial, getCategoryInfo } from '$lib/db.server';

export const load = async () => {
	const categoryInfo = JSON.parse(JSON.stringify(await getCategoryInfo()));
	let categoryObject = new Object();
	for (let element of categoryInfo) {
		if (categoryObject.hasOwnProperty(element.category)) {
			categoryObject[element.category].push(element.subcategory);
		} else {
			categoryObject[element.category] = [];
			categoryObject[element.category].push(element.subcategory);
		}
	}
	console.log(categoryObject);
	return { success: true, body: { categories: categoryObject } };
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		await addTutorial({
			title: formData.get('title'),
			category: formData.get('category'),
			subcategory: formData.get('subcategory'),
			content: formData.get('content')
		});
		return Response.redirect('/tutorials', 308);
	}
};
