import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
    const reqBody = await request.json();
    console.log(reqBody);

    return json({ success: true });
}
