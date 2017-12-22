var test = require('tape')
var fs = require('fs')
var transform = require('./')

test('main', t => {
  t.plan(1)
  var file = `${__dirname}/node_modules/tachyons-outlines/src/tachyons-outlines.css`
  var src = fs.readFileSync(file, 'utf8')
  var expect = '@custom-media --breakpoint-not-small screen and (min-width: 48em);@custom-media --breakpoint-medium screen and (min-width: 48em) and (max-width: 64em);@custom-media --breakpoint-large screen and (min-width: 64em);.outline.tachyons{outline:1px solid}.outline-transparent.tachyons{outline:1px solid transparent}.outline-0.tachyons{outline:0}@media (--breakpoint-not-small){.outline-ns.tachyons{outline:1px solid}.outline-transparent-ns.tachyons{outline:1px solid transparent}.outline-0-ns.tachyons{outline:0}}@media (--breakpoint-medium){.outline-m.tachyons{outline:1px solid}.outline-transparent-m.tachyons{outline:1px solid transparent}.outline-0-m.tachyons{outline:0}}@media (--breakpoint-medium){.outline-l.tachyons{outline:1px solid}.outline-transparent-l.tachyons{outline:1px solid transparent}.outline-0-l.tachyons{outline:0}}'

  transform(file, src, {'tachyons-outlines': 'tachyons'}, (err, actual) => {
    t.equal(actual, expect)
  })
})
