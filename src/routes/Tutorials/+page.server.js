// @ts-nocheck
import {getAllTutorials} from "$lib/db.server";

export const load = async() => {
	const tutorials = await getAllTutorials();
	const tutorialsList = JSON.parse(JSON.stringify(tutorials))
	let tutorialsObject = new Object();
	for(let element of tutorialsList) {
		console.log(element)
		if(tutorialsObject.hasOwnProperty(element.category)) {
			tutorialsObject[element.category][element.subcategory].push({id:element._id,content:element.content});
		}
		else {
			tutorialsObject[element.category] = {};
			tutorialsObject[element.category][element.subcategory] = [{id:element._id,title:element.title,content:element.content}];
		}
	}
	return {status:200,body:tutorialsObject}
}
