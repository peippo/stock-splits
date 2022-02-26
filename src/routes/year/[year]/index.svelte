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
	{#if splits.length > 0}
		{#each quarters as quarter}
			{#if quarter.content.length > 0}
				<h2>
					<a href={`/year/${year}/quarter/${quarter.name}`}>{quarter.name}</a>
				</h2>
				{quarter.content.length} splits
			{/if}
		{/each}
	{:else}
		<p>No data found</p>
	{/if}
</main>
