module.exports = () => {
    return`const {sha256} = require('js-sha256')
const config = require('../../config')

const encrypt = path => {
    return sha256(path, config.PRIVATE_KEY)
}

module.exports = encrypt`
}