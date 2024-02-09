

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0IVXWVKJ.js","_app/immutable/chunks/disclose-version.KWiC_fJW.js","_app/immutable/chunks/runtime.xS2s6AgZ.js"];
export const stylesheets = [];
export const fonts = [];
