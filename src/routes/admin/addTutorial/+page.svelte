<script>
	// @ts-nocheck
	import Editor from '@tinymce/tinymce-svelte';
	import { enhance } from '$app/forms';

	export let data;
	let currentCategory;
	let selectCategory,
		selectSubcategory = true;
	let conf = {
		menubar: false
	};
	let text;
</script>

<svelte:head><title>Add a tutorial</title></svelte:head>
<h1>Add a new tutorial</h1>
<form method="post" use:enhance>
	<label for="title">Title</label>
	<input id="title" name="title" type="text" />
	<label for="category">Category</label>
	{#if selectCategory}
		<select id="category" name="category" bind:value={currentCategory}>
			{#each Object.keys(data.body.categories) as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	{:else}
		<input name="category" type="text" />
	{/if}
	<button id="categoryButton" type="button" on:click={() => (selectCategory = !selectCategory)}>
		{#if selectCategory}
			New category
		{:else}
			Select category
		{/if}
	</button>
	<label for="subcategory">Subcategory</label>
	{#if selectSubcategory && selectCategory}
		{#if currentCategory}
			<select id="subcategory" name="subcategory">
				{#each data.body.categories[currentCategory] as subcategory}
					<option value={subcategory}>{subcategory}</option>
				{/each}
			</select>
		{:else}
			{(currentCategory = Object.keys(data.body.categories)[0])}
		{/if}
	{:else}
		<input id="subcategory" name="subcategory" type="text" />
	{/if}
	<button type="button" on:click={() => (selectSubcategory = !selectSubcategory)}>
		{#if selectSubcategory && selectCategory}
			New subcategory
		{:else}
			Select subcategory
		{/if}
	</button>
	<textarea name="content" value={text} hidden />
	<Editor bind:text {conf} />
	<button>Save</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
</style>
