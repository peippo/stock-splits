<script>
	import { page } from '$app/stores';
</script>

<div class="container">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path
			d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
		/>
	</svg>
	<div class="message">
		<h2>Sorry, we ran into an issue!</h2>
		<p>{$page.error.message}</p>

		<a href="/">Go back to front page</a>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		color: var(--ticker-color);
		margin: 3rem auto;
		padding: 0 1rem;
		flex-direction: row;
	}

	.message {
		display: flex;
		flex-direction: column;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: normal;
		margin: 0;
	}

	p {
		margin: 0.25rem 0 1.5rem;
		opacity: 0.75;
	}

	svg {
		width: 48px;
		fill: currentColor;
		margin-right: 1rem;
	}

	a {
		color: var(--ticker-color);
	}
</style>
