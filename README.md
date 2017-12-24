# sheetify-sibling [![stability][0]][1]
 [![npm version][2]][3] [![downloads][4]][5]
 ![travis build][6]

A sheetify plugin add sibling class to any *firstLevel* class selector.

Apply on global css module in *node_modules/* only.

## why
Recently I dev a website without tachyons, after I used it on a new component. Tachyons conflicted with my old code. I can solve this if I can use tachyons with an additional identify class 'tachyons' like semantic-ui's 'ui', then sheetify-sibling born.

```html
<!-- semantic-ui -->
<div class="ui four column doubling stackable grid container">
  <div class="column">
    <p></p>
    <p></p>
  </div>
</div>

<!--
  tachyons: I'd like to have a identify class too
  sheetify-sibling: you will..
-->
<p class="tachyons pa1 fs-normal center cf"></p>
```

## example

```css
/* a global css module */
.a{
  color: red
}
.b, .c{
  color: black
}
.c > .e .f{
  color: green
}
.d.v{
  font-size: 10px
}

```

```js
/* run */
const browserify = require('browserify')

browserify()
 .transform('sheetify', { use: [
   [ 'sheetify-sibling', {'somecsslib': 'sibling'} ]
 ] })
 .bundle()
```

```css
/* result */
.a.sibling{
  color: red
}
.b.sibling, .c.sibling{
  color: black
}
.c.sibling > .e .f{
  color: green
}
.d.v.sibling{
  font-size: 10px
}
```

## usage

### javascript
```js
const browserify = require('browserify')

browserify()
 .transform('sheetify', { use: [ 'sheetify-sibling', {
   // globalCssModuleName: siblingName
   'tachyons-flexbox': 'tachyons',
   'tachyons-skins': 'tachyons'
 } ] })
 .bundle()
```

### package.json
```json
{
  "browserify": {
    "transform": [
      [ "sheetify",
        {
          "u": [
            [
              "sheetify-sibling", {
                "tachyons-flexbox": "tachyons",
                "tachyons-skins": "tachyons"      
              }
            ]
          ]
        }        
      ]
    ]
  }
}
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-stable-green.svg
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/sheetify-sibling.svg?style=flat-square
[3]: https://npmjs.org/package/sheetify-sibling
[4]: http://img.shields.io/npm/dm/sheetify-sibling.svg?style=flat-square
[5]: https://npmjs.org/package/sheetify-sibling
[6]: https://travis-ci.org/stackcss/sheetify-sibling.svg?branch=master
