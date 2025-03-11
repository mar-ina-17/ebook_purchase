<script lang="ts">
	import failureIcon from '$assets/failure_icon.png';
	import PurchaseSummary from '$components/PurchaseSummary.svelte';
</script>

<PurchaseSummary
	altText="failed purchase"
	resumeText="Oops! Something went wrong..."
	imgSrc={failureIcon}
/>
