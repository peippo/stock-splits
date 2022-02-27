<script>
	import { page } from '$app/stores';
	import { quarterMonths } from '$lib/utils';

	export let title;
	export let href;
	export let type;

	$: isActive =
		$page.url.pathname.includes(href) ||
		(href.includes(activeYear) &&
			quarterMonths[title.toLowerCase()].includes(activeMonth?.toString().padStart(2, '0')));
	$: activeMonth = $page.params.month;
	$: activeYear = $page.params.year;
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
		transition: color 0.1s;

		&:not(.nav__link--year) {
			@media (max-width: 800px) {
				display: none;
			}
		}

		&:not(.active):hover {
			color: #fff;
		}
	}

	.nav__link--year {
		font-weight: 700;

		&:not(:first-child) {
			margin-left: 1rem;
			position: relative;

			&:before {
				content: '';
				height: 100%;
				width: 1px;
				background-color: var(--header-link-color);
				transform: rotate(25deg) translateY(-50%);
				top: 50%;
				left: -1rem;
				position: absolute;
			}
		}

		&.active {
			background-color: var(--header-link-color);
		}
	}

	.active {
		border-radius: 3px;
		color: #fff;
	}
</style>
