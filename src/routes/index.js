import express from "express";
import livros from "./livrosRouts.js";
const routers = (app)=>{
    app.get('/',(req,res)=>{res.status(200).send({titulo:"Testando rota base"})});

    app.use(livros);
}

export default routers