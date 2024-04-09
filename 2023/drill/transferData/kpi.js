
let type = require('./kpi100.json')
Object.keys(type).forEach(item=>{
    type[item] = type[item].map(i => i.kpi)
})
const fs = require('node:fs');
fs.writeFileSync('kpi1001.json',JSON.stringify(type))