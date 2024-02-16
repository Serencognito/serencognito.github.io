<script lang="ts">
	import EditorPage from '$lib/components/ui/EditorPage.svelte';

	let { data } = $props();

	let lineCount = $state(0);
	const lineHeight = 24;

	// This could definitely be more elegant, but the data here is very simple so it's fine :)
	let headerHeight = $state(null as number | null);
	let paragraph1Height = $state(null as number | null);
	let paragraph2Height = $state(null as number | null);
	let paragraph3Height = $state(null as number | null);

	$effect(() => {
		if (paragraph1Height && paragraph2Height && paragraph3Height && headerHeight) {
			lineCount = Math.ceil(
				(headerHeight + paragraph1Height + paragraph2Height + paragraph3Height) / lineHeight
			);
		}
	});
</script>

<EditorPage {lineCount} type="commentblock">
	<section id="about-me" class="text-surface-400">
		<p bind:clientHeight={headerHeight}>
			<br />
			About Me
			<br /><br />
		</p>
		<p bind:clientHeight={paragraph1Height}>
			I am a Full-stack Software Developer, qualified with a BSc Computer Science degree completed
			in 2016. I have been working since 2017 and primarily work on projects with a C# Service
			Layer, SQL Server Data Layer and a front-end developed using Angular and TypeScript.
			<br /><br />
		</p>

		<p bind:clientHeight={paragraph2Height}>
			I have also previously worked extensively maintaining older jQuery focused applications and
			have more recently been using Svelte (at times paired with Electron for desktop) for projects
			I get the opportunity to self-start. In my free time I've recently been spending time getting
			to grips grip with Godot's GDScript and occasionally learning Go. I generally pick up skills
			quickly and love learning and using new technologies and frameworks.
			<br /><br />
		</p>
		<p bind:clientHeight={paragraph3Height}>
			Although originally born in South Africa, I have dual citizenship and moved to Scotland in
			2021 to further my career opportunities and improve my own skills in new environments.
		</p>
	</section>
</EditorPage>
