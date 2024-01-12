const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const mongoURI = 'YOUR_MONGODB_URI';

async function connectToMongo() {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client.db();
}

app.get('/markers', async (req, res) => {
  try {
    const db = await connectToMongo();
    const markers = await db.collection('markers').find().toArray();
    res.json(markers);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
