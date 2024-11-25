import express from "express";
import multer from "multer";
import {
  listPosts,
  addNewPost,
  uploadImage,
  updateNewPost,
} from "../controllers/postsController.js";
import listUsers from "../controllers/usersController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, "uploads/"); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  },
});

// Cria uma instância do middleware Multer
const upload = multer({ storage: storage });
// linux ou mac, isso basta
// const upload = multer({ dest: "./uploads" });

export default function routes(app) {
  app.use(express.json());
  // criando rotas para posts
  app.get("/posts", listPosts);
  // listar usuarios
  app.get("/usuarios", listUsers);
  // metodo post para adicionar posts
  app.post("/posts", addNewPost);
  // metodo para upload de imagens
  app.post("/upload", upload.single("imagem"), uploadImage);
  // metodo para atualizar upload
  app.put("/upload/:id", updateNewPost);
  }
  // metodo para deletar posts
  // app.delete("/posts/:id", (req, res) => {
  //   const index = buscaPostPorID(req.params.id);
  //   posts.splice(index, 1);
  //   res.status(200).json(posts);
  // });
  // metodo para atualizar posts
  // app.put("/posts/:id", (req, res) => {
  //   const index = buscaPostPorID(req.params.id);
  //   posts[index].descricao = req.body.descricao;
  //   posts[index].imgUrl = req.body.imgUrl;
  //   posts[index].alt = req.body.alt;
  //   res.status(200).json(posts);
  // });
