var Trumpet = require('trumpet')

var TAG_START = '<div'
var TAG_END = '</div>'

module.exports = transformHtml

function transformHtml(externalTags){

  var trumpet = Trumpet()

  trumpet.selectAll('body', function (node) {
    var readStream = node.createReadStream()
    var writeStream = node.createWriteStream()
    // insert external tags
    externalTags.forEach(function(tag){
      writeStream.write(TAG_START+' id="'+tag+'">'+TAG_END)
    })
    // append original content of head
    readStream.pipe(writeStream)
  })

  return trumpet

}

