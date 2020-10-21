const keypair = require('keypair')

const generateKeyPairs = () => {
    const keys = keypair()
    return keys
}

module.exports = generateKeyPairs