import { ObjectId } from "mongodb";
import connectDB from "../config/dbConfig.js";

// variavel para conexão com banco
const connection = await connectDB(process.env.STRING_CONNECTION);

export async function getAllPosts() {
  const db = connection.db("instabytes");
  const posts = db.collection("posts");
  return posts.find().toArray();
}

export async function createPost(newPost) {
  const db = connection.db("instabytes");
  const posts = db.collection("posts");
  return posts.insertOne(newPost);
}

export async function updatePost(id, newPost) {
  const db = connection.db("instabytes");
  const posts = db.collection("posts");
  const objId = ObjectId.createFromHexString(id);
  return posts.updateOne({_id: new ObjectId(objId)}, { $set: newPost });
}
