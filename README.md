# forgeflex
A simple SASS grid library using flexbox!

## Getting started
You can copy directly the `forgeflex.scss` source file from `src/mixins` directory and import it to your own workflow. To know more about my personal workflow, checkout [ECMA6imize](https://github.com/therealedsheenan/ECMA6imize).

## Development
This repo uses the new [Grunt](http://gruntjs.com) version 1.0.1 as an experiment using sass, autoprefixer and watch dependencies. To start development, You can run the `default` grunt task by running:
```
npm start
```
or directly omitting grunt default task:
```
grunt
```
By default, sass files generates css maps and styles the css in an expanded way. You can reverse this and minify the files by running
```
npm run build
```
or directly omitting grunt production taks:
```
grunt build
```

## Summary
Forgeflex is a simple sass grid mixin that generates flex layout grids with only using 2 commands:

- `@include forgeParent()` - It accepts a paremeter see [this](https://github.com/therealedsheenan/forgeflex/blob/master/src/mixins/forgeflex.scss) to more about these properties. This snippet basically generates the parent of a flexbox layout.

- `@include forgeChild()` - It accepts a paremeter see [this](https://github.com/therealedsheenan/forgeflex/blob/master/src/mixins/forgeflex.scss) to more about about these properties.

The sample files in .html and .css is in the `dist` directory.
