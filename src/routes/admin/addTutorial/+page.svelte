<script>
// @ts-nocheck
	import Editor from "@tinymce/tinymce-svelte"
	import { enhance } from "$app/forms";

	export let form;
	let conf = {
		menubar:false,
	}
	let text;

	function newDropdownItem(elementId) {
		let currentElement = document.getElementById(elementId);
		console.log(currentElement.tagName)
		if(currentElement.tagName.toLowerCase()=="select") {
			console.log("Changing to text input");
			const newOption = document.createElement("input");
			currentElement.parentElement.replaceChild(newOption,currentElement);
			newOption.id=elementId;
			newOption.name=elementId;
			newOption.type="text";
		document.getElementById(elementId+"Button").innerText="Select option";
		}
		else {
			console.log("Changing to select");
			const newDropDown = document.createElement("select");
			currentElement.parentElement.replaceChild(newDropDown,currentElement);
			newDropDown.id=elementId;
			newDropDown.name=elementId;
			document.getElementById(elementId+"Button").innerText="New option";
		}
	}

</script>
<svelte:head><title>Add a tutorial</title></svelte:head>
<h1>Add a new tutorial</h1>
<form method="post" use:enhance>
	<label for="title">Title</label>
	<input id="title" name="title" type="text">
	<label for="category">Category</label>
	<select id="category" name="category">

	</select>
	<button id="categoryButton" type="button" on:click={() => newDropdownItem("category")}>New option</button>
	<label for="subcategory">Subcategory</label>
	<select id="subcategory" name="subcategory">

	</select>
	<button id="subcategoryButton" type="button" on:click={() => newDropdownItem("subcategory")}>New option</button>
	<textarea name="content" value="{text}" hidden></textarea>
	<Editor
		bind:text={text}
		{conf}
	/>
	<button>Save</button>
</form>

<style>
	form{
		display: flex;
		flex-direction: column;
	}
</style>