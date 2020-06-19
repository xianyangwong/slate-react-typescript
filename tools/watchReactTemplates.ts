const watch = require('node-watch')
const exec = require('child_process').exec

watch(`${__dirname}/../src/react`, { recursive: true }, (evt, name) => {
    console.log(`file ${name} updated`)
    exec('yarn compile')
}).on('ready', () => {
    console.log('watching react files')
})
