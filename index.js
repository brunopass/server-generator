const addExtra = require('./functions/extras')
const {createDir, createFile, createSubDir, execCommand, fileDependents} = require('./functions/functions')

const execution = (dirName, args) => {

    if(dirName === undefined){
        dirName = process.cwd()
    }

    const methods = ['GET', 'POST', 'PATCH', 'DELETE']
    
    console.log('Creating directories')

    createDir(dirName,'controllers',createSubDir.bind(this, dirName,'controllers',methods))
    createDir(dirName,'services')
    createDir(dirName,'libraries')
    createDir(dirName,'keys', createFile.bind(this,dirName, '/keys/keys.json', '../templates/keys.js'))
    createDir(dirName,'tests')
    createDir(dirName,'utils/middlewares', createFile.bind(this, dirName,'index.js', '../templates/index'))
    
    fileDependents(dirName)
    execCommand(dirName,'npm init -y','initializing project')
    execCommand(dirName,'npm git init','initializing git')
    execCommand(dirName,'npm i express helmet morgan cors dotenv cookie-parser status-parser','installing dependencies')
    addExtra(dirName, args)
}

module.exports = {execution}