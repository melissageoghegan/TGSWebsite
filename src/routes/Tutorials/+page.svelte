<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data

</script>
<svelte:head><title>Tutorials</title></svelte:head>
<h1>Tutorials</h1>
<button on:click={() => goto("/admin/addTutorial")}>Add Tutorial</button>
{#each Object.keys(data.body) as tutorialCategory}
	<h2>{tutorialCategory}</h2>
	{#each Object.keys(data.body[tutorialCategory]) as tutorialSubcategory}
		<details>
			<summary>{tutorialSubcategory}</summary>
			{#each data.body[tutorialCategory][tutorialSubcategory] as tutorial}
				<a href={"/tutorial/"+tutorial.id}>{tutorial.title}</a>
			{/each}

		</details>
	{/each}
{/each}