<script>
	import { usdFormatter } from './utils';
	const key = import.meta.env.VITE_POLYGON_API_KEY;

	export let ticker;

	async function fetchDetails() {
		const res = await fetch(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${key}`);
		const data = await res.json();

		if (data.status === 'OK') {
			return data.results;
		} else {
			throw new ApiError(data.status);
		}
	}

	let promise = fetchDetails();

	class ApiError {
		constructor(status) {
			switch (status) {
				case 'NOT_FOUND':
					this.message = 'Ticker details not found';
					this.name = 'NOT_FOUND';
					break;
				case 'ERROR':
					this.message = 'Whoops, we hit the API limits!';
					this.name = 'ERROR';
					break;
				default:
					this.message = 'Oh no, something went wrong';
					this.name = 'GENERAL_ERROR';
					break;
			}
		}
	}
</script>

{#await promise}
	<p>Fetching ticker details...</p>
{:then details}
	<h2 class="name">{details.name}</h2>

	<div class="info">
		<div class="info__block">
			<span class="info__title">Ticker:</span>
			<span class="info__content">{details.ticker}</span>
		</div>
		<div class="info__block">
			<span class="info__title">Employees:</span>
			<span class="info__content">
				{#if details.total_employees}
					{details.total_employees}
				{:else}
					Unknown
				{/if}
			</span>
		</div>
		<div class="info__block">
			<span class="info__title">Market cap:</span>
			<span class="info__content">
				{#if details.market_cap}
					{usdFormatter.format(details.market_cap)}
				{:else}
					Unknown
				{/if}
			</span>
		</div>
	</div>

	<p class="description">
		{#if details.description}
			{details.description}
		{:else}
			No description provided
		{/if}
	</p>
{:catch error}
	<div class="error">
		{#if error.name === 'NOT_FOUND'}
			<div class="error__header">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
					<path
						d="M127.1 75.02V64C127.1 28.66 156.7 .0013 191.1 .0013H255.1C291.3 .0013 319.1 28.66 319.1 64V160C319.1 179.3 311.5 196.5 298 208.3L399.7 288H448C483.3 288 512 316.7 512 352V375.1L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L127.1 75.02zM191.1 125.2L236.4 160H255.1V64H191.1V125.2zM464 160H480C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224H384C366.3 224 352 209.7 352 192C352 174.3 366.3 160 384 160H400V76.4L394.1 78.36C377.4 83.95 359.2 74.89 353.6 58.12C348.1 41.35 357.1 23.23 373.9 17.64L421.9 1.644C431.6-1.609 442.4 .0275 450.7 6.042C459.1 12.06 464 21.72 464 32V160zM239.1 448H255.1C273.7 448 287.1 462.3 287.1 480C287.1 497.7 273.7 512 255.1 512H159.1C142.3 512 127.1 497.7 127.1 480C127.1 462.3 142.3 448 159.1 448H175.1V364.4L170.1 366.4C153.4 371.9 135.2 362.9 129.6 346.1C124.1 329.4 133.1 311.2 149.9 305.6L197.9 289.6C207.6 286.4 218.4 288 226.7 294C235.1 300.1 240 309.7 240 320L239.1 448zM319.1 352C319.1 350.7 320 349.5 320.1 348.2L384 398.5V448H446.8L497.8 488.2C486.1 502.7 468.1 512 448 512H384C348.7 512 319.1 483.3 319.1 448V352z"
					/>
				</svg>
				<h2 class="error__heading">{error.message}</h2>
			</div>
			<p class="error__reason">Sorry, we don't have any information about this ticker</p>
			<p class="error__links">
				<a href={`https://www.google.com/search?q=${ticker}+ticker`}
					>Search {ticker} on Google
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM344 312c0 17.69-14.31 32-32 32s-32-14.31-32-32V245.3l-121.4 121.4C152.4 372.9 144.2 376 136 376s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L234.8 200H168c-17.69 0-32-14.31-32-32s14.31-32 32-32h144c17.69 0 32 14.31 32 32V312z"
						/>
					</svg>
				</a>
				<a href={`https://www.nasdaq.com/market-activity/stocks/${ticker}`}>
					View {ticker} on Nasdaq
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM344 312c0 17.69-14.31 32-32 32s-32-14.31-32-32V245.3l-121.4 121.4C152.4 372.9 144.2 376 136 376s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L234.8 200H168c-17.69 0-32-14.31-32-32s14.31-32 32-32h144c17.69 0 32 14.31 32 32V312z"
						/>
					</svg>
				</a>
			</p>
		{:else if error.name === 'ERROR'}
			<div class="error__header">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
					<path
						d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM296 184V296C296 309.3 306.7 320 320 320C333.3 320 344 309.3 344 296V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184zM320 352C302.3 352 288 366.3 288 384C288 401.7 302.3 416 320 416C337.7 416 352 401.7 352 384C352 366.3 337.7 352 320 352z"
					/>
				</svg>
				<h2 class="error__heading">{error.message}</h2>
			</div>
			<p class="error__reason">Try again in a minute</p>
		{:else}
			<h2 class="error__heading">{error.message}</h2>
		{/if}
	</div>
{/await}

<style lang="scss">
	.name {
		margin-top: 0.5rem;
	}

	.info {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		border-top: 1px solid var(--block-border-color);
		border-bottom: 1px solid var(--block-border-color);
		flex-direction: column;

		@media (min-width: 800px) {
			align-items: center;
			flex-direction: row;
		}
	}

	.info__block {
		padding: 0.75rem;
		width: 100%;
		flex: 1;
	}

	.info__block:not(:last-child) {
		border-bottom: 1px solid var(--block-border-color);

		@media (min-width: 800px) {
			border-right: 1px solid var(--block-border-color);
			border-bottom: 0;
		}
	}

	.info__title {
		display: block;
		font-size: 14px;
		font-weight: 700;
		text-transform: uppercase;
	}

	.description {
		font-size: 16px;
		line-height: 1.5;
	}

	.error {
		text-align: center;

		svg {
			fill: var(--error-color);
			width: 48px;
		}
	}

	.error__header {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 1rem 0;

		@media (min-width: 800px) {
			flex-direction: row;
		}
	}

	.error__heading {
		font-size: 1.5rem;
		margin: 1rem 0 0 0;

		@media (min-width: 800px) {
			margin: 0 0 0 1rem;
		}
	}

	.error__links {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-top: 2rem;
		font-size: 16px;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--ticker-color);
			margin: 0.25rem 0.5rem;
		}

		@media (min-width: 800px) {
			flex-direction: row;

			a:first-of-type {
				border-right: 1px solid var(--ticker-color);
				padding-right: 1rem;
			}
		}

		svg {
			width: 0.875rem;
			margin-left: 0.5rem;
			fill: var(--ticker-color);
		}
	}
</style>
