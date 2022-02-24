const base = import.meta.env.VITE_API_BASE_URL;

async function send({ method, path }) {
	const opts = { method, headers: {} };

	return fetch(`${base}/${path}`, opts)
		.then((res) => res.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path) {
	return send({ method: 'GET', path });
}
