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

	export let splits;

	$: year = $page.params.year;
	$: quarter = $page.params.quarter;
	$: months = splitDataToMonths(splits, year, quarter);
</script>

<main>
	{#if splits.length > 0}
		{#each months as month}
			{#if month.content.length > 0}
				<h2>
					<a href={`/year/${year}/month/${month.number}`}>{month.name}</a>
				</h2>
				{month.content.length} splits
			{/if}
		{/each}
	{:else}
		<p>No data found</p>
	{/if}
</main>
