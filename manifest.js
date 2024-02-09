export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.jM3Oda6E.js","app":"_app/immutable/entry/app.fDoldx_r.js","imports":["_app/immutable/entry/start.jM3Oda6E.js","_app/immutable/chunks/entry.KQIz_nxn.js","_app/immutable/chunks/runtime.xS2s6AgZ.js","_app/immutable/entry/app.fDoldx_r.js","_app/immutable/chunks/runtime.xS2s6AgZ.js","_app/immutable/chunks/disclose-version.KWiC_fJW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./server/nodes/0.js')),
			__memo(() => import('./server/nodes/1.js')),
			__memo(() => import('./server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);
