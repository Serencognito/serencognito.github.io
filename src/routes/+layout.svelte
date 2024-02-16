<script lang="ts">
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import TopBar from '$lib/components/layout/TopBar.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell class="h-screen">
	<svelte:fragment slot="pageHeader">
		<TopBar />
	</svelte:fragment>

	<!-- TODO: Make this extend to top -->
	<svelte:fragment slot="sidebarRight">
		<Sidebar />
	</svelte:fragment>

	<slot />
</AppShell>
