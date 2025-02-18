// import { MongoClient, MongoClientOptions } from 'mongodb';

// const url = process.env.MONGODB_URL;
// const options: MongoClientOptions = {
//   tls: true,  // Ensures SSL/TLS connection
//   tlsAllowInvalidCertificates: false, // Set to true only for testing (not recommended for production)
// }

// let client;
// let clientPromise;

// if (!url) {
//   throw new Error('Please add your Mongo URL to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so the value is preserved
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(url, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise!;
// } else {
//   // In production mode, it's best to not use a global variable
//   client = new MongoClient(url, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

import { MongoClient, MongoClientOptions } from 'mongodb';

const url = process.env.MONGODB_URL;
const options: MongoClientOptions = {
  tls: true,  // Ensures SSL/TLS connection
  tlsAllowInvalidCertificates: false, // Set to true only for testing (not recommended for production)
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!url) {
  throw new Error('Please add your Mongo URL to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the value is preserved
  if (!global._mongoClientPromise) {
    client = new MongoClient(url, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise as Promise<MongoClient>; // Explicitly cast it to Promise<MongoClient>
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(url, options);
  clientPromise = client.connect();
}

export default clientPromise;
