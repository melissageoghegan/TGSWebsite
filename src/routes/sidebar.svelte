<script>
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	// @ts-ignore
	/**
	 * @type {boolean}
	 */
	let open;
	// @ts-ignore
	function closeSideBar(e) {
		if (e.key == 'Escape' || e.keyCode == 27) {
			open = false;
		}
	}
</script>

{#if open}
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<aside on:keydown={closeSideBar} on:click|self={() => (open = false)}>
		<nav role="dialog" transition:slide={{ delay: 0, duration: 1000, easing: quintOut, axis: 'x' }}>
			<span
				id="close"
				class="fa-solid fa-x"
				tabindex="0"
				on:keypress={() => (open = false)}
				on:click={() => (open = false)}
				role="button"
			/>
			<!-- svelte-ignore a11y-autofocus -->
			<a
				autofocus
				href="/"
				on:keypress={() => (open = false)}
				on:click={() => (open = false)}
				aria-current={$page.url.pathname === '/'}>Home</a
			>
			<a
				href="/Products"
				on:keypress={() => (open = false)}
				on:click={() => (open = false)}
				aria-current={$page.url.pathname === '/Products'}>Products</a
			>
			<a
				href="/Tutorials"
				on:keypress={() => (open = false)}
				on:click={() => (open = false)}
				aria-current={$page.url.pathname === '/Tutorials'}>Tutorials</a
			>
			<a
				href="/BookLessons"
				on:keypress={() => (open = false)}
				on:click={() => (open = false)}
				aria-current={$page.url.pathname === '/BookLessons'}>Book Lessons</a
			>
			<a
				href="/AboutMe"
				on:keypress={() => (open = false)}
				on:click={() => (open = false)}
				aria-current={$page.url.pathname === '/AboutMe'}>About Me</a
			>
		</nav>
	</aside>
{/if}
<span
	class="fa-solid fa-bars navigationToggle"
	aria-label="Navigation toggle"
	on:keypress={() => (open = !open)}
	on:click={() => (open = !open)}
	tabindex="0"
	role="button"
/>

<style>
	.navigationToggle {
		margin: 2vmin;
		font-size: 5vmin;
	}

	#close {
		color: white;	
	}

	aside {
		display: flex;
		z-index: 1;
		position: fixed;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100dvw;
		background-color: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(7px);
	}

	nav {
		display: flex;
		flex-direction: column;
		background-color: black;
		padding: 2vh 2vmin;
		text-align: center;
		min-height: 100dvh;
		width: 50vmin;
	}

	span {
		color: goldenrod;
	}

	nav span {
		text-align: right;
		cursor: pointer;
	}

	nav a {
		border-top: 3px solid goldenrod;
		border-bottom: 3px solid goldenrod;
		margin: auto;
		width: 25vw;
		word-wrap: normal;
		padding: 3vmin;
		color: white;
	}

	nav a:first-of-type {
		margin-top: auto;
	}

	nav a:last-of-type {
		margin-bottom: auto;
	}

	@media only screen and (min-width: 768px) {
		nav a {
			width: 25vw;
		}
		.navigationToggle {
			display: none;
		}
	}
</style>
