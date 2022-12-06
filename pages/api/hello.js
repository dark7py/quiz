// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {MongoClient} = require('mongodb')

export async function getQuizById(currentId) {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    let test = []
    try {
        await client.connect()
        test = await client.db('Quiz').collection('all-tests').find({"quiz.id": 0}).toArray()
        console.log(test);
        return test;
    } catch (err) {
        console.log(err);
    } finally {
        await client.close()
    }
}

export async function getAllTests() {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    let allTests = []
    try {
        await client.connect()
        allTests = await client.db('Quiz').collection('all-tests').find().toArray()
        console.log(allTests);
        return allTests;
    } catch (err) {
        console.log(err);
    } finally {
        await client.close()
    }
}

export default async function handler(req, res) {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)
    let adminDB = [];

    try {
        await client.connect()
        adminDB = await client.db('admin').collection('test').find().toArray()
    } catch (err) {
        console.log(err);
    } finally {
        await client.close()
    }

    res.status(200).json(
        adminDB
    )
}
