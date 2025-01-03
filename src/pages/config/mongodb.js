    import mongoose from "mongoose";

    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
    throw new Error("Veuillez définir la variable d'environnement MONGODB_URI");
    }

    let cached = global.mongoose;
    if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
    }

    async function dbConnect() {
        if (mongoose.connections[0].readyState) {
            return mongoose.connections[0];
        }
        return mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

    export default dbConnect;
