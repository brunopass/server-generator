const fs = require('fs')
const dirname = process.cwd()
const {exec} = require('child_process')
const { dir } = require('console')
const methods = ['GET', 'POST', 'PATCH', 'DELETE']

const createDir = (dirName,name,callback) => {
    fs.mkdir(`${dirname}/${dirName}/${name}`, {recursive: true}, error => {

        if(callback){
            callback()
        }
    })
}

const createSubDir = (path,dirs = [],callback) => {
    for(i in dirs){
        createDir(`${dirname}/${path}/${dirs[i]}`, callback)
    }
}

const createFile = async(dirName,name,from,val) => {
    fs.writeFileSync(`${dirname}/${dirName}/${name}`, require(`${from}`)(val), error => {

    })
}

const fileDependents = dirName => setTimeout( async() =>{
    console.log('Creating files')
    createFile(dirName,'.env', '../templates/env')
    createFile(dirName, '.gitignore', '../templates/gitignore')
    createFile(dirName,'config.js', '../templates/config')
    for(i in methods){
        await createFile(dirName,`controllers/${methods[i]}.js`, '../templates/route', `${methods[i].toLowerCase()}`)
    }
    
}, 1000)

const execCommand = async(dirName,cmd,msg) => {
    console.log(msg)
    await exec(cmd, {cwd: `${dirname}/${dirName}`}, (error,stdout,stderr)=>{

    })
}

module.exports = {
    createDir, createSubDir, createFile, fileDependents, execCommand
}