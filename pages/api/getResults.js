const {MongoClient} = require('mongodb')

export async function getResults () {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    let res = []
    try {
        await client.connect()
        res = await client.db('Quiz').collection('results').find().toArray();
        return res;
    } catch (err) {
        console.log(err);
    } finally {
        await client.close()
    }
}
