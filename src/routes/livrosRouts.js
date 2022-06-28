import express from 'express';
import LivroController from '../controller/LivrosController.js'

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .post('/livros', LivroController.postarLivros)


export default router;    