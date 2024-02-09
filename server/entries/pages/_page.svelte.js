import { E as pop, A as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push(false);
  $$payload.out += `<h1>Welcome to SvelteKit</h1> <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>`;
  pop();
}
export {
  _page as default
};
