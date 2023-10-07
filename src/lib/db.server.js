// @ts-nocheck
import mongoose from "mongoose";
import {dataBaseURI} from "$env/static/private";

//Connects to database
connectToDatabase().catch((ex) => {
	console.error(ex)
})
async function connectToDatabase() {
	await mongoose.connect(dataBaseURI)
	console.log("Connected to database");
}

//Create tutorials schema
const tutorialsSchema = new mongoose.Schema({
	title:{type:String,required:true,unique:true},
	category:{type:String,required:true},
	subcategory:{type:String,required:true},
	content:{type:String,required:true},
});

//Creates tutorials model
const tutorials = mongoose.model("tutorials",tutorialsSchema);

export async function addTutorial(newTutorial) {
	await tutorials.create(newTutorial)
	console.log("Tutorial added")
}

export async function getAllTutorials() {
	const tutorialsList = tutorials.find({},"title category subcategory").lean();
	return tutorialsList;
}

export async function getTutorial(id) {
	const tutorial = tutorials.findById(id).lean();
	return tutorial;
}