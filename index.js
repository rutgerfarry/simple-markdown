const SimpleMarkdown = require('./simple-markdown')
const fs = require('fs')

if (process.argv.length > 2) {
  const filename = process.argv[2]

  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err

    const mdParse = SimpleMarkdown.defaultBlockParse

    const syntaxTree = mdParse(data)
    console.log(JSON.stringify(syntaxTree, null, 4))
  })
}
