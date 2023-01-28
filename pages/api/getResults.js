const {MongoClient} = require('mongodb')

export default async function getResults (req, res) {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    let result = []
    try {
        await client.connect()
        result = await client.db('Quiz').collection('results').find().toArray();
        res.status(200).send(result)
    } catch (err) {
        console.log(err);
        res.status(500).send()
    } finally {
        await client.close()
    }

}
