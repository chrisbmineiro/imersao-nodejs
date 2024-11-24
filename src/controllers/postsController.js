import getTodosPosts from "../models/postsModel.js";

export default async function listarPosts(req, res) {
    // chamar função para busca
  const posts = await getTodosPosts();
  // enviar resposta 200 (ok) com os posts
  res.status(200).json(posts);
}
