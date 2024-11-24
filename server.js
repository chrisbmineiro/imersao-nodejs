import express from "express";
import routes from "./src/routes/routes.js";

const app = express();
routes(app)


// instanciando servidor
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// função para buscar um id e filtrar retorno
function buscaPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

// função get especifico para unico id
app.get("/posts/:id", (req, res) => {
    const index = buscaPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});
