import * as api from '$lib/api.js';

export async function get({ params }) {
	const { year } = params;
	const { data } = await api.get(`${year}`);

	return {
		body: data
	};
}
