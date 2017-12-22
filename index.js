var cssSibling = require('css-sibling')
var styleResolve = require('style-resolve')

module.exports = transform

function transform (filename, src, options, done){
  try{
    var filenames = Object.keys(options).map(filename => {
      return styleResolve.sync(filename)
    })
    var siblings = Object.values(options)
    var siblingName = siblings[filenames.indexOf(filename)]

    if (!siblingName) {
      done(null, src)
      return
    }

    cssSibling(src, siblingName, src => {
      done(null, src)
    })
  } catch (e) {
    return done(e)
  }
}
