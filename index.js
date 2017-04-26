const SimpleMarkdown = require('./simple-markdown')
const fs = require('fs')

if (process.argv.length > 2) {
  const filename = process.argv[2]

  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err

    const mdParse = SimpleMarkdown.defaultBlockParse
    const mdOutput = SimpleMarkdown.defaultOutput

    const syntaxTree = mdParse(data)
    const reactElems = mdOutput(syntaxTree)
    console.log(JSON.stringify(syntaxTree, null, 4))
  })
}
