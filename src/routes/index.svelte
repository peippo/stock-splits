<script context="module">
	export const prerender = true;
</script>

<script>
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>STOCK/SPLITS</title>>
</svelte:head>

<div class="container">
	<h1 class="screen-reader-text">Stock Splits</h1>
	<svg
		id="logo"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 461.8 123"
		shape-rendering="geometricPrecision"
		text-rendering="geometricPrecision"
	>
		<g id="divider-group" transform="translate(230,62) scale(0,0)">
			<path
				id="divider"
				d="M251.2,0L214.3,103.5h-6.2L245,0h6.2Z"
				transform="translate(-230,-52)"
				fill="#fa8072"
			/>
		</g>
		<g id="splits-group" transform="translate(300,77)">
			<g id="splits" transform="translate(-350,-72)" opacity="0">
				<path
					d="M259.6,50.7c3.9,0,7.4.6,10.4,1.8s5.6,3,7.8,5.3l-5.3,7.1c-1.8-1.9-3.8-3.4-5.9-4.3-2.1-1-4.5-1.4-7.2-1.4-1.6,0-2.9.2-3.8.5-1,.3-1.7.8-2.1,1.4s-.6,1.3-.6,2c0,.9.4,1.7,1.2,2.3s2.2,1.1,4.1,1.6l7.1,1.6c4.2,1,7.3,2.4,9.3,4.3s2.9,4.4,2.9,7.5c0,3-.8,5.5-2.3,7.6s-3.6,3.6-6.3,4.7-5.8,1.6-9.2,1.6c-2.8,0-5.5-.3-8.1-.9s-4.9-1.5-6.9-2.7-3.8-2.5-5.2-4l5.3-7.4c1.1,1.2,2.4,2.3,3.9,3.3c1.6,1,3.3,1.7,5.1,2.3c1.9.6,3.7.8,5.7.8c1.5,0,2.7-.1,3.7-.4s1.7-.7,2.2-1.3.7-1.3.7-2.1c0-.9-.3-1.7-1-2.3-.6-.6-1.9-1.1-3.6-1.6l-7.8-1.7c-2.4-.6-4.5-1.3-6.4-2.2s-3.3-2.2-4.4-3.7c-1.1-1.6-1.6-3.5-1.6-5.9c0-2.6.7-5,2.2-7.1c1.4-2.1,3.5-3.7,6.3-4.9c2.7-1.2,6-1.8,9.8-1.8Z"
					fill="#fff"
				/>
				<path
					d="M303.8,51.3c3.5,0,6.4.6,8.8,1.7s4.3,2.7,5.6,4.8s1.9,4.6,1.9,7.6-.6,5.5-1.9,7.6-3.1,3.7-5.6,4.8c-2.4,1.1-5.4,1.7-8.8,1.7h-8.4v14.1h-11v-42.3h19.4Zm-1.8,20c2.3,0,4-.5,5.2-1.4c1.2-1,1.8-2.4,1.8-4.4s-.6-3.4-1.8-4.4-2.9-1.4-5.2-1.4h-6.7v11.6h6.7Z"
					fill="#fff"
				/>
				<path d="M338.1,85.1h21.2v8.5h-32.2v-42.3h11v33.8Z" fill="#fff" />
				<path d="M376.7,51.3v42.2h-11v-42.2h11Z" fill="#fff" />
				<path d="M421.5,51.3v8.5h-13.8v33.7h-11v-33.6h-13.8v-8.5h38.6Z" fill="#fff" />
				<path
					d="M443.5,50.7c3.9,0,7.4.6,10.4,1.8s5.6,3,7.8,5.3l-5.3,7.1c-1.8-1.9-3.8-3.4-5.9-4.3-2.1-1-4.5-1.4-7.2-1.4-1.6,0-2.9.2-3.8.5-1,.3-1.7.8-2.1,1.4s-.6,1.3-.6,2c0,.9.4,1.7,1.2,2.3s2.2,1.1,4.1,1.6l7.1,1.6c4.2,1,7.3,2.4,9.3,4.3s2.9,4.4,2.9,7.5c0,3-.8,5.5-2.3,7.6s-3.6,3.6-6.3,4.7-5.8,1.6-9.2,1.6c-2.8,0-5.5-.3-8.1-.9s-4.9-1.5-6.9-2.7-3.8-2.5-5.2-4l5.3-7.4c1.1,1.2,2.4,2.3,3.9,3.3s3.3,1.7,5.1,2.3c1.9.6,3.7.8,5.7.8c1.5,0,2.7-.1,3.7-.4s1.7-.7,2.2-1.3.7-1.3.7-2.1c0-.9-.3-1.7-1-2.3-.6-.6-1.9-1.1-3.6-1.6l-7.8-1.7c-2.4-.6-4.5-1.3-6.4-2.2s-3.3-2.2-4.4-3.7c-1.1-1.6-1.6-3.5-1.6-5.9c0-2.6.7-5,2.2-7.1c1.4-2.1,3.5-3.7,6.3-4.9s6-1.8,9.8-1.8Z"
					fill="#fff"
				/>
			</g>
		</g>
		<g id="stock-group" transform="translate(157,37)">
			<g id="stock" transform="translate(-107,-32)" opacity="0">
				<path
					d="M20.2,9.8c3.9,0,7.4.6,10.4,1.8s5.6,3,7.8,5.3L33.1,24c-1.8-1.9-3.8-3.4-5.9-4.3-2.1-1-4.5-1.4-7.2-1.4-1.6,0-2.9.2-3.8.5-1,.3-1.7.8-2.1,1.4s-.6,1.3-.6,2c0,.9.4,1.7,1.2,2.3s2.2,1.1,4.1,1.6l7.1,1.6c4.2,1,7.3,2.4,9.3,4.3s2.9,4.4,2.9,7.5c0,3-.8,5.5-2.3,7.6s-3.6,3.6-6.3,4.7c-2.7,1-5.8,1.6-9.2,1.6-2.8,0-5.5-.3-8.1-.9s-4.9-1.5-6.9-2.7-3.8-2.5-5.2-4l5.3-7.4c1.1,1.2,2.4,2.3,3.9,3.3c1.6,1,3.3,1.7,5.1,2.3c1.9.6,3.7.8,5.7.8c1.5,0,2.7-.1,3.7-.4s1.7-.7,2.2-1.3.7-1.3.7-2.1c0-.9-.3-1.7-1-2.3-.6-.6-1.9-1.1-3.6-1.6l-7.8-1.7c-2.4-.6-4.5-1.3-6.4-2.2-1.9-1-3.3-2.2-4.4-3.8s-1.6-3.5-1.6-5.9c0-2.6.7-5,2.2-7.1c1.4-2.1,3.5-3.7,6.3-4.9c2.7-1.1,6-1.7,9.8-1.7Z"
					fill="#fff"
				/>
				<path d="M79.7,10.5v8.5h-13.8v33.7h-11v-33.7h-13.8v-8.5h38.6Z" fill="#fff" />
				<path
					d="M103.2,9.8c4.3,0,7.9.9,11,2.6s5.5,4.2,7.1,7.5c1.7,3.2,2.5,7.1,2.5,11.7s-.8,8.5-2.5,11.7-4,5.7-7.1,7.5c-3.1,1.7-6.8,2.6-11,2.6-4.3,0-8-.9-11.1-2.6s-5.5-4.2-7.2-7.5c-1.7-3.2-2.5-7.1-2.5-11.7s.8-8.5,2.5-11.7s4.1-5.7,7.2-7.5c3.1-1.7,6.8-2.6,11.1-2.6Zm0,8.7c-2,0-3.8.5-5.2,1.5s-2.5,2.4-3.2,4.4c-.7,1.9-1.1,4.4-1.1,7.3s.4,5.3,1.1,7.2c.7,2,1.8,3.4,3.2,4.4s3.1,1.5,5.2,1.5c2,0,3.8-.5,5.2-1.5s2.4-2.5,3.2-4.4c.7-2,1.1-4.4,1.1-7.2c0-2.9-.4-5.3-1.1-7.3-.7-1.9-1.8-3.4-3.2-4.4-1.5-1.1-3.2-1.5-5.2-1.5Z"
					fill="#fff"
				/>
				<path
					d="M168.8,40.6c-.8,2.9-2.1,5.4-3.9,7.3s-3.9,3.3-6.4,4.2-5.2,1.3-8.2,1.3c-4.3,0-8-.9-11.1-2.6s-5.5-4.2-7.2-7.5c-1.7-3.2-2.5-7.1-2.5-11.7s.8-8.5,2.5-11.7s4.1-5.7,7.2-7.5c3.1-1.7,6.8-2.6,11-2.6c2.9,0,5.7.4,8.1,1.2c2.5.8,4.6,2.1,6.3,3.8s2.9,3.9,3.6,6.6l-9.7,3.9c-.6-2.6-1.6-4.5-2.9-5.4-1.3-1-3-1.5-5.1-1.5-2,0-3.7.5-5.2,1.5s-2.6,2.4-3.4,4.4c-.8,1.9-1.2,4.4-1.2,7.3s.4,5.3,1.1,7.2c.7,2,1.8,3.4,3.3,4.4s3.3,1.5,5.5,1.5c2,0,3.8-.6,5.2-1.7s2.4-2.9,2.9-5.2l10.1,2.8Z"
					fill="#fff"
				/>
				<polygon
					points="201.6,52.7 214.1,52.7 199,27.6 213.3,10.5 201.1,10.5 186,29.2 186,10.5 175,10.5 175,52.7 186,52.7 186,40.8 191.1,34.5"
					fill="#fff"
				/>
			</g>
		</g>
	</svg>

	<div class="info" in:fly={{ y: -25, delay: 1100, duration: 1000, easing: cubicInOut }}>
		<h2>Listing of historical stock splits</h2>

		<p class="description">
			A <strong>stock split</strong> is a corporate action in which a company increases the number of
			shares by issuing more shares to current shareholders
		</p>

		<p>Data from <a href="https://polygon.io/">Polygon.io</a></p>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h2 {
		text-align: center;
		font-size: 1.25rem;
		text-transform: uppercase;
		color: #283542;
	}

	p {
		max-width: 640px;
		margin: 0 auto;
		font-size: 16px;
		line-height: 1.6;
		color: #10151a;
		text-align: center;
		margin-bottom: 2rem;
	}

	.description {
		font-size: 1rem;
	}

	#splits-group {
		animation: splits-position-animation 2000ms linear 1 normal forwards;
	}

	@keyframes splits-position-animation {
		0% {
			transform: translate(300px, 77px);
		}
		43% {
			transform: translate(300px, 77px);
			animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
		}
		66% {
			transform: translate(350px, 77px);
		}
		100% {
			transform: translate(350px, 77px);
		}
	}

	#splits {
		animation: splits-opacity-animation 2000ms linear 1 normal forwards;
	}

	@keyframes splits-opacity-animation {
		0% {
			opacity: 0;
		}
		53% {
			opacity: 0;
		}
		66% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}

	#stock-group {
		animation: stock-position-animation 2000ms linear 1 normal forwards;
	}

	@keyframes stock-position-animation {
		0% {
			transform: translate(157px, 37px);
		}
		30% {
			transform: translate(157px, 37px);
			animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
		}
		50% {
			transform: translate(107px, 37px);
		}
		100% {
			transform: translate(107px, 37px);
		}
	}

	#stock {
		animation: stock-opacity-animation 2000ms linear 1 normal forwards;
	}

	@keyframes stock-opacity-animation {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}

	#divider-group {
		animation: divider-animation 1250ms linear 1 normal forwards;
	}

	@keyframes divider-animation {
		0% {
			transform: translate(230px, 62px) scale(0, 0);
			animation-timing-function: cubic-bezier(0.555, 0.965, 0.32, 1.275);
		}
		36.666667% {
			transform: translate(230px, 62px) scale(1, 1);
		}
		100% {
			transform: translate(230px, 62px) scale(1, 1);
		}
	}
</style>
