const { exec } = require('node:child_process');
test('nrm -v', () => {
    const { name, version } = require('./package.json');
    exec(`node bin/index.js -v`, (error, stdout, stderr) => {
        if (error) {
            return;
        }
        expect(stdout).toContain(`${name}--${version}`)
    })
})
test('nrm -list', () => {
    const registryMap = require('./bin/data.json');
    exec(`node bin/index.js -list`, (error, stdout, stderr) => {
        if (error) {
            return;
        }
        Object.values(registryMap).forEach(registry => {
            expect(stdout).toContain(registry)
        })
    })
})

test('nrm -add', () => {
    const name = 'localhost';
    const registry = 'https:localhost'
    exec(`node bin/index.js -add  ${name} ${registry}`, (error, stdout, stderr) => {
        if (error) {
            return;
        }
        const registryMap = require('./data.json');
        expect(registry).toContain(registryMap[name])
        // anyContain
    })
})