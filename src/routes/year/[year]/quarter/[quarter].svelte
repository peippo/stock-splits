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
	export let splits;
</script>

<main>
	{#if splits.length > 0}
		{#each splits as split}
			<h2>{split.ticker}</h2>
			{split.split_from}:{split.split_to}
		{/each}
	{:else}
		<p>No data found</p>
	{/if}
</main>
