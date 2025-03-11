<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { loadStripe } from '@stripe/stripe-js';

	let { children, ...props } = $props();
	async function onclick() {
		try {
			const srtipe = await loadStripe(PUBLIC_STRIPE_KEY);
			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const { sessionId } = await response.json();
			console.log(sessionId);
			await srtipe?.redirectToCheckout({ sessionId });
		} catch (error) {
			goto('/checkout/failure');
		}
	}
</script>

<button {...props} {onclick}>
	{@render children()}
</button>

<style>
	button {
		background-color: black;
		color: white;
		padding: 20px 24px;
		font-weight: normal;
		font-size: 22px;
		text-transform: uppercase;
		transition: all 0.3s;
		border: 1px solid white;
	}

	button:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
</style>
