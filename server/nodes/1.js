

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.VgsyL6kx.js","_app/immutable/chunks/disclose-version.KWiC_fJW.js","_app/immutable/chunks/runtime.xS2s6AgZ.js","_app/immutable/chunks/entry.KQIz_nxn.js"];
export const stylesheets = [];
export const fonts = [];
