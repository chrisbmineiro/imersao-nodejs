import express from "express";
import listarPosts from "../controllers/postsController.js";
import listarUsuarios from "../controllers/usersController.js";

function routes(app) {
  app.use(express.json());
  // criando rotas para posts
  app.get("/posts", listarPosts);
  app.get("/usuarios", listarUsuarios);
}

export default routes;
