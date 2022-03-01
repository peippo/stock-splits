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
	import { fade, fly } from 'svelte/transition';

	import TickerDetails from '$lib/TickerDetails.svelte';

	export let splits;

	$: year = $page.params.year;
	$: month = $page.params.month;
	$: days = splitDataToDays(splits, month);
	$: monthStartingDay = new Date(`${year}-${month}-01`).getDay() - 1;
	$: activeTicker = null;

	function handleTickerClick(ticker) {
		activeTicker = ticker;
		focusCloseButton();
	}

	function handleCloseClick() {
		activeTicker = null;
	}

	function focusCloseButton() {
		const closeButton = document.getElementById('js-modal-close');

		window.setTimeout(function () {
			closeButton?.focus();
		}, 100);
	}

	function handleKeydown(event) {
		if (!activeTicker) return;

		if (event.key === 'Escape') {
			handleCloseClick();
		}

		if (event.key === 'Tab') {
			focusCloseButton();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
	<div class="container">
		{#key month}
			{#if splits.length > 0}
				{#each Array(monthStartingDay === -1 ? 6 : monthStartingDay) as _}
					<div class="day day--previous-month" />
				{/each}
				{#each days as day, index}
					<div class="day" in:fade={{ duration: 250, delay: index * 30 }}>
						<span class="day__number">{index + 1}</span>

						{#if day.length > 0}
							{#each day as split}
								<div class="ticker">
									<h2 class="ticker__name">
										<button class="ticker__button" on:click={() => handleTickerClick(split.ticker)}>
											{split.ticker}
										</button>
									</h2>
									<span class="ticker__split">
										{split.split_to}:{split.split_from}

										{#if split.split_to < split.split_from}
											<abbr title="Reverse split" class="reverse">R</abbr>
										{/if}
									</span>
								</div>
							{/each}
						{/if}
					</div>
				{/each}
			{:else}
				<p>No data found</p>
			{/if}
		{/key}
	</div>

	{#if activeTicker}
		<div class="mask" on:click|self={handleCloseClick} transition:fade|local={{ duration: 150 }}>
			<div
				class="modal"
				in:fly|local={{ y: -20, duration: 250, delay: 200 }}
				out:fly|local={{ y: 20, duration: 250 }}
			>
				<TickerDetails ticker={activeTicker} />
				<button on:click={handleCloseClick} class="modal__close" id="js-modal-close">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"
						/>
					</svg>
					<span class="screen-reader-text">Close modal</span>
				</button>
			</div>
		</div>
	{/if}
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

		&:not(.day--previous-month):nth-child(7n),
		&:not(.day--previous-month):nth-child(7n - 1) {
			opacity: 0.75;
			background: repeating-linear-gradient(
				-45deg,
				slategrey,
				slategrey 5px,
				var(--block-background-color) 5px,
				var(--block-background-color) 25px
			);
		}
	}

	.day--previous-month {
		background-color: slategrey;
		border: 1px solid darken(slategrey, 8%);
		box-shadow: -5px -5px 0 rgba(darken(slategrey, 15%), 0.25) inset;

		@media (max-width: 799px) {
			display: none;
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
		border-bottom: 1px solid var(--ticker-color);
	}

	.ticker {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		margin-bottom: 0.5rem;
	}

	.ticker__name {
		margin: 0;
	}

	.ticker__button {
		background-color: var(--ticker-background-color);
		color: var(--ticker-color);
		font-size: 1rem;
		margin: 0;
		padding: 0.25rem;
		border-radius: 3px;
		width: 100%;
		text-align: left;
		transition: color 0.2s, background-color 0.2s;

		&:hover {
			color: var(--ticker-hover-color);
			background-color: var(--ticker-background-hover-color);
		}
	}

	.ticker__split {
		display: flex;
		justify-content: space-between;
		color: var(--ticker-color);
		padding: 0.25rem;

		.reverse {
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 700;
			text-decoration: none;
			background-color: var(--ticker-color);
			color: rgba(#fff, 0.75);
			border-radius: 100px;
			width: 1.25rem;
			height: 1.25rem;
			font-size: 15px;

			&:hover {
				cursor: help;
			}
		}
	}

	.mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 10;
	}

	.modal {
		position: relative;
		margin: 1rem auto;
		max-width: 90%;
		background: #fff;
		z-index: 15;
		padding: 0.5rem 1rem;
		border-radius: 3px;
		background-color: var(--modal-background-color);
		max-height: 90vh;
		overflow: auto;
		border-top: 5px solid salmon;
		box-shadow: 0 20px 50px -30px rgb(0 0 0 / 30%);

		@media (min-width: 800px) {
			padding: 1rem 1.5rem;
			max-width: 800px;
			margin-top: 150px;
		}
	}

	.modal__close {
		position: absolute;
		top: 10px;
		right: 10px;
		color: var(--modal-color);

		svg {
			fill: var(--modal-color);
			width: 32px;
			transition: fill 0.2s;
		}

		&:hover {
			svg {
				fill: black;
			}
		}
	}
</style>
