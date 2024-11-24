import conectarAoBanco from "../config/dbConfig.js";

// variavel para conexão com banco
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

async function getTodosUsuarios() {
  const db = conexao.db("instabytes");
  const colecao = db.collection("usuarios");
  return colecao.find().toArray();
}

export default getTodosUsuarios;
