const {MongoClient} = require('mongodb')

export default async function sendResult(data) {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    let test = []
    try {
        await client.connect()
        test = await client.db('Quiz').collection('results').insertOne(data)
        //console.log(test);
        return test;
    } catch (err) {
        console.log(err);
    } finally {
        await client.close()
    }
}


