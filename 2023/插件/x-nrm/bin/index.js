#!/usr/bin/env node
/**
 * npm pack 将node项目 本地构建安装包
 * 本地构建的只能-g全局安装才可以使用

 */
const { name, version } = require('../package.json');
const { execSync } = require('node:child_process');
const fs = require('node:fs');
let argv = process.argv.slice(2);
let registryMap = require('./data.json')
const writeDataJson = (config) => {
    fs.writeFileSync('./data.json', JSON.stringify(config))
}
argv[0] = argv[0] || 'v';
switch (argv[0].replaceAll('-', '')) {
    case 'V':
    case 'v':
    case 'version':
        console.log(`${name}--${version}`)
        break;
    case 'ls':
    case 'list':
        Object.entries(registryMap).forEach(([name, url]) => {
            console.log(`${name} ==> ${url}`)
        })
        break
    case 'use':
        let url = registryMap[argv[1]];
        if (url) {
            execSync(`npm config set registry ${url}`)
        } else {
            console.log(`${argv[1]} is not in list`)
        }
        break;
    case 'add':
        const [addName, addUrl] = argv.slice(1);
        if (addName && addUrl && !registryMap[addName]) {
            registryMap[addName] = addUrl;
            writeDataJson(registryMap);
        } else {
            console.log(`${addName}${addUrl} is requird or in list`)
        }
        break;
    case 'delete':
        const delName= argv[1];
        if (delName && registryMap[delName]) {
            delete registryMap[delName]
            writeDataJson(registryMap)
        } else {
            console.log(`${delName} is requird or not in list`)
        }
        break;
    default:
        console.log(argv);
        break;
}