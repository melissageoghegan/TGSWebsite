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
	subCategory:{type:String,required:true},
	content:{type:String,required:true},
});

//Creates tutorials model
const tutorials = mongoose.model("tutorials",tutorialsSchema);

export async function addTutorial() {
	await tutorials.create({title:"My tutorial",category:"General",subCategory:"Sub",content:"Hi it's the tutorial"})
	console.log("Tutorial added")
}

export async function getAllTutorials() {
	const tutorialsList = tutorials.find({},"title").lean();
	return tutorialsList;
}
