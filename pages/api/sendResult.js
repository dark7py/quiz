const {MongoClient} = require('mongodb')

export default async function sendResult(req, res) {
    const result = req.body
    console.log("result", result);
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    let test = []
    try {

        await client.connect()
        const db = client.db('Quiz');
        const resultCollection = db.collection('results');
        test = await resultCollection.insertOne(result)
        res.status(200).send(test);
    } catch (err) {
        console.log(err);
        res.status(500).send()
    } finally {
        await client.close()
    }
}


