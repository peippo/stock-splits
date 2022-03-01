<img src="https://stock-splits.vercel.app/banner.png" alt="Banner image">

A stock splits calendar app built to test [SvelteKit](https://kit.svelte.dev/). Data from [polygon.io](https://www.polygon.io).

### <a href="https://stock-splits.vercel.app/">Open the project</a>

Polygon.io API limits free calls to 5 per minute so I decided to move the stock splits data to a Node.js server and only fetch the ticker information from Polygon. In the end I also set all the Svelte routes to prerender, so the server should be redundant. The splits data is currently never refreshed though, maybe a todo for later...

The Node.js/SQLite server repository is at [stock-splits-server](https://github.com/peippo/stock-splits-server).

<img src="https://stock-splits.vercel.app/screenshot.png" alt="Screenshot">
