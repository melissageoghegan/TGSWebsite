<script>
	// @ts-nocheck

	export let data
</script>
<svelte:head><title>Tutorials</title></svelte:head>
<h1>Tutorials</h1>
<ul>
	{#each data.body as tutorial}
		<li>{tutorial.title}</li>
	{/each}
</ul>