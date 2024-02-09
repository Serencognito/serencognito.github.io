import { H as escape, I as store_get, J as unsubscribe_stores, E as pop, A as push } from "../../chunks/index.js";
import { g as getContext } from "../../chunks/main-client.js";
import "../../chunks/exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Error$1($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<h1>${escape(store_get($$store_subs, "$page", page).status)}</h1> <p>${escape(store_get($$store_subs, "$page", page).error?.message)}</p>`;
  unsubscribe_stores($$store_subs);
  pop();
}
export {
  Error$1 as default
};
