<script lang="ts">
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import TopBar from '$lib/components/layout/TopBar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
</script>

<AppShell class="h-screen">
	<svelte:fragment slot="header">
		<TopBar />
	</svelte:fragment>

	<svelte:fragment slot="sidebarRight">
		<Sidebar />
	</svelte:fragment>

	<slot />
</AppShell>
