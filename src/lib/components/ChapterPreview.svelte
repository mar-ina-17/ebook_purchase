<script lang="ts">
	interface Chapter {
		number: number;
		title: string;
		strapline: string;
		excerpt: string;
	}
	let { chapters } = $props();
	let currentExpandedChapterIndex = $state(1);
	let currentExpandedChapter = $derived(
		chapters.find((chapter: Chapter) => chapter.number === currentExpandedChapterIndex)
	);
	let isChapterExpanded = (chapter: Chapter) => currentExpandedChapterIndex === chapter.number;
</script>

<section class="landing-page-section">
	<h2 class="mb-l">What you're getting</h2>
	<div class="chapter-container">
		<ul>
			{#each chapters as chapter}
				<li>
					<button
						class="chapter-title"
						class:selected-chapter-title={isChapterExpanded(chapter)}
						aria-controls={`chapter-info-${chapter.number}`}
						aria-expanded={isChapterExpanded(chapter)}
						onclick={() => (currentExpandedChapterIndex = chapter.number)}
					>
						<h3>Chapter {chapter.number}: {chapter.title}</h3>
					</button>
				</li>
			{/each}
		</ul>
		<div class="chapter-info">
			<h3 class="chapter-strapline italic mb-s">{currentExpandedChapter.strapline}</h3>
			<p>{currentExpandedChapter.excerpt}</p>
		</div>
	</div>
</section>

<style>
	.chapter-container {
		display: flex;
		justify-content: space-between;
	}

	.chapter-container ul {
		width: 40%;
	}

	.chapter-info {
		width: 55%;
	}

	.chapter-title {
		border-bottom: 1px solid grey;
		width: 100%;
		padding: 12px;
		text-align: left;
		cursor: pointer;
	}

	.selected-chapter-title {
		background-color: black;
		border: none;
		color: white;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 1px 3px rgba(0, 0, 0, 0.08);
	}
</style>
