<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';

	export let data
</script>
<svelte:head><title>Tutorials</title></svelte:head>
<h1>Tutorials</h1>
<button on:click={() => goto("/admin/addTutorial")}>Add Tutorial</button>
<ul>
	{#each data.body as tutorial}
		<li>{tutorial.title}</li>
	{/each}
</ul>