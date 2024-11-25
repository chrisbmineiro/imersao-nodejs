import { getAllPosts, createPost, updatePost } from "../models/postsModel.js";
import fs from "fs";

export async function listPosts(req, res) {
  // chamar função para busca
  const posts = await getAllPosts();
  // enviar resposta 200 (ok) com os posts
  res.status(200).json(posts);
}

export async function addNewPost(req, res) {
  const newPost = req.body;
  try {
    const postCreated = await createPost(newPost);
    res.status(201).json(postCreated);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const postCreated = await createPost(newPost);
    const imageUpdated = `uploads/${postCreated.insertedId}.png`;
    fs.renameSync(req.file.path, imageUpdated);
    res.status(200).json(postCreated);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}
// funcção para atualizar post
export async function updateNewPost(req, res) {
  const id = req.params.id;
  const imageUrl = `http://localhost:3000/${id}.png`;
  const updatedPost = {
    descricao: req.body.descricao,
    imgUrl: imageUrl,
    alt: req.body.alt,
  };
  try {
    const postCreated = await updatePost(id, updatedPost);
    res.status(200).json(postCreated);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
// funcção para atualizar post
// export function buscaPostPorID(id) {
//   return posts.findIndex((post) => post.id == id);
// }
