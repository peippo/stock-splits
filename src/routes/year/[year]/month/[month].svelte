<script context="module">
	export async function load({ params, fetch }) {
		const { year, month } = params;
		const response = await fetch(`/year/${year}/month/${month}.json`).then((res) => res.json());

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
	import { splitDataToDays } from '$lib/utils';

	export let splits;

	$: month = $page.params.month;
	$: days = splitDataToDays(splits, month);
</script>

<main>
	<div class="container">
		{#if splits.length > 0}
			{#each days as day, index}
				<div class="day">
					<span class="day__number">{index + 1}</span>

					{#if day.length > 0}
						{#each day as split}
							<div class="ticker">
								<h2 class="ticker__name">{split.ticker}</h2>
								<span class="ticker__split">{split.split_from}:{split.split_to}</span>
							</div>
						{/each}
					{/if}
				</div>
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

	.day {
		position: relative;
		min-height: 50px;
		background-color: var(--block-background-color);
		border: 1px solid var(--block-border-color);
		padding: 0.5rem;

		@media (min-width: 800px) {
			width: calc(100% / 7);
			min-height: calc(100vw / 7);
		}
	}

	.day__number {
		position: absolute;
		top: 0;
		right: 0;
		background-color: var(--block-border-color);
		padding: 0.25rem;
		min-width: 1.5rem;
		text-align: center;
	}

	.ticker {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		margin-bottom: 0.5rem;
	}

	.ticker__name {
		background-color: var(--ticker-background-color);
		color: var(--ticker-color);
		font-size: 1rem;
		margin: 0;
		padding: 0.25rem;
		border-radius: 3px;
	}

	.ticker__split {
		color: var(--ticker-color);
		padding: 0.25rem;
	}
</style>
