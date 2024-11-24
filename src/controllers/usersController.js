import getTodosUsuarios from "../models/usersModel.js";

export default async function listarUsuarios(req, res) {
  // chamar função para busca
  const usuarios = await getTodosUsuarios();
  // enviar resposta 200 (ok) com os posts
  res.status(200).json(usuarios);
}
