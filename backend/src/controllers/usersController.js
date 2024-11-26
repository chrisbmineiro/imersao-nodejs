import getAllUsers from "../models/usersModel.js";

export default async function listUsers(req, res) {
  // chamar função para busca
  const users = await getAllUsers();
  // enviar resposta 200 (ok) com os posts
  res.status(200).json(users);
}