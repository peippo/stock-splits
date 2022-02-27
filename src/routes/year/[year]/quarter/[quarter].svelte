<script context="module">
	export async function load({ params, fetch }) {
		const { year, quarter } = params;
		const response = await fetch(`/year/${year}/quarter/${quarter}.json`).then((res) => res.json());

		return {
			status: response.status,
			props: {
				splits: response
			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import { splitDataToMonths } from '$lib/utils';
	import { fly } from 'svelte/transition';

	export let splits;

	$: year = $page.params.year;
	$: quarter = $page.params.quarter;
	$: months = splitDataToMonths(splits, year, quarter);
</script>

<main>
	<div class="container">
		{#key quarter}
			{#if splits.length > 0}
				{#each months as month, index}
					{#if month.content.length > 0}
						<div class="month" in:fly={{ y: -20, duration: 300, delay: index * 100 }}>
							<h2 class="month__name">
								<a
									sveltekit:prefetch
									class="month__link"
									href={`/year/${year}/month/${month.number}`}>{month.name}</a
								>
							</h2>
							{month.content.length} splits
						</div>
					{/if}
				{/each}
			{:else}
				<p>No data found</p>
			{/if}
		{/key}
	</div>
</main>

<style lang="scss">
	.container {
		@include blocks-container;
	}

	.month {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: var(--block-background-color);
		border: 1px solid var(--block-border-color);
		padding: 0.5rem;
		transition: background-color 0.2s;

		@media (min-width: 800px) {
			width: calc(100% / 3);
			min-height: calc(100vw / 3);
		}

		&:hover {
			background-color: var(--block-background-hover-color);
		}
	}

	.month__name {
		@include block-name;
	}

	.month__link {
		@include expanded-link;
	}
</style>
