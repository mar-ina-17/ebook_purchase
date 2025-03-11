import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const reqBody = await request.json();
	console.log(reqBody);

	return json({ success: true });
}
