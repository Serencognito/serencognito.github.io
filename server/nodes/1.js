

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3U5qkNfh.js","_app/immutable/chunks/disclose-version.KWiC_fJW.js","_app/immutable/chunks/runtime.xS2s6AgZ.js","_app/immutable/chunks/entry.5ALIceF0.js"];
export const stylesheets = [];
export const fonts = [];
