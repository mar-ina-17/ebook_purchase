<script lang="ts">
	import { AuthorSection, ChapterPreview, HeroSection } from '$components';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<HeroSection />
<ChapterPreview chapters={data.chapters} />
<AuthorSection />
