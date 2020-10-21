const { createDir, createFile, execCommand } = require("./functions")

const commands = ['--jwt','--eslint', '--mongo', '--sha256', '--aes256']

const addExtra = (dirName,args) => {
    for(i in args){
        if(commands.includes(args[i]))
            createExtra(commands.indexOf(args[i]), dirName)
    }
}

module.exports = addExtra

const createExtra = (index, dirName) => {

    const list = {
        0: ()=>{
            createJwt(dirName)
        },
        1: ()=>{
            createEslint(dirName)
        },
        2:()=>{
            createMongo(dirName)
        },
        3:()=>{
            createSha256(dirName)
        },
        4:()=>{

        }
    }

    list[index]()
}

const createJwt = dirName => {
    createDir(dirName, 'libraries/security', createFile.bind(this, dirName,'/libraries/security/jwt.js', '../templates/jwt'))
    execCommand(dirName, 'npm i jsonwebtoken', 'installing jwt')
    createDir(dirName,'keys', createFile.bind(this,dirName, '/keys/keys.json', '../templates/keys.js'))
}

const createEslint = dirName => {
    createFile(dirName, '.eslintrc.json', '../templates/eslint')
    execCommand(dirName, 'npm i eslint --save-dev', 'installing eslint')
}

const createMongo = dirName => {
    createDir(dirName, 'libraries/databases', createFile.bind(this, dirName,'/libraries/databases/mongo.js', '../templates/mongo'))
    execCommand(dirName, 'npm i mongodb', 'installing mongodb')
}

const createSha256 = dirName => {
    createDir(dirName, 'libraries/security', createFile.bind(this, dirName,'/libraries/security/sha256.js', '../templates/sha256'))
    execCommand(dirName, 'npm i js-sha256', 'installing sha256')
}