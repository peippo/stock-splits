<script context="module">
	export async function load({ params, fetch }) {
		const { year } = params;
		const response = await fetch(`/year/${year}.json`).then((res) => res.json());

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
	import { splitDataToQuarters } from '$lib/utils';

	export let splits;

	$: year = $page.params.year;
	$: quarters = splitDataToQuarters(splits, year);
</script>

<main>
	<div class="container">
		{#if splits.length > 0}
			{#each quarters as quarter}
				{#if quarter.content.length > 0}
					<div class="quarter">
						<div class="quarter__info">
							<h2 class="quarter__name">
								<a class="quarter__link" href={`/year/${year}/quarter/${quarter.name}`}
									>{quarter.name}</a
								>
							</h2>
							<span class="quarter__splits">{quarter.content.length} splits</span>
						</div>
					</div>
				{/if}
			{/each}
		{:else}
			<p>No data found</p>
		{/if}
	</div>
</main>

<style lang="scss">
	.container {
		@include blocks-container;
	}

	.quarter {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--block-background-color);
		border: 1px solid var(--block-border-color);
		padding: 0.5rem;
		text-align: center;
		transition: background-color 0.2s;

		@media (min-width: 800px) {
			width: calc(100% / 2);
			min-height: calc(100vw / 3);
		}

		&:hover {
			background-color: var(--block-background-hover-color);
		}
	}

	.quarter__name {
		@include block-name;
		font-size: 3rem;
	}

	.quarter__link {
		@include expanded-link;
	}
</style>
