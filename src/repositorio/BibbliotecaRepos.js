import query from '../dataBase/queriesInfra.js'

class BibliotecaRepos{
    adiciona(livro){
        const sql = 'INSERT INTO Livros SET ?' 
        return query(sql, livro);
    }

    lista(){
        const sql = 'SELECT * FROM Livros' 
        return query(sql);
    }

    buscaPorId(id){
        const sql = `SELECT * FROM Livros WHERE id=${id}`

        return query(sql, id);
    }

    deleta(id){
        const sql = 'DELETE FROM Livros WHERE id=?'

        return query(sql, id);
    }

    altera(id, valores){
        const sql = 'UPDATE Livros SET ? WHERE id=?'
        return query(sql, [valores, id]);
    }
}
export default new BibliotecaRepos;