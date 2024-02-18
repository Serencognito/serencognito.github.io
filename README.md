# What is this project?

This is a fun attempt at making a web based CV for myself, modelled after Visual Studio Code (with my current theme, layout, etc).

The hosted version can be found [here](https://serencognito.github.io/about-me/)

## Technologies

- Svelte 5 (in preview at the time of writing, this is largely a test of Svelte 5 vs 4, which I am familiar with)
- SvelteKit
- TailwindCSS
- [Skeleton](https://www.skeleton.dev/)

## Setup

Should be as simple as running

```bash
bun install
```

or

```bash
npm install
```

And should be good to go.

## Available Commands

I have primarily run this project with bun (again, as a test of a tool I don't know well yet), but the npm equivalents should all work.

```bash

# create a new project in the current directory

bun run dev #Start dev server

bun run build #Build for production

bun run preview #Test built site

bun run test #At the time of writing, I've just started and not done any tests yet

bun run test:inegration

bun run test:unit

bun run deploy #Deploy to github pages using the gh-pages package

bun run format #Run Prettier to format files

```
