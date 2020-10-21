module.exports = () => {
    return`const {MongoClient} = require('mongodb')
const config = require('../../config')

/**
 * Mongo CRUD object
 * @constructor db: your db name
 * @constructor collection: your collection name
 */
class Mongo{
    #db
    #collection
    constructor(db,collection){
        this.#db = db
        this.#collection = collection
    }

    /**
    * Find One
    * @param {[JSON]} query : json query, example: {_id: '1234'}
    * @returns {[JSON]} JSON
    */
    FindOne(query){
        return new Promise(async(resolve,reject)=>{
            const client = new MongoClient(config.MONGO_URI, { useUnifiedTopology: true}, { useNewUrlParser: true })
            try{
                client.connect(err => {

                    if(err){
                        reject(new Error(err))
                    }

                    const db = client.db(this.#db).collection(this.#collection)
                    const data = db.findOne(query)
                    resolve(data)
                })
            }catch(err){
                reject(new Error(err))
            }finally{
                client.close()
            }
        })
    }

    /**
    * Find many
    * @param {[JSON]} query: json query, example: {_id: '1234'}
    * @returns {[Array]} Array 
    */
    Find(query){
        return new Promise(async(resolve,reject)=>{
            const client = new MongoClient(config.MONGO_URI, { useUnifiedTopology: true}, { useNewUrlParser: true })
            try{
                client.connect(err => {

                    if(err){
                        reject(new Error(err))
                    }

                    const db = client.db(this.#db).collection(this.#collection)
                    db.find(query).toArray((err,data)=>{
                        try{
                            resolve(data)
                        }catch{
                            reject(new Error(err))
                        }
                    })
                    resolve(data)
                })
            }catch(err){
                reject(new Error(err))
            }finally{
                client.close()
            }
        })
    }

    /**
    * Insert One
    * @param {[JSON]} data: json object, example: {_id: '1234', name: 'example', password: 'secret'}
    * @returns {[JSON]} Mongo result object
    */
    InsertOne(data){
        return new Promise(async(resolve,reject)=>{
            const client = new MongoClient(config.MONGO_URI, { useUnifiedTopology: true}, { useNewUrlParser: true })
            try{
                client.connect(err => {
                    
                    if(err){
                        reject(new Error(err))
                    }
                    const db = client.db(this.#db).collection(this.#collection)
                    db.insertOne(data)
                    .then(result => {
                        resolve(result)
                    })
                    .catch(err => {
                        reject(new Error(err))
                    })
                })
            }catch(err){
                reject(new Error('error'))
            }finally{
                client.close()
            }
        })
    }

    /**
    * Update One
    * @param {[JSON]} query: json query, example: {_id: '1234'}
    * @param {[JSON]} data: json object, example: {name: 'example', password: 'secret'}
    * @returns {[JSON]} Mongo result object
    */
    UpdateOne(query,data){
        return new Promise(async(resolve,reject)=>{
            const client = new MongoClient(config.MONGO_URI, { useUnifiedTopology: true}, { useNewUrlParser: true })
            try{
                client.connect(err => {
                    
                    if(err){
                        reject(new Error(err))
                    }
                    const db = client.db(this.#db).collection(this.#collection)
                    db.updateOne(query,{"$set":data})
                    .then(result => {
                        resolve(result)
                    })
                    .catch(err => {
                        reject(new Error(err))
                    })
                })
            }catch(err){
                reject(new Error('error'))
            }finally{
                client.close()
            }
        })
    }

    /**
    * Delete One
    * @param {[JSON]} query: json query, example: {_id: '1234'}
    * @returns {[JSON]} Mongo result object
    */
    DeleteOne(query){
        return new Promise(async(resolve,reject)=>{
            const client = new MongoClient(config.MONGO_URI, { useUnifiedTopology: true}, { useNewUrlParser: true })
            try{
                client.connect(err => {
                    
                    if(err){
                        reject(new Error(err))
                    }
                    const db = client.db(this.#db).collection(this.#collection)
                    db.deleteOne(query)
                    .then(result => {
                        resolve(result)
                    })
                    .catch(err => {
                        reject(new Error(err))
                    })
                })
            }catch(err){
                reject(new Error('error'))
            }finally{
                client.close()
            }
        })
    }

}

module.exports = Mongo`
}