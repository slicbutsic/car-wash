// /* eslint-disable no-var */
// import { MongoClient } from 'mongodb';

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// const url = process.env.MONGODB_URL;
// // const options: MongoClientOptions = {};

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (!process.env.MONGODB_URL) {
//   throw new Error('Please add your Mongo URL to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so the value is preserved
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(url!);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise!;
// } else {
//   // In production mode, it's best to not use a global variable
//   client = new MongoClient(url!);
//   clientPromise = client.connect();
// }

// export default clientPromise;

import { MongoClient, MongoClientOptions } from 'mongodb';

if (!process.env.MONGODB_URL) {
  throw new Error('Please add your Mongo URL to .env.local')
}

const options: MongoClientOptions = {
  tls: true,
  tlsAllowInvalidCertificates: true // Only use this for testing, not in production
};


const uri = process.env.MONGODB_URL;
// const options: MongoClientOptions = {
//   ssl: true,
//   sslValidate: true,
// };

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise;
