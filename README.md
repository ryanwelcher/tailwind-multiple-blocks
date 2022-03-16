## Tailwind CSS Custom Block Plugin

This repo leverages the `@wordpress/scripts` package and it's ability to use PostCSS to introduce TailwindCSS to the build process.

Additionally, by using the [`postcss-multiple-tailwind`](https://www.npmjs.com/package/postcss-multiple-tailwind) we are able create css files for each block that only contain the classes being used in the block.


## Setup
1. Checkout this repo `git clone https://github.com/ryanwelcher/tailwind-multiple-blocks.git`
2. Cd into the new directory `cd tailwind-multiple-blocks`
3. Run `npm i` to install dependencies

Once set up, all of the standard commands from `@wordpress/scripts` will work normally:

1. `npm start` - starts the dev build process in watch mode
2. `npm run build` - Build the files for production.
