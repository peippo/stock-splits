<script>
	import NavLink from '$lib/NavLink.svelte';
	import '../app.scss';
</script>

<header>
	<h1>
		<a href="/">
			S<span class="hidden-mobile">tock</span><span class="divider">/</span>S<span
				class="hidden-mobile">plits</span
			>
		</a>
	</h1>
	<nav aria-label="Main">
		<NavLink href="/year/2020" title="2020" type="year" />
		<NavLink href="/year/2020/quarter/q3" title="Q3" type="quarter" />
		<NavLink href="/year/2020/quarter/q4" title="Q4" type="quarter" />
		<NavLink href="/year/2021" title="2021" type="year" />
		<NavLink href="/year/2021/quarter/q1" title="Q1" type="quarter" />
		<NavLink href="/year/2021/quarter/q2" title="Q2" type="quarter" />
		<NavLink href="/year/2021/quarter/q3" title="Q3" type="quarter" />
		<NavLink href="/year/2021/quarter/q4" title="Q4" type="quarter" />
		<NavLink href="/year/2022" title="2022" type="year" />
		<NavLink href="/year/2022/quarter/q1" title="Q1" type="quarter" />
	</nav>
</header>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<slot />

<style lang="scss">
	header {
		position: relative;
		background-color: var(--header-background-color);
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		box-shadow: 0 5px 5px -2px #272f3a29;
		z-index: 1;
	}

	h1 {
		margin: 0;
		text-transform: uppercase;
		font-size: 1.25rem;
		text-shadow: 0 1px 1px var(--header-link-color);

		a {
			text-decoration: none;
			color: #fff;
		}
	}

	.divider {
		opacity: 0.75;
	}

	@media (max-width: 500px) {
		.hidden-mobile {
			display: none;
		}
	}

	nav {
		margin-left: 1rem;
		width: 100%;
	}
</style>
