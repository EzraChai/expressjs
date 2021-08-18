const crypto = require('crypto');
const { secretKey } = require('../config/config.default');


//获取 crypto 支持的伞列算法
// console.log(crypto.getHashes())

// console.log(crypto.createHash('md5').update(`${secretKey}jakejake`).digest('hex'))

module.exports = str => {
    return crypto.createHash('md5').update(`${secretKey}${str}`).digest('hex')
}