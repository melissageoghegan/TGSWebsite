import {addTutorial} from "$lib/db.server";

export const actions={
	default:async({request}) => {
		const formData = await request.formData();
		await addTutorial({title:formData.get("title"),category:formData.get("category"),subcategory:formData.get("subcategory"),content:formData.get("content")});
		return{success:true}
	}
}