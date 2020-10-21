const generateKeyPairs = require("../functions/security")

module.exports = () => {
    const keys = generateKeyPairs()
    return JSON.stringify(keys)
}