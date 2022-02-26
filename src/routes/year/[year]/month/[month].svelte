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
	{#if splits.length > 0}
		{#each days as day, index}
			<h2>day {index + 1}</h2>

			{#if day.length > 0}
				{#each day as split}
					<h2>{split.ticker}</h2>
					{split.split_from}:{split.split_to}
				{/each}
			{/if}
		{/each}
	{:else}
		<p>No data found</p>
	{/if}
</main>
