/* eslint-disable no-var */
// import { MongoClient } from 'mongodb';

// const url = process.env.MONGODB_URL
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URL) {
//   throw new Error('Please add your Mongo URI to .env.local')
// }
// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so the value is preserved
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(url, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable
//   client = new MongoClient(url, options)
//   clientPromise = client.connect()
// }

// export default clientPromise;

import { MongoClient, MongoClientOptions } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const url = process.env.MONGODB_URL;
const options: MongoClientOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URL) {
  throw new Error('Please add your Mongo URL to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the value is preserved
  if (!global._mongoClientPromise) {
    client = new MongoClient(url!, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(url!, options);
  clientPromise = client.connect();
}

export default clientPromise;
