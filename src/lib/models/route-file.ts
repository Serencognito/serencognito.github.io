import type { SvelteComponent } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

/**
 * Represents a route file.
 */
export interface RouteFile {
	/**
	 * The path to the file.
	 */
	path: string[];

	/**
	 * The name of the route file.
	 */
	name: string;

	/**
	 * The icon associated with the route file.
	 */
	icon: any | null;

	/**
	 * The style of the icon.
	 */
	iconStyle: string;
}
