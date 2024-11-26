import connectDB from "../config/dbConfig.js";

// variavel para conexão com banco
const connection = await connectDB(process.env.STRING_connection);

export default async function getAllUsers() {
    const db = connection.db("instabytes");
    const users = db.collection("usuarios");
    return users.find().toArray();
}