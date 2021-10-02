import { connectToDatabase } from '../../lib/db';

// /api/new-room

// POST /api/new-room
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const { db } = await connectToDatabase();
      const meetupsCollection = db.collection('rooms');

      const result = await meetupsCollection.insertOne(data);

      res
        .status(201)
        .json({ message: 'Room inserted!', id: result.insertedId });
    } catch (error) {
      res.status(500).json({ message: 'An error has occurred' });
      console.log(error);
    }
  }
}

export default handler;
