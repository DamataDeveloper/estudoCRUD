import livrosModel from '../model/LivrosModel.js'
class LivrosController{
    static listarLivros = (req,res)=>{
        livrosModel.lista()
            .then(resultados=>{
                res.status(200).json(resultados)                
            })
            .catch(erros=>res.status(400).json(erros))        
    }
    static postarLivros = (req,res)=>{
        const livro = req.body;
        console.log(livro)
        livrosModel.adicionaLivro(livro)
            .then(livroCadastrado=>{
                res.status(201).json(livroCadastrado)
            })
            .catch(erros=>{
                res.status(400).json(erros)
            })
    }
}
export default LivrosController;