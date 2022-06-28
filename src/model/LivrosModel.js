import bibliotecaRepos from '../repositorio/BibbliotecaRepos.js'
class LivrosModel{

    lista(){      
        return bibliotecaRepos.lista();
    }
    adicionaLivro(livro){
        console.log("teste")
        return bibliotecaRepos.adiciona(livro)
    }
}

export default new LivrosModel