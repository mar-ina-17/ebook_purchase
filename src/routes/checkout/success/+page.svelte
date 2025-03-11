<script lang="ts">
	import successIcon from '$assets/success_icon.png';
	import PurchaseSummary from '$components/PurchaseSummary.svelte';
</script>

<PurchaseSummary
	altText="successful purchase"
	resumeText="Thank you for your purchase! Enjoy reading my book!"
	imgSrc={successIcon}
/>
