# Anbarasan

Anbarasan is a minimal theme for [Ghost](https://github.com/TryGhost/Ghost) that extendeds the Solo Ghost theme focused on showcasing the work of an individual writer or creator. This theme is highly customizable, with a few simple settings that allow you to quickly apply your own personal style to your site.

**Demo: https://solo.ghost.io**

# Instructions

1. [Download this theme](https://github.com/anbarasanv/bytebyanbarasan/releases)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/solo.zip`, which you can then upload to your site.

```bash
yarn zip
```

## Copyright & License

Copyright (c) 2024 Anbarasan - Released under the [MIT license](LICENSE).
