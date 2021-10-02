import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

// check the MongoDB URI
if (!MONGODB_URI) {
  console.error(
    'No mongo database set in environment variables, defaulting back to dummy data.'
  );
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (!MONGODB_URI) return;
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // Connect to cluster
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
