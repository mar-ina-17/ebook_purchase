<script>
	import twitterIcon from '$assets/icons/twitter.webp';
	import { Button, FAQSectionItem } from '$components';

	let { faqs } = $props();
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		{#each faqs as faq}
			<FAQSectionItem question={faq.question} answer={faq.answer} />
		{/each}
	</div>
	<div class="additional-info">
		<Button class="mt-s">Buy now</Button>
		<p class="mt-m">Any other question?</p>
		<a href="https://x.com/KIZO_ES">
			Hit me up on twitter <img src={twitterIcon} alt="Twitter icon" class="twitter-icon" />
		</a>
	</div>
</section>

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: grey;
	}

	.twitter-icon {
		width: 16px;
		height: 16px;
	}

	.additional-info a {
		text-decoration: underline;
	}
</style>
