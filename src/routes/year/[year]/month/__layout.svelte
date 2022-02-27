<script>
	import { page } from '$app/stores';
	import { monthNames } from '$lib/utils';

	$: currentYear = parseInt($page.params.year);
	$: currentMonth = parseInt($page.params.month);

	$: previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
	$: nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;

	function handlePrevious() {
		if (currentMonth === 1) {
			currentYear = currentYear - 1;
		}
	}

	function handleNext() {
		if (currentMonth === 12) {
			currentYear = currentYear + 1;
		}
	}
</script>

<nav class="container" aria-label="Month">
	<a on:click={handlePrevious} href={`/year/${currentYear}/month/${previousMonth}`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			<path
				d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM352 288H173.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L73.4 278.6C65.4 270.7 64 260.9 64 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L173.3 224H352c17.69 0 32 14.33 32 32S369.7 288 352 288z"
			/>
		</svg>
		<span class="screen-reader-text">Previous month</span>
	</a>
	<h1>
		<span class="screen-reader-text">Current month: </span>
		{monthNames[currentMonth - 1]}
	</h1>
	<a on:click={handleNext} href={`/year/${currentYear}/month/${nextMonth}`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			<path
				d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM374.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L274.8 288H96C78.31 288 64 273.7 64 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C382.6 241.3 384 251.1 384 256C384 260.9 382.6 270.7 374.6 278.6z"
			/>
		</svg>
		<span class="screen-reader-text">Next month</span>
	</a>
</nav>

<slot />

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		background-color: var(--submenu-background-color);
	}

	h1 {
		font-size: 1.5rem;
		margin: 0;
		color: var(--submenu-color);
	}

	a:hover {
		svg {
			fill: #fff;
		}
	}

	svg {
		fill: var(--submenu-color);
		transition: fill 0.2s;
		width: 24px;

		@media (min-width: 800px) {
			width: 30px;
		}
	}
</style>
