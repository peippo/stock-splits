import * as api from '$lib/api.js';

export async function get({ params }) {
	const { year, quarter } = params;
	const data = await api.get(`${year}/quarter/${quarter}`);

	return {
		body: data
	};
}
