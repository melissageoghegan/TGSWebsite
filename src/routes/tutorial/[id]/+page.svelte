<script>
	// @ts-nocheck

	export let data;
</script>

<h1>{data.body.title}</h1>
<button
	on:click={async () => {
		await fetch(`/tutorial/${data.body._id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}}>Delete</button
>
<p>Category: {data.body.category}</p>
<p>Subcategory: {data.body.subcategory}</p>
{data.body.content}
