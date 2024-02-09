

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Ho3V-Khs.js","_app/immutable/chunks/disclose-version.KWiC_fJW.js","_app/immutable/chunks/runtime.xS2s6AgZ.js"];
export const stylesheets = [];
export const fonts = [];
