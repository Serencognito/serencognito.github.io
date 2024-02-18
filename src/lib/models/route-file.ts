import type { ComponentType, SvelteComponent } from 'svelte';
import type { Component } from 'svelte/compiler';
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

	/**
	 * The string representing the true route to the page
	 */
	route: string;

	/**
	 * The component associated with the route file.
	 */
	component?: ComponentType<SvelteComponent>;
}
