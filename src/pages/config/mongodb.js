import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cinimaty';

console.log(MONGODB_URI);


if (!MONGODB_URI) {
throw new Error("Veuillez définir la variable d'environnement MONGODB_URI");
}

let cached = global.mongoose;
if (!cached) {
cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
if (cached.conn) {
    return cached.conn;
}
if (!cached.promise) {
    cached.promise = mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((mongoose) => mongoose);
}
cached.conn = await cached.promise;
return cached.conn;
}

export default dbConnect;