<script>
	import { page } from '$app/stores';

	export let title;
	export let href;
	export let type;

	$: isActive = $page.url.pathname.includes(href);
</script>

<a
	{href}
	class={type === 'year' ? 'nav__link nav__link--year' : 'nav__link'}
	class:active={isActive}
>
	{title}
</a>

<style lang="scss">
	.nav__link {
		text-decoration: none;
		color: var(--header-link-color);
		padding: 0.15rem 0.25rem;
		border-radius: 3px;

		&:not(.nav__link--year) {
			@media (max-width: 800px) {
				display: none;
			}
		}
	}

	.nav__link--year {
		font-weight: 700;
	}

	.active {
		background-color: var(--header-link-color);
		color: #fff;
	}
</style>
