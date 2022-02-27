import * as api from '$lib/api.js';

export async function get({ params }) {
	const { year, month } = params;
	const data = await api.get(`${year}/month/${month}`);

	return {
		body: data
	};
}
